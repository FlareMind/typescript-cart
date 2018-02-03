import {WeightUnit} from "../interfaces/weight-unit";

export class Pound extends WeightUnit {
    readonly unitName: string = 'Pound';
    readonly label: string = 'lb';

    convertToKilogram(weight: number): number {
        return 0.45359237*weight;
    }

    convertFromKilogram(weight: number): number {
        return 2.20462262*weight;
    }
}