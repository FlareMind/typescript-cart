import {IConvertObject, ICurrencyConverter} from "./interfaces/currency-converter";

export class CurrencyConverter implements ICurrencyConverter {

    private rates: any;
    private base: string;

    constructor(rates : any, base = 'EUR') {
        this.rates = rates;
        this.base = base.toLocaleUpperCase();
    }

    convert(convertObject: IConvertObject): number | null {
        if (!this.rates.hasOwnProperty(convertObject.from) || !this.rates.hasOwnProperty(convertObject.to)) {
            return null;
        }

        let convertTo: number = convertObject.to.getCode().toLocaleUpperCase() !== this.base ?
            this.rates[convertObject.to.getCode()] : 1;

        let convertFrom: number = convertObject.from.getCode().toLocaleUpperCase() !== this.base ?
            1/this.rates[convertObject.from.getCode()] : 1;

        return convertTo * convertFrom * convertObject.amount;
    }
}