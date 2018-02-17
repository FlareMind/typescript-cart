import {IObservableEvent} from "typescript-observable";

let CART_CHANGE: IObservableEvent = {
        parent: null,
        name: 'change'
    },

    CART_CLEAR: IObservableEvent = {
        parent: CART_CHANGE,
        name: 'clear'
    },

    PRODUCT_ADD: IObservableEvent = {
        parent: CART_CHANGE,
        name: 'add'
    },

    PRODUCT_REMOVE: IObservableEvent = {
        parent: CART_CHANGE,
        name: 'remove'
    },

    PRODUCT_QUANTITY_CHANGED: IObservableEvent = {
        parent: CART_CHANGE,
        name: 'quantity-changed'
    };

export default {CART_CHANGE, CART_CLEAR, PRODUCT_ADD, PRODUCT_REMOVE, PRODUCT_QUANTITY_CHANGED};