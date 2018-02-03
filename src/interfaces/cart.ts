import {IProduct} from "./product";
import {ICurrency} from "./currency";
import {IWeightUnit} from "./weight-unit";

export interface ICart {

    /*
     * PRODUCT METHODS
     */
    getContents() : IProduct[];
    addItem(product : (IProduct | IProduct[])) : void;
    updateItem(id : number, ) : boolean;
    removeItem(id : number) : boolean;
    clear() : void;

    /*
     * PRICE, CURRENCY AND VAT METHODS
     */
    getTotal() : number;
    getVat() : number;
    getCurrency() : ICurrency;
    getDefaultCurrency() : ICurrency;

    /*
     * WEIGHT AND SIZE
     */
    getWeight() : number;
    getUnitSystem() : IWeightUnit;
    getDefaultUnitSystem() : IWeightUnit;

    /*
     * IO
     */
    exportCart() : string;
    importCArt(data : string) : boolean;
}