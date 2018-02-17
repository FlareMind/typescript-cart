import {IProduct} from "./product";
import {ICurrency} from "./currency";
import {IWeightUnit} from "./weight-unit";
import {IAddProduct} from "./product-data";
import {ICartConfig} from "./cart-config";
import {ICurrencyConverter} from "./currency-converter";

export interface ICart {

    /*
     * META
     */
    getConfig(): ICartConfig;

    /*
     * PRODUCT METHODS
     */
    count(): number;
    getContents(): IProduct[];
    get(id: number): IProduct | null;
    addItem(product: IAddProduct | IAddProduct[]): ICart;
    updateItemQuantity(id: number, quantity: number): boolean;
    removeItem(id: number): boolean;
    clear(): ICart;

    /*
     * PRICE, CURRENCY AND VAT METHODS
     */
    setCurrencyConverter(currencyConverter: ICurrencyConverter): ICart;
    getTotalPrice(vat: boolean): number | null;
    getVat(): number | null;
    getCurrency(): ICurrency;
    setCurrency(currency: ICurrency): ICart;
    getDefaultCurrency(): ICurrency;

    /*
     * WEIGHT AND SIZE
     */
    getWeight() : number;
    getWeightUnitSystem(): IWeightUnit;
    setWeightUnitSystem(weightUnit: IWeightUnit): ICart;
    getDefaultUnitSystem(): IWeightUnit;

    /*
     * IO
     */
    exportCart(): string;
    importCart(data: string): boolean;
}