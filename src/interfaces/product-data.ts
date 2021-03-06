import {IWeightUnit} from "./weight-unit";
import {ICurrency} from "./currency";

export interface IProductData {

    /*
     * GENERAL DATA
     */
    sku : string;                       // Product SKU
    name: string;                       // Name of product
    quantity : number;                  // Quantity

    /*
     * SIZE AND WEIGHT
     */
    weightUnitSystem: IWeightUnit;      // The unit system used
    weight: number | null;              // The weight of the product

    /*
     * PRICE, CURRENCY AND VAT
     */
    currency: ICurrency;                 // Product currency
    basePrice: number;                   // Price of product without any additions
    additionPrice: number;               // Price for the additions
    vat: number;                         // Percentage of vat
    vatInPrice: boolean;                 // True if the vat is included in the prices

    /*
     * EXTRA
     */
    extra: any;
}

export interface IAddProduct {
    sku: string;
    name?: string;
    quantity?: number;
    weight?: number;
    basePrice: number;
    additionPrice?: number;
    vat?: number;
    extra?: any;
}