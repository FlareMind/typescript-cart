[typescript-cart](../README.md) > [Product](../classes/product.md)



# Class: Product

## Hierarchy


 `Observable`

**↳ Product**







## Implements

* `IObservable`
* [IProduct](../interfaces/iproduct.md)

## Index

### Constructors

* [constructor](product.md#constructor)


### Properties

* [id](product.md#id)
* [productData](product.md#productdata)


### Methods

* [clear](product.md#clear)
* [count](product.md#count)
* [getCurrency](product.md#getcurrency)
* [getData](product.md#getdata)
* [getExtra](product.md#getextra)
* [getId](product.md#getid)
* [getQuantity](product.md#getquantity)
* [getTotalPrice](product.md#gettotalprice)
* [getVat](product.md#getvat)
* [getWeight](product.md#getweight)
* [notify](product.md#notify)
* [off](product.md#off)
* [on](product.md#on)
* [remove](product.md#remove)
* [setQuantity](product.md#setquantity)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Product**(id: *`number`*, data: *[IAddProduct](../interfaces/iaddproduct.md)*, cartConfig: *[ICartConfig](../interfaces/icartconfig.md)*): [Product](product.md)


*Overrides Observable.__constructor*

*Defined in [product.ts:11](https://github.com/FlareMind/typescript-cart/blob/c89995c/src/product.ts#L11)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `number`   |  - |
| data | [IAddProduct](../interfaces/iaddproduct.md)   |  - |
| cartConfig | [ICartConfig](../interfaces/icartconfig.md)   |  - |





**Returns:** [Product](product.md)

---


## Properties
<a id="id"></a>

### «Private» id

**●  id**:  *`number`* 

*Defined in [product.ts:10](https://github.com/FlareMind/typescript-cart/blob/c89995c/src/product.ts#L10)*





___

<a id="productdata"></a>

### «Private» productData

**●  productData**:  *[IProductData](../interfaces/iproductdata.md)* 

*Defined in [product.ts:11](https://github.com/FlareMind/typescript-cart/blob/c89995c/src/product.ts#L11)*





___


## Methods
<a id="clear"></a>

###  clear

► **clear**(): `void`



*Inherited from Observable.clear*

*Defined in C:/Users/mattu/workspace/typescript-cart/node_modules/typescript-observable/dist/observable.d.ts:12*





**Returns:** `void`





___

<a id="count"></a>

###  count

► **count**(): `number`



*Inherited from Observable.count*

*Defined in C:/Users/mattu/workspace/typescript-cart/node_modules/typescript-observable/dist/observable.d.ts:11*





**Returns:** `number`





___

<a id="getcurrency"></a>

###  getCurrency

► **getCurrency**(): [ICurrency](../interfaces/icurrency.md)



*Implementation of [IProduct](../interfaces/iproduct.md).[getCurrency](../interfaces/iproduct.md#getcurrency)*

*Defined in [product.ts:134](https://github.com/FlareMind/typescript-cart/blob/c89995c/src/product.ts#L134)*



Get the currency of this product.




**Returns:** [ICurrency](../interfaces/icurrency.md)
The currency






___

<a id="getdata"></a>

###  getData

► **getData**(): [IProductData](../interfaces/iproductdata.md)



*Implementation of [IProduct](../interfaces/iproduct.md).[getData](../interfaces/iproduct.md#getdata)*

*Defined in [product.ts:50](https://github.com/FlareMind/typescript-cart/blob/c89995c/src/product.ts#L50)*



Get the product data. This object contains all data about the object. Use functions in this class if possible to change the object rather than changing it directly.




**Returns:** [IProductData](../interfaces/iproductdata.md)







___

<a id="getextra"></a>

###  getExtra

► **getExtra**(): `any`



*Implementation of [IProduct](../interfaces/iproduct.md).[getExtra](../interfaces/iproduct.md#getextra)*

*Defined in [product.ts:158](https://github.com/FlareMind/typescript-cart/blob/c89995c/src/product.ts#L158)*



Get the extra data of this product




**Returns:** `any`







___

<a id="getid"></a>

###  getId

► **getId**(): `number`



*Implementation of [IProduct](../interfaces/iproduct.md).[getId](../interfaces/iproduct.md#getid)*

*Defined in [product.ts:41](https://github.com/FlareMind/typescript-cart/blob/c89995c/src/product.ts#L41)*



Get the id of the product. This id is specific for the cart of the products.




**Returns:** `number`







___

<a id="getquantity"></a>

###  getQuantity

► **getQuantity**(): `number`



*Implementation of [IProduct](../interfaces/iproduct.md).[getQuantity](../interfaces/iproduct.md#getquantity)*

*Defined in [product.ts:58](https://github.com/FlareMind/typescript-cart/blob/c89995c/src/product.ts#L58)*



Get the quantity of the product.




**Returns:** `number`
The quantity






___

<a id="gettotalprice"></a>

###  getTotalPrice

► **getTotalPrice**(vat: *`boolean`*): `number`



*Implementation of [IProduct](../interfaces/iproduct.md).[getTotalPrice](../interfaces/iproduct.md#gettotalprice)*

*Defined in [product.ts:113](https://github.com/FlareMind/typescript-cart/blob/c89995c/src/product.ts#L113)*



Get the total price of this product


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| vat | `boolean`   |  - |





**Returns:** `number`







___

<a id="getvat"></a>

###  getVat

► **getVat**(): `number`



*Implementation of [IProduct](../interfaces/iproduct.md).[getVat](../interfaces/iproduct.md#getvat)*

*Defined in [product.ts:142](https://github.com/FlareMind/typescript-cart/blob/c89995c/src/product.ts#L142)*



Get the vat of this product




**Returns:** `number`
The vat






___

<a id="getweight"></a>

###  getWeight

► **getWeight**(weightUnit: *[IWeightUnit](../interfaces/iweightunit.md)*): `number`



*Implementation of [IProduct](../interfaces/iproduct.md).[getWeight](../interfaces/iproduct.md#getweight)*

*Defined in [product.ts:99](https://github.com/FlareMind/typescript-cart/blob/c89995c/src/product.ts#L99)*



Get the weight of the product


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| weightUnit | [IWeightUnit](../interfaces/iweightunit.md)   |  the weight units to use |





**Returns:** `number`
The weight of the cart






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

<a id="remove"></a>

###  remove

► **remove**(): `Promise`.<`void`>



*Implementation of [IProduct](../interfaces/iproduct.md).[remove](../interfaces/iproduct.md#remove)*

*Defined in [product.ts:88](https://github.com/FlareMind/typescript-cart/blob/c89995c/src/product.ts#L88)*



Remove the product from cart




**Returns:** `Promise`.<`void`>
A promise when the product is removed






___

<a id="setquantity"></a>

###  setQuantity

► **setQuantity**(quantity: *`number`*, add?: *`boolean`*): [IProduct](../interfaces/iproduct.md)



*Defined in [product.ts:68](https://github.com/FlareMind/typescript-cart/blob/c89995c/src/product.ts#L68)*



Set the quantity.


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| quantity | `number`  | - |   The new quantity. |
| add | `boolean`  | false |   If true the quantity is added, if false the new quantity will overwrite the old. |





**Returns:** [IProduct](../interfaces/iproduct.md)
Chaining this






___


