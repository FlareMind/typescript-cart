import {IAddProduct} from "../src/interfaces/product-data";

let PRODUCT_A: IAddProduct = {
        sku: '0001',
        quantity: 1,
        vat: 0.25,
        basePrice: 1
    },

    PRODUCT_B: IAddProduct = {
        sku: '0002',
        quantity: 1,
        vat: 0.25,
        basePrice: 2.3
    };

export default {PRODUCT_A, PRODUCT_B};