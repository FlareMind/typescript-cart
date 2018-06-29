import {Kilogram} from "./kilogram";
import {Gram} from "./gram";
import {Pound} from "./pound";
import {WeightUnit} from "..";

export let WeightUnits = {
    KILOGRAM: new Kilogram(),
    GRAM: new Gram(),
    POUND: new Pound(),
    identifyWeightUnit: (weightUnit: any): WeightUnit => {
        if (weightUnit === null || weightUnit === undefined || !weightUnit.hasOwnProperty("unitName")) {
            throw new Error("Unit is not defined.");
        }

        switch (weightUnit.unitName.toLowerCase()) {
            case "gram":
                return WeightUnits.GRAM;
            case "kilogram":
                return WeightUnits.KILOGRAM;
            case "pound":
                return WeightUnits.POUND;
            default:
                return WeightUnits.KILOGRAM;
        }
    }
};