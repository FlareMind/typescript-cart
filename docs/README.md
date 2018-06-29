
# typescript-cart documentation


## Index

### Classes

* [Cart](classes/cart.md)
* [Currency](classes/currency.md)
* [CurrencyConverter](classes/currencyconverter.md)
* [EUR](classes/eur.md)
* [GBP](classes/gbp.md)
* [Gram](classes/gram.md)
* [Kilogram](classes/kilogram.md)
* [Pound](classes/pound.md)
* [Product](classes/product.md)
* [SEK](classes/sek.md)
* [USD](classes/usd.md)
* [WeightUnit](classes/weightunit.md)


### Interfaces

* [IAddProduct](interfaces/iaddproduct.md)
* [ICart](interfaces/icart.md)
* [ICartConfig](interfaces/icartconfig.md)
* [ICartOptionalConfig](interfaces/icartoptionalconfig.md)
* [IConvertObject](interfaces/iconvertobject.md)
* [ICurrency](interfaces/icurrency.md)
* [ICurrencyConverter](interfaces/icurrencyconverter.md)
* [ICurrencyOptions](interfaces/icurrencyoptions.md)
* [IExportedCart](interfaces/iexportedcart.md)
* [IProduct](interfaces/iproduct.md)
* [IProductData](interfaces/iproductdata.md)
* [IWeightOptions](interfaces/iweightoptions.md)
* [IWeightUnit](interfaces/iweightunit.md)


### Object literals

* [CART_CHANGE](#cart_change)
* [CART_CLEAR](#cart_clear)
* [Currencies](#currencies)
* [PRODUCT_ADD](#product_add)
* [PRODUCT_QUANTITY_CHANGED](#product_quantity_changed)
* [PRODUCT_REMOVE](#product_remove)
* [REQUEST_DELETE](#request_delete)
* [WeightUnits](#weightunits)



---
<a id="cart_change"></a>

## Object literal: CART_CHANGE


<a id="cart_change.name"></a>

###  name

**●  name**:  *`string`*  = "change"

*Defined in [cart-events.ts:5](https://github.com/FlareMind/typescript-cart/blob/1125687/src/cart-events.ts#L5)*





___
<a id="cart_change.parent"></a>

###  parent

**●  parent**:  *`null`*  =  null

*Defined in [cart-events.ts:4](https://github.com/FlareMind/typescript-cart/blob/1125687/src/cart-events.ts#L4)*





___

<a id="cart_clear"></a>

## Object literal: CART_CLEAR


<a id="cart_clear.name"></a>

###  name

**●  name**:  *`string`*  = "clear"

*Defined in [cart-events.ts:10](https://github.com/FlareMind/typescript-cart/blob/1125687/src/cart-events.ts#L10)*





___
<a id="cart_clear.parent"></a>

###  parent

**●  parent**:  *`IObservableEvent`*  =  CART_CHANGE

*Defined in [cart-events.ts:9](https://github.com/FlareMind/typescript-cart/blob/1125687/src/cart-events.ts#L9)*





___

<a id="currencies"></a>

## Object literal: Currencies


<a id="currencies.eur"></a>

###  EUR

**●  EUR**:  *[EUR](classes/eur.md)*  =  new EUR()

*Defined in [currencies/currencies.ts:8](https://github.com/FlareMind/typescript-cart/blob/1125687/src/currencies/currencies.ts#L8)*





___
<a id="currencies.gbp"></a>

###  GBP

**●  GBP**:  *[GBP](classes/gbp.md)*  =  new GBP()

*Defined in [currencies/currencies.ts:9](https://github.com/FlareMind/typescript-cart/blob/1125687/src/currencies/currencies.ts#L9)*





___
<a id="currencies.sek"></a>

###  SEK

**●  SEK**:  *[SEK](classes/sek.md)*  =  new SEK()

*Defined in [currencies/currencies.ts:10](https://github.com/FlareMind/typescript-cart/blob/1125687/src/currencies/currencies.ts#L10)*





___
<a id="currencies.usd"></a>

###  USD

**●  USD**:  *[USD](classes/usd.md)*  =  new USD()

*Defined in [currencies/currencies.ts:11](https://github.com/FlareMind/typescript-cart/blob/1125687/src/currencies/currencies.ts#L11)*





___
<a id="currencies.identifycurrency"></a>

###  identifyCurrency

► **identifyCurrency**(currency: *`any`*): [Currency](classes/currency.md)



*Defined in [currencies/currencies.ts:12](https://github.com/FlareMind/typescript-cart/blob/1125687/src/currencies/currencies.ts#L12)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| currency | `any`   |  - |





**Returns:** [Currency](classes/currency.md)





___

<a id="product_add"></a>

## Object literal: PRODUCT_ADD


<a id="product_add.name"></a>

###  name

**●  name**:  *`string`*  = "add"

*Defined in [cart-events.ts:15](https://github.com/FlareMind/typescript-cart/blob/1125687/src/cart-events.ts#L15)*





___
<a id="product_add.parent"></a>

###  parent

**●  parent**:  *`IObservableEvent`*  =  CART_CHANGE

*Defined in [cart-events.ts:14](https://github.com/FlareMind/typescript-cart/blob/1125687/src/cart-events.ts#L14)*





___

<a id="product_quantity_changed"></a>

## Object literal: PRODUCT_QUANTITY_CHANGED


<a id="product_quantity_changed.name"></a>

###  name

**●  name**:  *`string`*  = "quantity-changed"

*Defined in [cart-events.ts:25](https://github.com/FlareMind/typescript-cart/blob/1125687/src/cart-events.ts#L25)*





___
<a id="product_quantity_changed.parent"></a>

###  parent

**●  parent**:  *`IObservableEvent`*  =  CART_CHANGE

*Defined in [cart-events.ts:24](https://github.com/FlareMind/typescript-cart/blob/1125687/src/cart-events.ts#L24)*





___

<a id="product_remove"></a>

## Object literal: PRODUCT_REMOVE


<a id="product_remove.name"></a>

###  name

**●  name**:  *`string`*  = "remove"

*Defined in [cart-events.ts:20](https://github.com/FlareMind/typescript-cart/blob/1125687/src/cart-events.ts#L20)*





___
<a id="product_remove.parent"></a>

###  parent

**●  parent**:  *`IObservableEvent`*  =  CART_CHANGE

*Defined in [cart-events.ts:19](https://github.com/FlareMind/typescript-cart/blob/1125687/src/cart-events.ts#L19)*





___

<a id="request_delete"></a>

## Object literal: REQUEST_DELETE


<a id="request_delete.name"></a>

###  name

**●  name**:  *`string`*  = "delete"

*Defined in [product-events.ts:5](https://github.com/FlareMind/typescript-cart/blob/1125687/src/product-events.ts#L5)*





___
<a id="request_delete.parent"></a>

###  parent

**●  parent**:  *`null`*  =  null

*Defined in [product-events.ts:4](https://github.com/FlareMind/typescript-cart/blob/1125687/src/product-events.ts#L4)*





___

<a id="weightunits"></a>

## Object literal: WeightUnits


<a id="weightunits.gram"></a>

###  GRAM

**●  GRAM**:  *[Gram](classes/gram.md)*  =  new Gram()

*Defined in [weight-units/weight-units.ts:8](https://github.com/FlareMind/typescript-cart/blob/1125687/src/weight-units/weight-units.ts#L8)*





___
<a id="weightunits.kilogram"></a>

###  KILOGRAM

**●  KILOGRAM**:  *[Kilogram](classes/kilogram.md)*  =  new Kilogram()

*Defined in [weight-units/weight-units.ts:7](https://github.com/FlareMind/typescript-cart/blob/1125687/src/weight-units/weight-units.ts#L7)*





___
<a id="weightunits.pound"></a>

###  POUND

**●  POUND**:  *[Pound](classes/pound.md)*  =  new Pound()

*Defined in [weight-units/weight-units.ts:9](https://github.com/FlareMind/typescript-cart/blob/1125687/src/weight-units/weight-units.ts#L9)*





___
<a id="weightunits.identifyweightunit"></a>

###  identifyWeightUnit

► **identifyWeightUnit**(weightUnit: *`any`*): [WeightUnit](classes/weightunit.md)



*Defined in [weight-units/weight-units.ts:10](https://github.com/FlareMind/typescript-cart/blob/1125687/src/weight-units/weight-units.ts#L10)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| weightUnit | `any`   |  - |





**Returns:** [WeightUnit](classes/weightunit.md)





___


