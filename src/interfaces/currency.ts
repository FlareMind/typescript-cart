export interface ICurrency {
    currencyName: string;       // The nme of the currency
    prefix: string | null;      // The prefix of the currency (e.g. $, £ or €)
    suffix: string;             // The suffix of the currency (e.g. EUR, SEK, USD or GBP)

    getCode(): string;

    format(amount: number, options?: ICurrencyOptions) : string;       // Format a price
}

export interface ICurrencyOptions {
    preferPrefix?: boolean;      // If true a prefix will be used if there is one
    decimals?: number;           // The number of decimal places in the string
}

export abstract class Currency implements ICurrency {
    prefix: string | null = null;
    abstract currencyName: string;
    abstract suffix: string;

    format(amount: number, options?: ICurrencyOptions) : string {

        // Create the options object with defaults for the missing fields
        options = options || {};
        options = {
            decimals: options.decimals || 2,
            preferPrefix: options.preferPrefix === true
        };

        return options.preferPrefix && this.prefix !== null ? this.prefix + amount.toFixed(options.decimals)
            : amount.toFixed(options.decimals) + ' ' + this.suffix;
    }

    getCode(): string {
        return this.suffix;
    }

    toString() : string {
        return this.currencyName;
    }
}