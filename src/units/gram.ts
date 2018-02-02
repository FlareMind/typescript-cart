import {WeightUnit} from "../interfaces/weight-unit";

export class Gram extends WeightUnit {
    unitName: string = 'Gram';
    label: string = 'g';

    convertToKilogram(weight: number): number {
        return weight/1000;
    }

    convertFromKilogram(weight: number): number {
        return weight*1000;
    }

}