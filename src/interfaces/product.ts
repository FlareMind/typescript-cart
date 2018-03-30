import {IProductData} from "./product-data";
import {IWeightUnit} from "./weight-unit";
import {ICurrency} from "./currency";

export interface IProduct {

    getId(): number;

    /*
     * CHANGE PRODUCT
     */
    getQuantity(): number;
    setQuantity(quantity: number, add?: boolean): IProduct;
    remove(): Promise<void>;

    /*
     * DATA
     */
    getData(): IProductData;
    getWeight(weightUnit: IWeightUnit): number;
    getTotalPrice(vat: boolean): number;
    getCurrency(): ICurrency;
    getVat(): number;
    getExtra(): any;
}