[typescript-cart](../README.md) > [Product](../classes/product.md)



# Class: Product

## Implements

* [IProduct](../interfaces/iproduct.md)

## Index

### Constructors

* [constructor](product.md#constructor)


### Properties

* [cart](product.md#cart)
* [id](product.md#id)
* [productData](product.md#productdata)


### Methods

* [getCurrency](product.md#getcurrency)
* [getData](product.md#getdata)
* [getExtra](product.md#getextra)
* [getId](product.md#getid)
* [getQuantity](product.md#getquantity)
* [getTotalPrice](product.md#gettotalprice)
* [getVat](product.md#getvat)
* [getWeight](product.md#getweight)
* [remove](product.md#remove)
* [setQuantity](product.md#setquantity)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Product**(id: *`number`*, data: *[IAddProduct](../interfaces/iaddproduct.md)*, cart: *[ICart](../interfaces/icart.md)*): [Product](product.md)


*Defined in [product.ts:10](https://github.com/FlareMind/typescript-cart/blob/0489372/src/product.ts#L10)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `number`   |  - |
| data | [IAddProduct](../interfaces/iaddproduct.md)   |  - |
| cart | [ICart](../interfaces/icart.md)   |  - |





**Returns:** [Product](product.md)

---


## Properties
<a id="cart"></a>

### «Private» cart

**●  cart**:  *[ICart](../interfaces/icart.md)* 

*Defined in [product.ts:9](https://github.com/FlareMind/typescript-cart/blob/0489372/src/product.ts#L9)*





___

<a id="id"></a>

### «Private» id

**●  id**:  *`number`* 

*Defined in [product.ts:8](https://github.com/FlareMind/typescript-cart/blob/0489372/src/product.ts#L8)*





___

<a id="productdata"></a>

### «Private» productData

**●  productData**:  *[IProductData](../interfaces/iproductdata.md)* 

*Defined in [product.ts:10](https://github.com/FlareMind/typescript-cart/blob/0489372/src/product.ts#L10)*





___


## Methods
<a id="getcurrency"></a>

###  getCurrency

► **getCurrency**(): [ICurrency](../interfaces/icurrency.md)



*Implementation of [IProduct](../interfaces/iproduct.md).[getCurrency](../interfaces/iproduct.md#getcurrency)*

*Defined in [product.ts:130](https://github.com/FlareMind/typescript-cart/blob/0489372/src/product.ts#L130)*



Get the currency of this product.




**Returns:** [ICurrency](../interfaces/icurrency.md)
The currency






___

<a id="getdata"></a>

###  getData

► **getData**(): [IProductData](../interfaces/iproductdata.md)



*Implementation of [IProduct](../interfaces/iproduct.md).[getData](../interfaces/iproduct.md#getdata)*

*Defined in [product.ts:48](https://github.com/FlareMind/typescript-cart/blob/0489372/src/product.ts#L48)*



Get the product data. This object contains all data about the object. Use functions in this class if possible to change the object rather than changing it directly.




**Returns:** [IProductData](../interfaces/iproductdata.md)







___

<a id="getextra"></a>

###  getExtra

► **getExtra**(): `any`



*Implementation of [IProduct](../interfaces/iproduct.md).[getExtra](../interfaces/iproduct.md#getextra)*

*Defined in [product.ts:154](https://github.com/FlareMind/typescript-cart/blob/0489372/src/product.ts#L154)*



Get the extra data of this product




**Returns:** `any`







___

<a id="getid"></a>

###  getId

► **getId**(): `number`



*Implementation of [IProduct](../interfaces/iproduct.md).[getId](../interfaces/iproduct.md#getid)*

*Defined in [product.ts:39](https://github.com/FlareMind/typescript-cart/blob/0489372/src/product.ts#L39)*



Get the id of the product. This id is specific for the cart of the products.




**Returns:** `number`







___

<a id="getquantity"></a>

###  getQuantity

► **getQuantity**(): `number`



*Implementation of [IProduct](../interfaces/iproduct.md).[getQuantity](../interfaces/iproduct.md#getquantity)*

*Defined in [product.ts:56](https://github.com/FlareMind/typescript-cart/blob/0489372/src/product.ts#L56)*



Get the quantity of the product.




**Returns:** `number`
The quantity






___

<a id="gettotalprice"></a>

###  getTotalPrice

► **getTotalPrice**(vat: *`boolean`*): `number`



*Implementation of [IProduct](../interfaces/iproduct.md).[getTotalPrice](../interfaces/iproduct.md#gettotalprice)*

*Defined in [product.ts:109](https://github.com/FlareMind/typescript-cart/blob/0489372/src/product.ts#L109)*



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

*Defined in [product.ts:138](https://github.com/FlareMind/typescript-cart/blob/0489372/src/product.ts#L138)*



Get the vat of this product




**Returns:** `number`
The vat






___

<a id="getweight"></a>

###  getWeight

► **getWeight**(weightUnit: *[IWeightUnit](../interfaces/iweightunit.md)*): `number`



*Implementation of [IProduct](../interfaces/iproduct.md).[getWeight](../interfaces/iproduct.md#getweight)*

*Defined in [product.ts:95](https://github.com/FlareMind/typescript-cart/blob/0489372/src/product.ts#L95)*



Get the weight of the product


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| weightUnit | [IWeightUnit](../interfaces/iweightunit.md)   |  the weight units to use |





**Returns:** `number`
The weight of the cart






___

<a id="remove"></a>

###  remove

► **remove**(): `boolean`



*Implementation of [IProduct](../interfaces/iproduct.md).[remove](../interfaces/iproduct.md#remove)*

*Defined in [product.ts:86](https://github.com/FlareMind/typescript-cart/blob/0489372/src/product.ts#L86)*



Remove the product from the cart




**Returns:** `boolean`
true if the product was removed, false otherwise






___

<a id="setquantity"></a>

###  setQuantity

► **setQuantity**(quantity: *`number`*, add?: *`boolean`*): [IProduct](../interfaces/iproduct.md)



*Defined in [product.ts:66](https://github.com/FlareMind/typescript-cart/blob/0489372/src/product.ts#L66)*



Set the quantity.


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| quantity | `number`  | - |   The new quantity. |
| add | `boolean`  | false |   If true the quantity is added, if false the new quantity will overwrite the old. |





**Returns:** [IProduct](../interfaces/iproduct.md)
Chaining this






___


