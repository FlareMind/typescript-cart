import {shallowEqual} from 'shallow-equal-object'
import {ICart} from "./interfaces/cart";
import {IWeightUnit} from "./interfaces/weight-unit";
import {ICurrency} from "./interfaces/currency";
import {IProduct} from "./interfaces/product";
import {ICartConfig, ICartOptionalConfig} from "./interfaces/cart-config";
import {Currencies} from "./currencies/currencies";
import {WeightUnits} from "./weight-units/weight-units";
import {IConvertObject, ICurrencyConverter} from "./interfaces/currency-converter";
import {IAddProduct} from "./interfaces/product-data";
import {Product} from "./product";

export class Cart implements ICart {
    private config: ICartConfig;
    private currencyConverter: ICurrencyConverter;
    private currency: ICurrency;
    private weightUnit: IWeightUnit;
    private content: IProduct[] = [];


    constructor(currencyConverter: ICurrencyConverter, config?: ICartOptionalConfig) {

        // Set config object
        config = config || {};
        this.config = {
            defaultCurrency: config.defaultCurrency || Currencies.EUR,
            defaultWeightUnit: config.defaultWeightUnit || WeightUnits.KILOGRAM,
            defaultVat: config.defaultVat || 0.25,
            vatInPrice: config.vatInPrice !== false,
            stackAddedProducts: config.stackAddedProducts !== false
        };

        this.currencyConverter = currencyConverter;

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
     * Add products to the cart.
     * @param {IAddProduct | IAddProduct[]} product A single product or a list of products to add to the content.
     */
    addItem(product: IAddProduct | IAddProduct[]): void {

        // If multiple products is added, then add the one by one
        if (!Cart.isAddProduct(product)) {
            product.forEach(item => this.addItem(item));
            return;
        }

        // If the products should be stacked then try to add it to a previous item
        if (this.config.stackAddedProducts) {

            // Get the index. If it is found then add it to the existing product.
            let index = this.findIndex(product);
            if (index !== -1) {

                // Update the quantity
                this.content[index].updateQuantity(product.quantity || 1, true);
                return;
            }
        }

        // Add a completely new product.
        this.content.push(new Product(this.content.length, product, this));
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
                && data.vat === product.vat && shallowEqual(data.extra, product.extra)) {

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
    updateQuantityItem(id: number, quantity: number): boolean {
        let index = this.content.map(product => product.getId()).indexOf(id);

        if (index !== -1) {
            this.content[index].updateQuantity(quantity);
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
            this.content.splice(index, 1);
            return true;
        }

        return false;
    }

    /**
     * Clear the cart from all items.
     */
    clear(): void {
        this.content.splice(0, this.content.length);
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
     */
    setCurrency(currency: ICurrency) : void {
        this.currency = currency;
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
     */
    setWeightUnitSystem(weightUnit: IWeightUnit) : void {
        this.weightUnit = weightUnit;
    }

    /**
     * Get the default unit system of this cart. This is the unit system the cart expects new products to be given in.
     * @returns {IWeightUnit}
     */
    getDefaultUnitSystem(): IWeightUnit {
        return this.config.defaultWeightUnit;
    }

    exportCart(): string {
        throw Error('Not Implemented');
    }

    importCart(data: string): boolean {
        throw Error('Not Implemented');
    }

}
