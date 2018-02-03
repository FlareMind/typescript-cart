import {ICurrency} from "./currency";

export interface ICurrencyConverter {
    convert(convertObject: IConvertObject) : number;
}

export interface IConvertObject {
    amount: number;
    from: ICurrency;
    to: ICurrency;
}