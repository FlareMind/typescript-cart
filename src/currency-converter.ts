import {IConvertObject, ICurrencyConverter} from "./interfaces/currency-converter";

export class CurrencyConverter implements ICurrencyConverter {

    private rates: any;
    private base: string;

    constructor(rates : any, base = 'EUR') {
        this.rates = rates;
        this.base = base.toLocaleUpperCase();
    }

    /**
     * Convert a price from one currency to another.
     *
     * @param {IConvertObject} convertObject The conversion object that specifies amount and which currencies the
     * conversion involves.
     * @returns {number | null} The amount in the new currency.
     */
    convert(convertObject: IConvertObject): number | null {

        // Check that both currencies are given in the rates dict
        if (!this.rates.hasOwnProperty(convertObject.from) || !this.rates.hasOwnProperty(convertObject.to)) {

            // If one is missing return null
            return null;
        }

        // Convert to the base currency
        let convertTo: number = convertObject.to.getCode().toLocaleUpperCase() !== this.base ?
            this.rates[convertObject.to.getCode()] : 1;

        // Convert from the base currency
        let convertFrom: number = convertObject.from.getCode().toLocaleUpperCase() !== this.base ?
            1/this.rates[convertObject.from.getCode()] : 1;

        return convertTo * convertFrom * convertObject.amount;
    }
}