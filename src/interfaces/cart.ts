import {IProduct} from "./product";
import {ICurrency} from "./currency";
import {IWeightUnit} from "./weight-unit";
import {IAddProduct} from "./product-data";

export interface ICart {

    /*
     * PRODUCT METHODS
     */
    getContents(): IProduct[];
    get(id: number): IProduct | null;
    addItem(product: IAddProduct | IAddProduct[]): void;
    updateQuantityItem(id: number, quantity: number): boolean;

    /**
     * Remove an item from the cart.
     * @param {number} id The id of the product
     * @return {boolean} Returns true if successful, otherwise false.
     */
    removeItem(id: number): boolean;
    clear(): void;

    /*
     * PRICE, CURRENCY AND VAT METHODS
     */
    getTotalPrice(vat: boolean): number;
    getVat(): number;
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