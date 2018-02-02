export interface IWeightUnit {
    unitName: string;                                   // Name of the unit
    label: string;                                      // Label for the unit

    getName() : string;                                 // Get the name of the unit
    getLabel() : string;                                // Get the label of the unit

    convertFromKilogram(weight : number) : number;      // Convert from a weight in kilogram
    convertToKilogram(weight : number) : number;        // Convert to a weight in kilogram
}

export abstract class WeightUnit implements IWeightUnit {
    abstract unitName: string;
    abstract label: string;

    abstract convertToKilogram(weight: number): number;
    abstract convertFromKilogram(weight: number): number;

    getLabel() : string {
        return this.label;
    }

    getName(): string {
        return this.unitName;
    }

    toString() : string {
        return this.unitName;
    }
}