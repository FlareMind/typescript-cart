import 'core-js/es6/object';

export interface ICurrency {
    currencyName: string;       // The nme of the currency
    prefix: string | null;      // The prefix of the currency (e.g. $, £ or €)
    suffix: string;             // The suffix of the currency (e.g. EUR, SEK, USD or GBP)

    format(amount: number, options?: IFormatOptions) : string;       // Format a price
}

export interface IFormatOptions {
    preferPrefix?: boolean;      // If true a prefix will be used if there is one
    decimals?: number;           // The number of decimal places in the string
}

export abstract class Currency implements ICurrency {
    prefix: string | null = null;
    abstract currencyName: string;
    abstract suffix: string;

    defaultOptions: IFormatOptions = {
        preferPrefix: false,
        decimals: 2
    };

    format(amount: number, options?: IFormatOptions) : string {

        // Create a options object
        options = Object.assign({}, this.defaultOptions, options);

        return options.preferPrefix && this.prefix !== null ? this.prefix + amount.toFixed(options.decimals)
            : amount.toFixed(options.decimals) + ' ' + this.suffix;
    }

    toString() : string {
        return this.currencyName;
    }
}