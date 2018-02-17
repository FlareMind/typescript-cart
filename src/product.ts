import {IProduct} from "./interfaces/product";
import {IAddProduct, IProductData} from "./interfaces/product-data";
import {IWeightUnit} from "./interfaces/weight-unit";
import {ICurrency} from "./interfaces/currency";
import {ICart} from "./interfaces/cart";

export class Product implements IProduct {
    private id: number;
    private cart: ICart;
    private productData: IProductData;

    constructor(id: number, data: IAddProduct, cart: ICart) {

        this.id = id;
        this.cart = cart;

        // Set product data
        this.productData = {
            sku: data.sku,
            quantity: data.quantity || 1,

            weightUnitSystem: cart.getDefaultUnitSystem(),
            weight: data.weight || 0,

            currency: cart.getDefaultCurrency(),
            basePrice: data.basePrice,
            additionPrice: data.additionPrice || 0,
            vat: data.vat || cart.getConfig().defaultVat,
            vatInPrice: cart.getConfig().vatInPrice,

            extra: data.extra || {}
        };
    }

    /**
     * Get the id of the product. This id is specific for the cart of the products.
     * @returns {number}
     */
    getId(): number {
        return this.id;
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
     */
    updateQuantity(quantity: number, add = false): void {
        if (add) {
            this.getData().quantity += quantity;
            return;
        }

        this.getData().quantity = quantity;

        // Remove if the quantity is less or equal to zero
        if (this.getQuantity() <= 0) {
            this.remove();
        }
    }

    /**
     * Remove the product from the cart
     * @returns {boolean} true if the product was removed, false otherwise
     */
    remove(): boolean {
        return this.cart.removeItem(this.getId());
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
            return totalPrice;
        }

        // VAT should be added
        else if (!this.getData().vatInPrice) {
            return totalPrice * (1 + this.getData().vat);
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
            return this.getData().vat * totalPrice / (1 + this.getData().vat);
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