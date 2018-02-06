import 'mocha'
import { expect } from 'chai'
import {ICurrencyConverter} from "../src/interfaces/currency-converter";
import {CurrencyConverter} from "../src/currency-converter";
import {ICart} from "../src/interfaces/cart";
import {Cart} from "../src/cart";

describe('Cart', () => {
    let converter: ICurrencyConverter;

    before(() => {
        converter = new CurrencyConverter({
            "GBP": 0.88885,
            "SEK": 9.8685,
            "USD": 1.2329
        });
    });

    it('should be possible to init the cart without config', () => {
        let cart: ICart = new Cart(converter);
    });
});