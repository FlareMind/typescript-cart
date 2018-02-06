import {IProduct} from "./product";
import {ICurrency} from "./currency";
import {IWeightUnit} from "./weight-unit";
import {IAddProduct} from "./product-data";
import {ICartConfig} from "./cart-config";

export interface ICart {

    /*
     * META
     */
    getConfig(): ICartConfig;

    /*
     * PRODUCT METHODS
     */
    getContents(): IProduct[];
    get(id: number): IProduct | null;
    addItem(product: IAddProduct | IAddProduct[]): void;
    updateQuantityItem(id: number, quantity: number): boolean;
    removeItem(id: number): boolean;
    clear(): void;

    /*
     * PRICE, CURRENCY AND VAT METHODS
     */
    getTotalPrice(vat: boolean): number | null;
    getVat(): number | null;
    getCurrency(): ICurrency;
    setCurrency(currency: ICurrency): void;
    getDefaultCurrency(): ICurrency;

    /*
     * WEIGHT AND SIZE
     */
    getWeight() : number;
    getWeightUnitSystem(): IWeightUnit;
    setWeightUnitSystem(weightUnit: IWeightUnit): void;
    getDefaultUnitSystem(): IWeightUnit;

    /*
     * IO
     */
    exportCart(): string;
    importCart(data: string): boolean;
}