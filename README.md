# smart-cart
[![Build Status](https://travis-ci.org/FlareMind/smart-cart.svg?branch=master)](https://travis-ci.org/FlareMind/smart-cart)

Smart-cart is a small JavaScript/Typescript cart for e-commerce. It has functionality for currencies, VAT and weight.

## Installation

With npm
```
npm install --save
```

## Documentation
Documentation is available [here](docs/README.md).

## Example
An example of the cart.

```typescript
import {ICart, Cart, IProduct, Currencies, WeightUnits} from "smart-cart";

let cart: ICart = new Cart();

// Add single item
cart.addItem({
    sku: "001",
    basePrice: 10,
    quantity: 2,
    extra: {
        size: "XL"
    }
});

// Add multiple items
cart.addItem([{
    sku: "001",
    basePrice: 10,
    quantity: 2,
    extra: {
        size: "XL"
    }
}, {
    sku: "002",
    basePrice: 2,
    quantity: 5,
    additionPrice: 15,
    extra: {
        withCreamer: true
    }
}]);

// Get all products
let products: IProduct[] = cart.getContents();

// Add another of product nr 1
products[0].setQuantity(1, true);

// Remove product
products[0].remove();

// Set currency to display prices (standard is EUR)
cart.setCurrency(Currencies.GBP);

// Print price
console.log(cart.getTotalPrice());

// Set weight units
cart.setWeightUnitSystem(WeightUnits.GRAM);

// Print weight
console.log(cart.getWeight());
```

## Contribute
Make sure to run the tests
```
npm test
```