import 'mocha'
import { expect } from 'chai'
import {ICurrencyConverter} from "../src/interfaces/currency-converter";
import {CurrencyConverter} from "../src/currency-converter";
import {Cart} from "../src/cart";
import {Currencies} from "../src/currencies/currencies";
import {WeightUnits} from "../src/weight-units/weight-units";
import {ICart} from "../src/interfaces/cart";
import Products from './mock-products'

describe('Cart', () => {
    let converter: ICurrencyConverter;

    before(() => {
        converter = new CurrencyConverter({
            "GBP": 0.88885,
            "SEK": 9.8685,
            "USD": 1.2329
        });
    });

    describe('Constructor', () => {
        it('should be possible to init the cart without config', () => {
            new Cart();
        });

        it('should be possible to init the cart with a config', () => {
            new Cart({
                defaultCurrency: Currencies.SEK,
                defaultWeightUnit: WeightUnits.KILOGRAM,
                defaultVat: 0.25,
                vatInPrice: true,
                stackAddedProducts: true
            });
        });

        it('should be possible to init the cart with config and converter', () => {
            new Cart({
                defaultCurrency: Currencies.SEK,
                defaultWeightUnit: WeightUnits.KILOGRAM,
                defaultVat: 0.25,
                vatInPrice: true,
                stackAddedProducts: true
            }, converter);
        });
    });

    describe('Products with standard cart', () => {
        let cart: ICart;

        beforeEach(() => {
            cart = new Cart()
                .setCurrencyConverter(converter);
        });

        it('should be possible to add products', () => {
            cart.addItem(Products.PRODUCT_A);
            expect(cart.count()).to.equal(1);

            cart.addItem(Products.PRODUCT_A);
            expect(cart.count()).to.equal(2);

            expect(cart.getContents()[0].getData().sku).to.equal(Products.PRODUCT_A.sku);

            cart.addItem(Products.PRODUCT_B);
            expect(cart.count()).to.equal(3);

            expect(cart.getContents().length).to.equal(2);
        });

        it('should be possible to get products', () => {
            cart.addItem(Products.PRODUCT_A);
            expect(cart.getContents()[0].getData().sku).to.equal(Products.PRODUCT_A.sku);
        });

        it('should be possible to update product quantities');

        it('should be possible to remove products');

        it('should be possible to clear cart');
    });
});