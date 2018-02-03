import {ICart} from "./interfaces/cart";
import {IWeightUnit} from "./interfaces/weight-unit";
import {ICurrency} from "./interfaces/currency";
import {IProduct} from "./interfaces/product";
import {ICartConfig} from "./interfaces/cart-config";

export class Cart implements ICart {

    constructor(config: ICartConfig) {

    }

    getContents(): IProduct[] {
        throw Error('Not Implemented')
    }

    addItem(product: IProduct | IProduct[]): void {
        throw Error('Not Implemented')
    }

    updateItem(id: number): boolean {
        throw Error('Not Implemented')
    }

    removeItem(id: number): boolean {
        throw Error('Not Implemented')
    }

    clear(): void {
        throw Error('Not Implemented')
    }

    getTotal(): number {
        throw Error('Not Implemented');
    }

    getVat(): number {
        throw Error('Not Implemented');
    }

    getCurrency(): ICurrency {
        throw Error('Not Implemented');
    }

    getDefaultCurrency(): ICurrency {
        throw Error('Not Implemented');
    }

    getWeight(): number {
        throw Error('Not Implemented');
    }

    getUnitSystem(): IWeightUnit {
        throw Error('Not Implemented');
    }

    getDefaultUnitSystem(): IWeightUnit {
        throw Error('Not Implemented');
    }

    exportCart(): string {
        throw Error('Not Implemented');
    }

    importCArt(data: string): boolean {
        throw Error('Not Implemented');
    }
    
}