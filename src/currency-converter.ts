import {IConvertObject, ICurrencyConverter} from "./interfaces/currency-converter";
import {ICurrency} from "./interfaces/currency";
import {Currencies} from "./currencies/currencies";

export class CurrencyConverter implements ICurrencyConverter {

    private rates: any;
    private base: ICurrency;

    constructor(rates : any, base?: ICurrency) {
        this.rates = rates;
        this.base = base || Currencies.EUR;
    }

    /**
     * Convert a price from one currency to another.
     *
     * @param {IConvertObject} convertObject The conversion object that specifies amount and which currencies the
     * conversion involves.
     * @returns {number | null} The amount in the new currency.
     */
    convert(convertObject: IConvertObject): number | null {

        // No conversion needed
        if (convertObject.from.getCode() === convertObject.to.getCode()) {
            return convertObject.amount;
        }

        // Check that both currencies are given in the rates dict
        if ((!this.rates.hasOwnProperty(convertObject.from.getCode())
                && this.base.getCode() !== convertObject.from.getCode())

            || (!this.rates.hasOwnProperty(convertObject.to.getCode()))
            && this.base.getCode() !== convertObject.to.getCode()) {

            // If one is missing return null
            return null;
        }

        // Convert to the base currency
        let convertTo: number = convertObject.to.getCode() !== this.base.getCode() ?
            this.rates[convertObject.to.getCode()] : 1;

        // Convert from the base currency
        let convertFrom: number = convertObject.from.getCode() !== this.base.getCode() ?
            1/this.rates[convertObject.from.getCode()] : 1;

        return convertTo * convertFrom * convertObject.amount;
    }
}