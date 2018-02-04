import {IProduct} from "./interfaces/product";
import {IAddProduct, IProductData} from "./interfaces/product-data";
import {IWeightUnit} from "./interfaces/weight-unit";
import {ICurrency} from "./interfaces/currency";
import {ICart} from "./interfaces/cart";

export class Product implements IProduct {
    private id: number;
    private cart: ICart;
    private productData: IProductData;

    constructor(id:number, data: IAddProduct, cart: ICart) {
        // TODO implement constructor for product.
    }

    getId(): number {
        return this.id;
    }

    getData(): IProductData {
        return this.productData;
    }

    getQuantity(): number {
        return this.getData().quantity;
    }

    updateQuantity(quantity: number, add = false): void {
        if (add) {
            this.getData().quantity += quantity;
            return;
        }

        this.getData().quantity = quantity;
    }

    remove(): boolean {
        return this.cart.removeItem(this.getId());
    }

    getWeight(weightUnit: IWeightUnit): number {

        // Convert the weight to kilograms
        let weightInKilogram = this.getData().weightUnitSystem.convertToKilogram(this.getData().weight || 0);

        // Convert the weight to the unit requested
        return weightUnit.convertFromKilogram(weightInKilogram);
    }

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

        // VAT should be removed
        return totalPrice / (1 + this.getData().vat);
    }

    getCurrency(): ICurrency {
        return this.getData().currency;
    }

    getVat(): number {
        let totalPrice = this.getData().basePrice + this.getData().additionPrice;

        // VAT is in the total price
        if (this.getData().vatInPrice) {
            return this.getData().vat * totalPrice / (1 + this.getData().vat);
        }

        // VAT is not in the price
        return totalPrice * this.getData().vat;
    }

}