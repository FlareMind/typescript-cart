import {Currency} from "../interfaces/currency";

export class EUR extends Currency {
    readonly currencyName: string = 'Euro';
    readonly suffix: string = 'EUR';
    readonly prefix: string = '€';
}