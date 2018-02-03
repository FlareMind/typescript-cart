import {Currency} from "../interfaces/currency";

export class GBP extends Currency {
    readonly currencyName: string = 'Pound sterling';
    readonly suffix: string = 'GBP';
    readonly prefix: string = '£';
}