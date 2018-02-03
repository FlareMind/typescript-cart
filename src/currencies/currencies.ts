import {EUR} from "./eur";
import {GBP} from "./gbp";
import {USD} from "./usd";
import {SEK} from "./sek";

export let Currencies = {
    EUR: new EUR(),
    GBP: new GBP(),
    SEK: new SEK(),
    USD: new USD()
};