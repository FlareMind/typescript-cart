import {IProduct} from "./interfaces/product";
import {IAddProduct, IProductData} from "./interfaces/product-data";
import {IWeightUnit} from "./interfaces/weight-unit";
import {ICurrency} from "./interfaces/currency";
import {Observable} from "typescript-observable";
import {ICartConfig} from "./interfaces/cart-config";
import ProductEvent from './product-events'

export class Product extends Observable implements IProduct {
    private id: number;
    private productData: IProductData;

    constructor(id: number, data: IAddProduct, cartConfig: ICartConfig) {
        super();

        this.id = id;

        // Set product data
        this.productData = {
            sku: data.sku,
            name: data.name || '',
            quantity: data.quantity || 1,

            weightUnitSystem: cartConfig.defaultWeightUnit,
            weight: data.weight || 0,

            currency: cartConfig.defaultCurrency,
            basePrice: data.basePrice,
            additionPrice: data.additionPrice || 0,
            vat: data.vat || cartConfig.defaultVat,
            vatInPrice: cartConfig.vatInPrice,

            extra: data.extra || {}
        };
    }

    /**
     * Get the id of the product. This id is specific for the cart of the products.
     * @returns {number} The id
     */
    getId(): number {
        return this.id;
    }

    /**
     * Get the name of the product
     * @returns {string} The product name
     */
    getName(): string {
        return this.productData.name;
    }

    /**
     * Get the product data. This object contains all data about the object. Use functions in this class if possible to
     * change the object rather than changing it directly.
     * @returns {IProductData}
     */
    getData(): IProductData {
        return this.productData;
    }

    /**
     * Get the quantity of the product.
     * @returns {number} The quantity
     */
    getQuantity(): number {
        return this.getData().quantity;
    }

    /**
     * Set the quantity.
     * @param {number} quantity The new quantity.
     * @param {boolean} add If true the quantity is added, if false the new quantity will overwrite the old.
     * @returns {IProduct} Chaining this
     */
    setQuantity(quantity: number, add = false): IProduct {
        if (add) {
            this.getData().quantity += quantity;
            return this;
        }

        this.getData().quantity = quantity;

        // Remove if the quantity is less or equal to zero
        if (this.getQuantity() <= 0) {
            this.remove();
        }

        return this;
    }

    /**
     * Remove the product from cart
     * @return {Promise<void>} A promise when the product is removed
     */
    remove(): Promise<void> {
        return this.notify(ProductEvent.REQUEST_DELETE, {
            id: this.getId()
        });
    }

    /**
     * Get the weight of the product
     * @param {IWeightUnit} weightUnit the weight units to use
     * @returns {number} The weight of the cart
     */
    getWeight(weightUnit: IWeightUnit): number {

        // Convert the weight to kilograms
        let weightInKilogram = this.getData().weightUnitSystem.convertToKilogram(this.getData().weight || 0);

        // Convert the weight to the unit requested
        return weightUnit.convertFromKilogram(weightInKilogram) * this.getQuantity();
    }

    /**
     * Get the total price of this product
     * @param {boolean} vat
     * @returns {number}
     */
    getTotalPrice(vat: boolean): number {
        let totalPrice = this.getData().basePrice + this.getData().additionPrice;

        // If the price is already saved in the correct format
        if (this.getData().vatInPrice === vat) {
            return totalPrice * this.getQuantity();
        }

        // VAT should be added
        else if (!this.getData().vatInPrice) {
            return totalPrice * (1 + this.getData().vat) * this.getQuantity();
        }

        // VAT should be removed from the price
        return totalPrice / (1 + this.getData().vat) * this.getQuantity();
    }

    /**
     * Get the currency of this product.
     * @returns {ICurrency} The currency
     */
    getCurrency(): ICurrency {
        return this.getData().currency;
    }

    /**
     * Get the vat of this product
     * @returns {number} The vat
     */
    getVat(): number {
        let totalPrice = this.getData().basePrice + this.getData().additionPrice;

        // VAT is in the total price
        if (this.getData().vatInPrice) {
            return this.getData().vat * totalPrice / (1 + this.getData().vat) * this.getQuantity();
        }

        // VAT is not in the price
        return totalPrice * this.getData().vat * this.getQuantity();
    }

    /**
     * Get the extra data of this product
     * @returns {any}
     */
    getExtra(): any {
        return this.getData().extra;
    }

}