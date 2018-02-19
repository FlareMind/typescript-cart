[smart-cart](../README.md) > [Cart](../classes/cart.md)



# Class: Cart

## Hierarchy


 `Observable`

**↳ Cart**







## Implements

* `IObservable`
* [ICart](../interfaces/icart.md)

## Index

### Constructors

* [constructor](cart.md#constructor)


### Properties

* [config](cart.md#config)
* [content](cart.md#content)
* [currency](cart.md#currency)
* [currencyConverter](cart.md#currencyconverter)
* [weightUnit](cart.md#weightunit)


### Methods

* [addItem](cart.md#additem)
* [clear](cart.md#clear)
* [count](cart.md#count)
* [exportCart](cart.md#exportcart)
* [findIndex](cart.md#findindex)
* [get](cart.md#get)
* [getConfig](cart.md#getconfig)
* [getContents](cart.md#getcontents)
* [getCurrency](cart.md#getcurrency)
* [getDefaultCurrency](cart.md#getdefaultcurrency)
* [getDefaultUnitSystem](cart.md#getdefaultunitsystem)
* [getTotalPrice](cart.md#gettotalprice)
* [getVat](cart.md#getvat)
* [getWeight](cart.md#getweight)
* [getWeightUnitSystem](cart.md#getweightunitsystem)
* [notify](cart.md#notify)
* [off](cart.md#off)
* [on](cart.md#on)
* [removeItem](cart.md#removeitem)
* [setCurrency](cart.md#setcurrency)
* [setCurrencyConverter](cart.md#setcurrencyconverter)
* [setWeightUnitSystem](cart.md#setweightunitsystem)
* [updateItemQuantity](cart.md#updateitemquantity)
* [importCart](cart.md#importcart)
* [isAddProduct](cart.md#isaddproduct)
* [isExportedCart](cart.md#isexportedcart)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Cart**(config?: *[ICartOptionalConfig](../interfaces/icartoptionalconfig.md)*, currencyConverter?: *[ICurrencyConverter](../interfaces/icurrencyconverter.md)*): [Cart](cart.md)


*Overrides Observable.__constructor*

*Defined in [cart.ts:21](https://github.com/FlareMind/smart-cart/blob/a83b470/src/cart.ts#L21)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| config | [ICartOptionalConfig](../interfaces/icartoptionalconfig.md)   |  - |
| currencyConverter | [ICurrencyConverter](../interfaces/icurrencyconverter.md)   |  - |





**Returns:** [Cart](cart.md)

---


## Properties
<a id="config"></a>

### «Private» config

**●  config**:  *[ICartConfig](../interfaces/icartconfig.md)* 

*Defined in [cart.ts:17](https://github.com/FlareMind/smart-cart/blob/a83b470/src/cart.ts#L17)*





___

<a id="content"></a>

### «Private» content

**●  content**:  *[IProduct](../interfaces/iproduct.md)[]*  =  []

*Defined in [cart.ts:21](https://github.com/FlareMind/smart-cart/blob/a83b470/src/cart.ts#L21)*





___

<a id="currency"></a>

### «Private» currency

**●  currency**:  *[ICurrency](../interfaces/icurrency.md)* 

*Defined in [cart.ts:19](https://github.com/FlareMind/smart-cart/blob/a83b470/src/cart.ts#L19)*





___

<a id="currencyconverter"></a>

### «Private» currencyConverter

**●  currencyConverter**:  *[ICurrencyConverter](../interfaces/icurrencyconverter.md)* 

*Defined in [cart.ts:18](https://github.com/FlareMind/smart-cart/blob/a83b470/src/cart.ts#L18)*





___

<a id="weightunit"></a>

### «Private» weightUnit

**●  weightUnit**:  *[IWeightUnit](../interfaces/iweightunit.md)* 

*Defined in [cart.ts:20](https://github.com/FlareMind/smart-cart/blob/a83b470/src/cart.ts#L20)*





___


## Methods
<a id="additem"></a>

###  addItem

► **addItem**(product: *[IAddProduct](../interfaces/iaddproduct.md)*): [IProduct](../interfaces/iproduct.md)

► **addItem**(product: *[IAddProduct](../interfaces/iaddproduct.md)[]*): [IProduct](../interfaces/iproduct.md)[]



*Implementation of [ICart](../interfaces/icart.md).[addItem](../interfaces/icart.md#additem)*

*Defined in [cart.ts:84](https://github.com/FlareMind/smart-cart/blob/a83b470/src/cart.ts#L84)*



Add a single product to the cart


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| product | [IAddProduct](../interfaces/iaddproduct.md)   |  The product to add |





**Returns:** [IProduct](../interfaces/iproduct.md)
The added product




*Implementation of [ICart](../interfaces/icart.md).[addItem](../interfaces/icart.md#additem)*

*Defined in [cart.ts:91](https://github.com/FlareMind/smart-cart/blob/a83b470/src/cart.ts#L91)*



Add multiple products


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| product | [IAddProduct](../interfaces/iaddproduct.md)[]   |  The products to add in a list |





**Returns:** [IProduct](../interfaces/iproduct.md)[]
The added products in a list






___

<a id="clear"></a>

###  clear

► **clear**(): [ICart](../interfaces/icart.md)



*Implementation of [ICart](../interfaces/icart.md).[clear](../interfaces/icart.md#clear)*

*Overrides Observable.clear*

*Defined in [cart.ts:220](https://github.com/FlareMind/smart-cart/blob/a83b470/src/cart.ts#L220)*



Clear the cart from all items.




**Returns:** [ICart](../interfaces/icart.md)
Chaining this






___

<a id="count"></a>

###  count

► **count**(): `number`



*Implementation of [ICart](../interfaces/icart.md).[count](../interfaces/icart.md#count)*

*Overrides Observable.count*

*Defined in [cart.ts:55](https://github.com/FlareMind/smart-cart/blob/a83b470/src/cart.ts#L55)*



Get the number of items in the cart.




**Returns:** `number`
The number of products in the cart.






___

<a id="exportcart"></a>

###  exportCart

► **exportCart**(): `string`



*Implementation of [ICart](../interfaces/icart.md).[exportCart](../interfaces/icart.md#exportcart)*

*Defined in [cart.ts:329](https://github.com/FlareMind/smart-cart/blob/a83b470/src/cart.ts#L329)*



Export the cart to a JSON string.




**Returns:** `string`
The JSON string






___

<a id="findindex"></a>

### «Private» findIndex

► **findIndex**(product: *[IAddProduct](../interfaces/iaddproduct.md)*): `number`



*Defined in [cart.ts:146](https://github.com/FlareMind/smart-cart/blob/a83b470/src/cart.ts#L146)*



Search for a product in the cart given an IAddProduct.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| product | [IAddProduct](../interfaces/iaddproduct.md)   |  The product to find in the cart. |





**Returns:** `number`
The index of the product if it exist, otherwise -1.






___

<a id="get"></a>

###  get

► **get**(id: *`number`*): [IProduct](../interfaces/iproduct.md)⎮`null`



*Implementation of [ICart](../interfaces/icart.md).[get](../interfaces/icart.md#get)*

*Defined in [cart.ts:69](https://github.com/FlareMind/smart-cart/blob/a83b470/src/cart.ts#L69)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `number`   |  - |





**Returns:** [IProduct](../interfaces/iproduct.md)⎮`null`





___

<a id="getconfig"></a>

###  getConfig

► **getConfig**(): [ICartConfig](../interfaces/icartconfig.md)



*Implementation of [ICart](../interfaces/icart.md).[getConfig](../interfaces/icart.md#getconfig)*

*Defined in [cart.ts:47](https://github.com/FlareMind/smart-cart/blob/a83b470/src/cart.ts#L47)*



Get the cart config.




**Returns:** [ICartConfig](../interfaces/icartconfig.md)
The cart config.






___

<a id="getcontents"></a>

###  getContents

► **getContents**(): [IProduct](../interfaces/iproduct.md)[]



*Implementation of [ICart](../interfaces/icart.md).[getContents](../interfaces/icart.md#getcontents)*

*Defined in [cart.ts:65](https://github.com/FlareMind/smart-cart/blob/a83b470/src/cart.ts#L65)*



Get the products in the cart.




**Returns:** [IProduct](../interfaces/iproduct.md)[]
The products in the cart.






___

<a id="getcurrency"></a>

###  getCurrency

► **getCurrency**(): [ICurrency](../interfaces/icurrency.md)



*Implementation of [ICart](../interfaces/icart.md).[getCurrency](../interfaces/icart.md#getcurrency)*

*Defined in [cart.ts:267](https://github.com/FlareMind/smart-cart/blob/a83b470/src/cart.ts#L267)*



The currency of the cart.




**Returns:** [ICurrency](../interfaces/icurrency.md)
The currency of the cart.






___

<a id="getdefaultcurrency"></a>

###  getDefaultCurrency

► **getDefaultCurrency**(): [ICurrency](../interfaces/icurrency.md)



*Implementation of [ICart](../interfaces/icart.md).[getDefaultCurrency](../interfaces/icart.md#getdefaultcurrency)*

*Defined in [cart.ts:285](https://github.com/FlareMind/smart-cart/blob/a83b470/src/cart.ts#L285)*



Get the default currency of the cart. This is the currency the cart expects new items to be given in.




**Returns:** [ICurrency](../interfaces/icurrency.md)
The default currency of the cart.






___

<a id="getdefaultunitsystem"></a>

###  getDefaultUnitSystem

► **getDefaultUnitSystem**(): [IWeightUnit](../interfaces/iweightunit.md)



*Implementation of [ICart](../interfaces/icart.md).[getDefaultUnitSystem](../interfaces/icart.md#getdefaultunitsystem)*

*Defined in [cart.ts:321](https://github.com/FlareMind/smart-cart/blob/a83b470/src/cart.ts#L321)*



Get the default unit system of this cart. This is the unit system the cart expects new products to be given in.




**Returns:** [IWeightUnit](../interfaces/iweightunit.md)







___

<a id="gettotalprice"></a>

###  getTotalPrice

► **getTotalPrice**(vat?: *`boolean`*): `number`⎮`null`



*Defined in [cart.ts:243](https://github.com/FlareMind/smart-cart/blob/a83b470/src/cart.ts#L243)*



Get the total price of the cart. The price is given in the currency set in the cart.


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| vat | `boolean`  | true |   If VAT should be included in the price. |





**Returns:** `number`⎮`null`







___

<a id="getvat"></a>

###  getVat

► **getVat**(): `number`⎮`null`



*Implementation of [ICart](../interfaces/icart.md).[getVat](../interfaces/icart.md#getvat)*

*Defined in [cart.ts:255](https://github.com/FlareMind/smart-cart/blob/a83b470/src/cart.ts#L255)*



Get the total VAT of the products in the cart. Given in the currency set in the cart.




**Returns:** `number`⎮`null`
The VAT of all products.






___

<a id="getweight"></a>

###  getWeight

► **getWeight**(): `number`



*Implementation of [ICart](../interfaces/icart.md).[getWeight](../interfaces/icart.md#getweight)*

*Defined in [cart.ts:293](https://github.com/FlareMind/smart-cart/blob/a83b470/src/cart.ts#L293)*



Get the weight of the cart.




**Returns:** `number`







___

<a id="getweightunitsystem"></a>

###  getWeightUnitSystem

► **getWeightUnitSystem**(): [IWeightUnit](../interfaces/iweightunit.md)



*Implementation of [ICart](../interfaces/icart.md).[getWeightUnitSystem](../interfaces/icart.md#getweightunitsystem)*

*Defined in [cart.ts:303](https://github.com/FlareMind/smart-cart/blob/a83b470/src/cart.ts#L303)*



Get the weight unit system for this cart.




**Returns:** [IWeightUnit](../interfaces/iweightunit.md)
The weight unit system (e.g. kilogram).






___

<a id="notify"></a>

###  notify

► **notify**(event: *`IObservableEvent`*, data: *`any`*): `void`



*Inherited from Observable.notify*

*Defined in C:/Users/mattu/workspace/smart-cart/node_modules/typescript-observable/dist/observable.d.ts:15*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| event | `IObservableEvent`   |  - |
| data | `any`   |  - |





**Returns:** `void`





___

<a id="off"></a>

###  off

► **off**(observer: *`IObserver`*): `boolean`



*Inherited from Observable.off*

*Defined in C:/Users/mattu/workspace/smart-cart/node_modules/typescript-observable/dist/observable.d.ts:14*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| observer | `IObserver`   |  - |





**Returns:** `boolean`





___

<a id="on"></a>

###  on

► **on**(type: *`string`⎮`IObservableEvent`⎮(`string`⎮`IObservableEvent`)[]*, callback: *`ObserverCallback`⎮`IObserver`*): `ICancel`



*Inherited from Observable.on*

*Defined in C:/Users/mattu/workspace/smart-cart/node_modules/typescript-observable/dist/observable.d.ts:13*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| type | `string`⎮`IObservableEvent`⎮(`string`⎮`IObservableEvent`)[]   |  - |
| callback | `ObserverCallback`⎮`IObserver`   |  - |





**Returns:** `ICancel`





___

<a id="removeitem"></a>

###  removeItem

► **removeItem**(id: *`number`*): `boolean`



*Implementation of [ICart](../interfaces/icart.md).[removeItem](../interfaces/icart.md#removeitem)*

*Defined in [cart.ts:197](https://github.com/FlareMind/smart-cart/blob/a83b470/src/cart.ts#L197)*



Remove an item from the cart


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `number`   |  is the id of the product |





**Returns:** `boolean`
true if successful, otherwise false






___

<a id="setcurrency"></a>

###  setCurrency

► **setCurrency**(currency: *[ICurrency](../interfaces/icurrency.md)*): [ICart](../interfaces/icart.md)



*Implementation of [ICart](../interfaces/icart.md).[setCurrency](../interfaces/icart.md#setcurrency)*

*Defined in [cart.ts:276](https://github.com/FlareMind/smart-cart/blob/a83b470/src/cart.ts#L276)*



Set the currency of the cart.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| currency | [ICurrency](../interfaces/icurrency.md)   |  The new currency to use in the cart. |





**Returns:** [ICart](../interfaces/icart.md)
Chained this






___

<a id="setcurrencyconverter"></a>

###  setCurrencyConverter

► **setCurrencyConverter**(currencyConverter: *[ICurrencyConverter](../interfaces/icurrencyconverter.md)*): [ICart](../interfaces/icart.md)



*Implementation of [ICart](../interfaces/icart.md).[setCurrencyConverter](../interfaces/icart.md#setcurrencyconverter)*

*Defined in [cart.ts:233](https://github.com/FlareMind/smart-cart/blob/a83b470/src/cart.ts#L233)*



Set the currency converter of this


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| currencyConverter | [ICurrencyConverter](../interfaces/icurrencyconverter.md)   |  - |





**Returns:** [ICart](../interfaces/icart.md)
Chaining this






___

<a id="setweightunitsystem"></a>

###  setWeightUnitSystem

► **setWeightUnitSystem**(weightUnit: *[IWeightUnit](../interfaces/iweightunit.md)*): [ICart](../interfaces/icart.md)



*Implementation of [ICart](../interfaces/icart.md).[setWeightUnitSystem](../interfaces/icart.md#setweightunitsystem)*

*Defined in [cart.ts:312](https://github.com/FlareMind/smart-cart/blob/a83b470/src/cart.ts#L312)*



Set the weight unit system for this cart.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| weightUnit | [IWeightUnit](../interfaces/iweightunit.md)   |  The new weight unit system. |





**Returns:** [ICart](../interfaces/icart.md)
Chaining this






___

<a id="updateitemquantity"></a>

###  updateItemQuantity

► **updateItemQuantity**(id: *`number`*, quantity: *`number`*): `boolean`



*Implementation of [ICart](../interfaces/icart.md).[updateItemQuantity](../interfaces/icart.md#updateitemquantity)*

*Defined in [cart.ts:176](https://github.com/FlareMind/smart-cart/blob/a83b470/src/cart.ts#L176)*



Update the quantity of a product in the basket.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `number`   |  - |
| quantity | `number`   |  - |





**Returns:** `boolean`







___

<a id="importcart"></a>

### «Static» importCart

► **importCart**(data: *`string`*): [ICart](../interfaces/icart.md)⎮`null`



*Defined in [cart.ts:351](https://github.com/FlareMind/smart-cart/blob/a83b470/src/cart.ts#L351)*



Import the cart from a JSON string.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `string`   |  The JSON string to import. |





**Returns:** [ICart](../interfaces/icart.md)⎮`null`
The imported cart if the import was successful. Otherwise null.






___

<a id="isaddproduct"></a>

### «Static»«Private» isAddProduct

► **isAddProduct**(product: *[IAddProduct](../interfaces/iaddproduct.md)⎮[IAddProduct](../interfaces/iaddproduct.md)[]*): `boolean`



*Defined in [cart.ts:166](https://github.com/FlareMind/smart-cart/blob/a83b470/src/cart.ts#L166)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| product | [IAddProduct](../interfaces/iaddproduct.md)⎮[IAddProduct](../interfaces/iaddproduct.md)[]   |  - |





**Returns:** `boolean`





___

<a id="isexportedcart"></a>

### «Static»«Private» isExportedCart

► **isExportedCart**(obj: *`any`*): `boolean`



*Defined in [cart.ts:363](https://github.com/FlareMind/smart-cart/blob/a83b470/src/cart.ts#L363)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any`   |  - |





**Returns:** `boolean`





___


