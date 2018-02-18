import {Observable} from "typescript-observable";
import {ICart, IExportedCart} from "./interfaces/cart";
import {IWeightUnit} from "./interfaces/weight-unit";
import {ICurrency} from "./interfaces/currency";
import {IProduct} from "./interfaces/product";
import {ICartConfig, ICartOptionalConfig} from "./interfaces/cart-config";
import {Currencies} from "./currencies/currencies";
import {WeightUnits} from "./weight-units/weight-units";
import {IConvertObject, ICurrencyConverter} from "./interfaces/currency-converter";
import {IAddProduct} from "./interfaces/product-data";
import {Product} from "./product";
import CartEvent from "./cart-events"
import {CurrencyConverter} from "./currency-converter";
import deepEqual = require("deep-equal");

export class Cart extends Observable implements ICart {
    private config: ICartConfig;
    private currencyConverter: ICurrencyConverter;
    private currency: ICurrency;
    private weightUnit: IWeightUnit;
    private content: IProduct[] = [];


    constructor(config?: ICartOptionalConfig, currencyConverter?: ICurrencyConverter) {
        super();

        // Set config object
        config = config || {};
        this.config = {
            defaultCurrency: config.defaultCurrency || Currencies.EUR,
            defaultWeightUnit: config.defaultWeightUnit || WeightUnits.KILOGRAM,
            defaultVat: config.defaultVat || 0.25,
            vatInPrice: config.vatInPrice !== false,
            stackAddedProducts: config.stackAddedProducts !== false
        };

        this.currencyConverter = currencyConverter || new CurrencyConverter({});

        this.currency = this.config.defaultCurrency;
        this.weightUnit = this.config.defaultWeightUnit;
    }

    /**
     * Get the cart config.
     * @returns {ICartConfig} The cart config.
     */
    getConfig(): ICartConfig {
        return this.config;
    }

    /**
     * Get the number of items in the cart.
     * @returns {number} The number of products in the cart.
     */
    count(): number {
        return this.content
            .map(item => item.getQuantity())
            .reduce((a, b) => a + b, 0);
    };

    /**
     * Get the products in the cart.
     * @return {IProduct[]} The products in the cart.
     */
    getContents(): IProduct[] {
        return this.content;
    }

    get(id: number): IProduct | null {
        let index = this.content.map(product => product.getId()).indexOf(id);

        if (index !== -1) {
            return this.content[index];
        }

        return null;
    }

    /**
     * Add a single product to the cart
     * @param {IAddProduct} product The product to add
     * @returns {IProduct} The added product
     */
    addItem(product: IAddProduct): IProduct;

    /**
     * Add multiple products
     * @param {IAddProduct[]} product The products to add in a list
     * @returns {IProduct[]} The added products in a list
     */
    addItem(product: IAddProduct[]): IProduct[];
    addItem(product: IAddProduct | IAddProduct[]): IProduct | IProduct[] {

        // If multiple products is added, then add the one by one
        if (!Cart.isAddProduct(product)) {
            let products: IProduct[] = [];
            product.forEach(item => {
                products.push(this.addItem(item));
            });
            return products;
        }

        // Add possible missing attributes (needed to find the product)
        product.quantity = product.quantity || 1;
        product.weight = product.weight || 0;
        product.additionPrice = product.additionPrice || 0;
        product.vat = product.vat || this.getConfig().defaultVat;
        product.extra = product.extra || {};

        // If the products should be stacked then try to add it to a previous item
        if (this.config.stackAddedProducts) {

            // Get the index. If it is found then add it to the existing product.
            let index = this.findIndex(product);
            if (index !== -1) {

                // Update the quantity
                this.content[index].setQuantity(product.quantity, true);

                // Notify observers
                this.notify(CartEvent.PRODUCT_QUANTITY_CHANGED, {
                    product: this.content[index]
                });

                return this.content[index];
            }
        }

        // Add a completely new product.
        let newProduct = new Product(this.content.length, product, this);
        this.content.push(newProduct);

        // Notify observers
        this.notify(CartEvent.PRODUCT_ADD, {
            product: newProduct
        });

        return newProduct;
    }

    /**
     * Search for a product in the cart given an IAddProduct.
     * @param {IAddProduct} product The product to find in the cart.
     * @returns {number} The index of the product if it exist, otherwise -1.
     */
    private findIndex(product: IAddProduct): number {
        let index = -1;

        this.content.some((item, itemIndex) => {
            let data = item.getData();

            if (data.sku === product.sku && data.basePrice === product.basePrice
                && data.additionPrice === product.additionPrice && data.weight === product.weight
                && data.vat === product.vat && deepEqual(data.extra, product.extra)) {

                index = itemIndex;
                return true;
            }

            return false;
        });

        return index;
    }

    private static isAddProduct(product: IAddProduct | IAddProduct[]): product is IAddProduct {
        return product.hasOwnProperty('sku');
    }

    /**
     * Update the quantity of a product in the basket.
     * @param {number} id
     * @param {number} quantity
     * @return {boolean}
     */
    updateItemQuantity(id: number, quantity: number): boolean {
        let index = this.content.map(product => product.getId()).indexOf(id);

        if (index !== -1) {
            this.content[index].setQuantity(quantity);

            this.notify(CartEvent.PRODUCT_QUANTITY_CHANGED, {
                product: this.content[index]
            });

            return true;
        }

        return false;
    }

    /**
     * Remove an item from the cart
     * @param {number} id is the id of the product
     * @return {boolean} true if successful, otherwise false
     */
    removeItem(id: number): boolean {
        let index = this.content.map(product => product.getId()).indexOf(id);

        if (index !== -1) {

            let deletedProduct = this.content[index];
            this.content.splice(index, 1);

            // Notify observers
            this.notify(CartEvent.PRODUCT_REMOVE, {
                product: deletedProduct
            });

            return true;
        }

        return false;
    }

    /**
     * Clear the cart from all items.
     * @returns {ICart} Chaining this
     */
    clear(): ICart {
        this.content.splice(0, this.content.length);

        this.notify(CartEvent.CART_CLEAR, {});

        return this;
    }

    /**
     * Set the currency converter of this
     * @param {ICurrencyConverter} currencyConverter
     * @returns {ICart} Chaining this
     */
    setCurrencyConverter(currencyConverter: ICurrencyConverter): ICart {
        this.currencyConverter = currencyConverter;
        return this;
    }

    /**
     * Get the total price of the cart. The price is given in the currency set in the cart.
     * @param {boolean} vat If VAT should be included in the price.
     * @returns {number}
     */
    getTotalPrice(vat=true): number | null {
        return this.currencyConverter.convert(<IConvertObject>{
            amount: this.content.map(product => product.getTotalPrice(vat)).reduce((a, b) => a + b, 0),
            from: this.getDefaultCurrency(),
            to: this.getCurrency()
        });
    }

    /**
     * Get the total VAT of the products in the cart. Given in the currency set in the cart.
     * @returns {number} The VAT of all products.
     */
    getVat(): number | null {
        return this.currencyConverter.convert(<IConvertObject>{
            amount: this.content.map(product => product.getVat()).reduce((a, b) => a + b, 0),
            from: this.getDefaultCurrency(),
            to: this.getCurrency()
        });
    }

    /**
     * The currency of the cart.
     * @returns {ICurrency} The currency of the cart.
     */
    getCurrency(): ICurrency {
        return this.currency;
    }

    /**
     * Set the currency of the cart.
     * @param {ICurrency} currency The new currency to use in the cart.
     * @returns {ICart} Chained this
     */
    setCurrency(currency: ICurrency) : ICart {
        this.currency = currency;
        return this;
    }

    /**
     * Get the default currency of the cart. This is the currency the cart expects new items to be given in.
     * @returns {ICurrency} The default currency of the cart.
     */
    getDefaultCurrency(): ICurrency {
        return this.config.defaultCurrency;
    }

    /**
     * Get the weight of the cart.
     * @returns {number}
     */
    getWeight(): number {
        return this.content
            .map(product => product.getWeight(this.weightUnit))
            .reduce((a, b) => a + b, 0);
    }

    /**
     * Get the weight unit system for this cart.
     * @returns {IWeightUnit} The weight unit system (e.g. kilogram).
     */
    getWeightUnitSystem(): IWeightUnit {
        return this.weightUnit;
    }

    /**
     * Set the weight unit system for this cart.
     * @param {IWeightUnit} weightUnit The new weight unit system.
     * @returns {ICart} Chaining this
     */
    setWeightUnitSystem(weightUnit: IWeightUnit) : ICart {
        this.weightUnit = weightUnit;
        return this;
    }

    /**
     * Get the default unit system of this cart. This is the unit system the cart expects new products to be given in.
     * @returns {IWeightUnit}
     */
    getDefaultUnitSystem(): IWeightUnit {
        return this.config.defaultWeightUnit;
    }

    /**
     * Export the cart to a JSON string.
     * @returns {string} The JSON string
     */
    exportCart(): string {
        let exportedCart: IExportedCart = {
            config: this.getConfig(),
            products: this.content.map(product => (<IAddProduct>{
                sku: product.getData().sku,
                basePrice: product.getData().basePrice,
                vat: product.getData().vat,
                additionPrice: product.getData().additionPrice,
                quantity: product.getData().quantity,
                weight: product.getData().weight,
                extra: product.getData().extra
            }))
        };

        return JSON.stringify(exportedCart);
    }

    /**
     * Import the cart from a JSON string.
     * @param {string} data The JSON string to import.
     * @returns {ICart | null} The imported cart if the import was successful. Otherwise null.
     */
    static importCart(data: string): ICart | null {
        let decodedJson: any = JSON.parse(data);

        if (Cart.isExportedCart(decodedJson)) {
            let cart: ICart = new Cart((<IExportedCart> decodedJson).config);
            cart.addItem((<IExportedCart> decodedJson).products);
            return cart;
        }

        return null;
    }

    private static isExportedCart(obj: any): obj is IExportedCart {
        return obj.hasOwnProperty('config') && obj.hasOwnProperty('products');
    }
}
