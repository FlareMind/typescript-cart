import {ICurrency} from "./currency";
import {IWeightUnit} from "./weight-unit";

export interface ICartConfig {
    defaultCurrency: ICurrency;
    defaultWeightUnit: IWeightUnit;
    defaultVat: number;
    vatInPrice: boolean;
    stackAddedProducts: boolean;
}

export interface ICartOptionalConfig {
    defaultCurrency?: ICurrency;
    defaultWeightUnit?: IWeightUnit;
    defaultVat?: number;
    vatInPrice?: boolean;
    stackAddedProducts?: boolean;
}