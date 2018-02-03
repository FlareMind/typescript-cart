import {Currency} from "../interfaces/currency";

export class USD extends Currency {
    readonly currencyName: string = 'United States dollar';
    readonly suffix: string = 'USD';
    readonly prefix: string = '$';
}