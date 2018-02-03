import 'core-js/es6/object';

export interface IWeightUnit {
    unitName: string;                                   // Name of the unit
    label: string;                                      // Label for the unit

    convertFromKilogram(weight : number) : number;      // Convert from a weight in kilogram
    convertToKilogram(weight : number) : number;        // Convert to a weight in kilogram

    format(weight: number, unit: IWeightUnit, options?: IWeightOptions) : string;       // Format a weight
}

export interface IWeightOptions {
    decimals?: number;      // The number of decimals in the formatted string
}

export abstract class WeightUnit implements IWeightUnit {
    abstract unitName: string;
    abstract label: string;

    defaultOptions : IWeightOptions =  {
        decimals: 2
    };

    abstract convertToKilogram(weight: number): number;
    abstract convertFromKilogram(weight: number): number;

    format(weight: number, unit: IWeightUnit, options?: IWeightOptions): string {

        // Create a options object
        options = Object.assign({}, this.defaultOptions, options);

        return this.convertFromKilogram(unit.convertToKilogram(weight)).toFixed(options.decimals) + ' ' + this.label;
    }

    toString() : string {
        return this.unitName;
    }
}