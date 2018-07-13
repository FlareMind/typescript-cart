[typescript-cart](../README.md) > [Cart](../classes/cart.md)



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

*Defined in [cart.ts:22](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/cart.ts#L22)*



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

*Defined in [cart.ts:18](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/cart.ts#L18)*





___

<a id="content"></a>

### «Private» content

**●  content**:  *[IProduct](../interfaces/iproduct.md)[]*  =  []

*Defined in [cart.ts:22](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/cart.ts#L22)*





___

<a id="currency"></a>

### «Private» currency

**●  currency**:  *[ICurrency](../interfaces/icurrency.md)* 

*Defined in [cart.ts:20](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/cart.ts#L20)*





___

<a id="currencyconverter"></a>

### «Private» currencyConverter

**●  currencyConverter**:  *[ICurrencyConverter](../interfaces/icurrencyconverter.md)* 

*Defined in [cart.ts:19](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/cart.ts#L19)*





___

<a id="weightunit"></a>

### «Private» weightUnit

**●  weightUnit**:  *[IWeightUnit](../interfaces/iweightunit.md)* 

*Defined in [cart.ts:21](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/cart.ts#L21)*





___


## Methods
<a id="additem"></a>

###  addItem

► **addItem**(product: *[IAddProduct](../interfaces/iaddproduct.md)*): [IProduct](../interfaces/iproduct.md)

► **addItem**(product: *[IAddProduct](../interfaces/iaddproduct.md)[]*): [IProduct](../interfaces/iproduct.md)[]



*Implementation of [ICart](../interfaces/icart.md).[addItem](../interfaces/icart.md#additem)*

*Defined in [cart.ts:85](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/cart.ts#L85)*



Add a single product to the cart


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| product | [IAddProduct](../interfaces/iaddproduct.md)   |  The product to add |





**Returns:** [IProduct](../interfaces/iproduct.md)
The added product




*Implementation of [ICart](../interfaces/icart.md).[addItem](../interfaces/icart.md#additem)*

*Defined in [cart.ts:92](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/cart.ts#L92)*



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

*Defined in [cart.ts:226](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/cart.ts#L226)*



Clear the cart from all items.




**Returns:** [ICart](../interfaces/icart.md)
Chaining this






___

<a id="count"></a>

###  count

► **count**(): `number`



*Implementation of [ICart](../interfaces/icart.md).[count](../interfaces/icart.md#count)*

*Overrides Observable.count*

*Defined in [cart.ts:56](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/cart.ts#L56)*



Get the number of items in the cart.




**Returns:** `number`
The number of products in the cart.






___

<a id="exportcart"></a>

###  exportCart

► **exportCart**(): `string`



*Implementation of [ICart](../interfaces/icart.md).[exportCart](../interfaces/icart.md#exportcart)*

*Defined in [cart.ts:335](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/cart.ts#L335)*



Export the cart to a JSON string.




**Returns:** `string`
The JSON string






___

<a id="findindex"></a>

### «Private» findIndex

► **findIndex**(product: *[IAddProduct](../interfaces/iaddproduct.md)*): `number`



*Defined in [cart.ts:152](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/cart.ts#L152)*



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

*Defined in [cart.ts:70](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/cart.ts#L70)*



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

*Defined in [cart.ts:48](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/cart.ts#L48)*



Get the cart config.




**Returns:** [ICartConfig](../interfaces/icartconfig.md)
The cart config.






___

<a id="getcontents"></a>

###  getContents

► **getContents**(): [IProduct](../interfaces/iproduct.md)[]



*Implementation of [ICart](../interfaces/icart.md).[getContents](../interfaces/icart.md#getcontents)*

*Defined in [cart.ts:66](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/cart.ts#L66)*



Get the products in the cart.




**Returns:** [IProduct](../interfaces/iproduct.md)[]
The products in the cart.






___

<a id="getcurrency"></a>

###  getCurrency

► **getCurrency**(): [ICurrency](../interfaces/icurrency.md)



*Implementation of [ICart](../interfaces/icart.md).[getCurrency](../interfaces/icart.md#getcurrency)*

*Defined in [cart.ts:273](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/cart.ts#L273)*



The currency of the cart.




**Returns:** [ICurrency](../interfaces/icurrency.md)
The currency of the cart.






___

<a id="getdefaultcurrency"></a>

###  getDefaultCurrency

► **getDefaultCurrency**(): [ICurrency](../interfaces/icurrency.md)



*Implementation of [ICart](../interfaces/icart.md).[getDefaultCurrency](../interfaces/icart.md#getdefaultcurrency)*

*Defined in [cart.ts:291](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/cart.ts#L291)*



Get the default currency of the cart. This is the currency the cart expects new items to be given in.




**Returns:** [ICurrency](../interfaces/icurrency.md)
The default currency of the cart.






___

<a id="getdefaultunitsystem"></a>

###  getDefaultUnitSystem

► **getDefaultUnitSystem**(): [IWeightUnit](../interfaces/iweightunit.md)



*Implementation of [ICart](../interfaces/icart.md).[getDefaultUnitSystem](../interfaces/icart.md#getdefaultunitsystem)*

*Defined in [cart.ts:327](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/cart.ts#L327)*



Get the default unit system of this cart. This is the unit system the cart expects new products to be given in.




**Returns:** [IWeightUnit](../interfaces/iweightunit.md)







___

<a id="gettotalprice"></a>

###  getTotalPrice

► **getTotalPrice**(vat?: *`boolean`*): `number`⎮`null`



*Defined in [cart.ts:249](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/cart.ts#L249)*



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

*Defined in [cart.ts:261](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/cart.ts#L261)*



Get the total VAT of the products in the cart. Given in the currency set in the cart.




**Returns:** `number`⎮`null`
The VAT of all products.






___

<a id="getweight"></a>

###  getWeight

► **getWeight**(): `number`



*Implementation of [ICart](../interfaces/icart.md).[getWeight](../interfaces/icart.md#getweight)*

*Defined in [cart.ts:299](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/cart.ts#L299)*



Get the weight of the cart.




**Returns:** `number`







___

<a id="getweightunitsystem"></a>

###  getWeightUnitSystem

► **getWeightUnitSystem**(): [IWeightUnit](../interfaces/iweightunit.md)



*Implementation of [ICart](../interfaces/icart.md).[getWeightUnitSystem](../interfaces/icart.md#getweightunitsystem)*

*Defined in [cart.ts:309](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/cart.ts#L309)*



Get the weight unit system for this cart.




**Returns:** [IWeightUnit](../interfaces/iweightunit.md)
The weight unit system (e.g. kilogram).






___

<a id="notify"></a>

###  notify

► **notify**(event: *`IObservableEvent`*, data: *`any`*): `Promise`.<`void`>



*Inherited from Observable.notify*

*Defined in C:/Users/mattu/workspace/typescript-cart/node_modules/typescript-observable/dist/observable.d.ts:15*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| event | `IObservableEvent`   |  - |
| data | `any`   |  - |





**Returns:** `Promise`.<`void`>





___

<a id="off"></a>

###  off

► **off**(observer: *`IObserver`*): `boolean`



*Inherited from Observable.off*

*Defined in C:/Users/mattu/workspace/typescript-cart/node_modules/typescript-observable/dist/observable.d.ts:14*



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

*Defined in C:/Users/mattu/workspace/typescript-cart/node_modules/typescript-observable/dist/observable.d.ts:13*



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

*Defined in [cart.ts:203](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/cart.ts#L203)*



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

*Defined in [cart.ts:282](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/cart.ts#L282)*



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

*Defined in [cart.ts:239](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/cart.ts#L239)*



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

*Defined in [cart.ts:318](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/cart.ts#L318)*



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

*Defined in [cart.ts:182](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/cart.ts#L182)*



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



*Defined in [cart.ts:358](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/cart.ts#L358)*



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



*Defined in [cart.ts:172](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/cart.ts#L172)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| product | [IAddProduct](../interfaces/iaddproduct.md)⎮[IAddProduct](../interfaces/iaddproduct.md)[]   |  - |





**Returns:** `boolean`





___

<a id="isexportedcart"></a>

### «Static»«Private» isExportedCart

► **isExportedCart**(obj: *`any`*): `boolean`



*Defined in [cart.ts:375](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/cart.ts#L375)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any`   |  - |





**Returns:** `boolean`





___


