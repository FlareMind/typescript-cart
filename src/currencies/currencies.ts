import {EUR} from "./eur";
import {GBP} from "./gbp";
import {USD} from "./usd";
import {SEK} from "./sek";
import {Currency} from "..";

export let Currencies = {
    EUR: new EUR(),
    GBP: new GBP(),
    SEK: new SEK(),
    USD: new USD(),
    identifyCurrency: (currency: any): Currency => {

        // Check that the currency is valid
        if (currency === null || currency === undefined || !currency.hasOwnProperty('currencyName')) {
            throw Error("Currency is not defined.")
        }

        switch (currency.currencyName.toLowerCase()) {
            case "euro":
                return Currencies.EUR;
            case "pound sterling":
                return Currencies.GBP;
            case "swedish krona":
                return Currencies.SEK;
            case "united states dollar":
                return Currencies.USD;
            default:
                return Currencies.EUR;
        }
    }
};