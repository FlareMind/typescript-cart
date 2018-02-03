import {Currency} from "../interfaces/currency";

export class SEK extends Currency {
    readonly currencyName: string = 'Swedish krona';
    readonly suffix: string = 'SEK';
}