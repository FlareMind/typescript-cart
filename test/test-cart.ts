import 'mocha'
import { expect } from 'chai'
import {ICurrencyConverter} from "../src";
import {CurrencyConverter} from "../src";
import {Cart} from "../src";
import {Currencies} from "../src";
import {WeightUnits} from "../src";
import {ICart} from "../src";
import Products from './mock-products'
import {IProduct} from "../src";

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

        it('should be possible to add and get products', () => {
            cart.addItem(Products.PRODUCT_A);
            expect(cart.count()).to.equal(1);

            let firstProduct: IProduct = cart.addItem(Products.PRODUCT_A);
            expect(cart.count()).to.equal(2);
            expect(firstProduct.getData().sku).to.equal(Products.PRODUCT_A.sku);
            expect(firstProduct.getQuantity()).to.equal(2 * (Products.PRODUCT_A.quantity || 1));

            let secondProduct = cart.addItem(Products.PRODUCT_B);
            expect(cart.count()).to.equal(3);
            expect(cart.getContents().length).to.equal(2);
            expect(secondProduct.getData().sku).to.equal(Products.PRODUCT_B.sku);
            expect(secondProduct.getQuantity()).to.equal(Products.PRODUCT_A.quantity || 1);

        });

        it('should be possible to add multiple products', () => {
            cart
                .addItem([Products.PRODUCT_A, Products.PRODUCT_B]);
            expect(cart.count()).to.equal((Products.PRODUCT_A.quantity || 1) + (Products.PRODUCT_B.quantity || 1));
        });

        it('should be possible to set product quantities', () => {
            let add: number = 5;
            let product: IProduct = cart
                .addItem(Products.PRODUCT_A)
                .setQuantity(add, true);
            expect(product.getQuantity()).to.equal(add + (Products.PRODUCT_A.quantity || 1));

            product = cart
                .addItem(Products.PRODUCT_B)
                .setQuantity(add);
            expect(product.getQuantity()).to.equal(add);
        });

        it('should be possible to remove products', done => {
            cart
                .addItem(Products.PRODUCT_A);
            cart
                .addItem(Products.PRODUCT_B)
                .remove()
                .then(() => {

                    if (cart.count() === (Products.PRODUCT_A.quantity || 1)
                        && cart.getContents()[0].getData().sku === Products.PRODUCT_A.sku) {

                        done();
                    }
                });
        });

        it('should be possible to clear cart', () => {
            cart
                .addItem([Products.PRODUCT_A, Products.PRODUCT_B]);
            cart.clear();
            expect(cart.count()).to.equal(0);
        });

        it('should be possible to get price', () => {
            cart
                .addItem(Products.PRODUCT_A);
            expect(cart.getTotalPrice()).to.equal(Products.PRODUCT_A.basePrice);

            cart
                .addItem(Products.PRODUCT_A);
            expect(cart.getTotalPrice()).to.equal(2*Products.PRODUCT_A.basePrice);

            cart
                .addItem(Products.PRODUCT_B);
            expect(cart.getTotalPrice()).to.equal(2*Products.PRODUCT_A.basePrice + Products.PRODUCT_B.basePrice
                + (Products.PRODUCT_B.additionPrice || 0));
        });

        it('should be possible to get total price without vat', () => {
            cart
                .addItem(Products.PRODUCT_A);
            expect(cart.getTotalPrice(false)).to.equal(Products.PRODUCT_A.basePrice
                / (1 + (Products.PRODUCT_A.vat || 0)));

            cart
                .addItem(Products.PRODUCT_A);
            expect(cart.getTotalPrice(false)).to.equal(2 * Products.PRODUCT_A.basePrice
                / (1 + (Products.PRODUCT_A.vat || 0)));

            cart
                .addItem(Products.PRODUCT_B);
            expect(cart.getTotalPrice(false)).to.equal(2 * Products.PRODUCT_A.basePrice
                / (1 + (Products.PRODUCT_A.vat || 0)) + (Products.PRODUCT_B.basePrice
                    + (Products.PRODUCT_B.additionPrice || 0)) / (1 + (Products.PRODUCT_B.vat || 0)));
        });

        it('should be possible to get vat', () => {
            cart
                .addItem([Products.PRODUCT_A, Products.PRODUCT_A, Products.PRODUCT_B]);
            expect(Math.abs((cart.getVat() || 0) - (cart.getTotalPrice() || 0)
                + (cart.getTotalPrice(false) || 0))).to.be.lessThan(0.001);
        });

        it('should be possible to change currency', () => {
            cart
                .setCurrency(Currencies.SEK)
                .addItem(Products.PRODUCT_A);
            expect(Math.abs((cart.getTotalPrice() || 0) - 9.8685*Products.PRODUCT_A.basePrice)).to.be.lessThan(0.001);
        });

        it('should be possible to get the weight', () => {
            cart
                .addItem([Products.PRODUCT_A, Products.PRODUCT_A, Products.PRODUCT_B]);
            expect(Math.abs(cart.getWeight() - 2 * (Products.PRODUCT_A.weight || 0)
                - (Products.PRODUCT_B.weight || 0))).to.be.lessThan(0.001);
        });

        it('should be possible to get the weight in another unit', () => {
            cart
                .setWeightUnitSystem(WeightUnits.GRAM)
                .addItem([Products.PRODUCT_A, Products.PRODUCT_A, Products.PRODUCT_B]);
            expect(Math.abs(cart.getWeight()/1000 - 2 * (Products.PRODUCT_A.weight || 0)
                - (Products.PRODUCT_B.weight || 0))).to.be.lessThan(0.001);
        });
    });

    describe('Products with no stack', () => {
        let cart: ICart;
        beforeEach(() => {
            cart = new Cart({
                stackAddedProducts: false
            }, converter);
        });

        it('should not stack added products', () => {
            cart
                .addItem([Products.PRODUCT_A, Products.PRODUCT_A]);
            expect(cart.getContents().length).to.equal(2);
        });
    });

    describe('Products without vat in price', () => {
        let cart: ICart;
        beforeEach(() => {
            cart = new Cart({
                vatInPrice: false
            }, converter);
        });

        it('should be possible to get price', () => {
            cart
                .addItem(Products.PRODUCT_A);
            expect(cart.getTotalPrice()).to.equal(Products.PRODUCT_A.basePrice * (1 + (Products.PRODUCT_A.vat || 0)));
        });

        it('should be possible to get total price without vat', () => {
            cart
                .addItem(Products.PRODUCT_A);
            expect(cart.getTotalPrice(false)).to.equal(Products.PRODUCT_A.basePrice);
        });
    });

    describe('IO', () => {
        let cart: ICart;

        beforeEach(() => {
            cart = new Cart()
                .setCurrencyConverter(converter);
        });

        it('should be possible to export and import the cart', () => {
            cart.addItem([Products.PRODUCT_A, Products.PRODUCT_B]);
            let data: string = cart.exportCart();
            let newCart: ICart = Cart.importCart(data) || new Cart();
            expect(newCart.count()).to.equal(2);
        });
    });
});