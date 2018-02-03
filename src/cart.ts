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


    constructor(currencyConverter: ICurrencyConverter, config: ICartOptionalConfig) {

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
        if (!Cart.isAddProduct(product)) {
            product.forEach(item => this.addItem(item));
            return;
        }

        if (this.config.stackAddedProducts) {
            // TODO implement add with stacking
        } else {
            this.content.push(new Product(this.content.length, product, this));
        }
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

    clear(): void {
        this.content.splice(0, this.content.length);
    }

    getTotalPrice(vat=true): number {
        return this.currencyConverter.convert(<IConvertObject>{
            amount: this.content.map(product => product.getTotalPrice(vat)).reduce((a, b) => a + b, 0),
            from: this.getDefaultCurrency(),
            to: this.getCurrency()
        });
    }

    getVat(): number {
        return this.currencyConverter.convert(<IConvertObject>{
            amount: this.content.map(product => product.getVat()).reduce((a, b) => a + b, 0),
            from: this.getDefaultCurrency(),
            to: this.getCurrency()
        });
    }

    getCurrency(): ICurrency {
        return this.currency;
    }

    setCurrency(currency: ICurrency) : void {
        this.currency = currency;
    }

    getDefaultCurrency(): ICurrency {
        return this.config.defaultCurrency;
    }

    getWeight(): number {
        return this.content
            .map(product => product.getWeight(this.weightUnit))
            .reduce((a, b) => a + b, 0);
    }

    getWeightUnitSystem(): IWeightUnit {
        return this.weightUnit;
    }

    setWeightUnitSystem(weightUnit: IWeightUnit) : void {
        this.weightUnit = weightUnit;
    }

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
