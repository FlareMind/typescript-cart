import {WeightUnit} from "../interfaces/weight-unit";


export class Kilogram extends WeightUnit {
    readonly unitName: string = 'Kilogram';
    readonly label: string = 'kg';

    convertToKilogram(weight: number): number {
        return weight;
    }

    convertFromKilogram(weight: number): number {
        return weight;
    }
}