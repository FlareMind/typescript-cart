[typescript-cart](../README.md) > [IProduct](../interfaces/iproduct.md)



# Interface: IProduct

## Implemented by

* [Product](../classes/product.md)


## Methods
<a id="getcurrency"></a>

###  getCurrency

► **getCurrency**(): [ICurrency](icurrency.md)



*Defined in [interfaces/product.ts:22](https://github.com/FlareMind/typescript-cart/blob/0489372/src/interfaces/product.ts#L22)*





**Returns:** [ICurrency](icurrency.md)





___

<a id="getdata"></a>

###  getData

► **getData**(): [IProductData](iproductdata.md)



*Defined in [interfaces/product.ts:19](https://github.com/FlareMind/typescript-cart/blob/0489372/src/interfaces/product.ts#L19)*





**Returns:** [IProductData](iproductdata.md)





___

<a id="getextra"></a>

###  getExtra

► **getExtra**(): `any`



*Defined in [interfaces/product.ts:24](https://github.com/FlareMind/typescript-cart/blob/0489372/src/interfaces/product.ts#L24)*





**Returns:** `any`





___

<a id="getid"></a>

###  getId

► **getId**(): `number`



*Defined in [interfaces/product.ts:7](https://github.com/FlareMind/typescript-cart/blob/0489372/src/interfaces/product.ts#L7)*





**Returns:** `number`





___

<a id="getquantity"></a>

###  getQuantity

► **getQuantity**(): `number`



*Defined in [interfaces/product.ts:12](https://github.com/FlareMind/typescript-cart/blob/0489372/src/interfaces/product.ts#L12)*





**Returns:** `number`





___

<a id="gettotalprice"></a>

###  getTotalPrice

► **getTotalPrice**(vat: *`boolean`*): `number`



*Defined in [interfaces/product.ts:21](https://github.com/FlareMind/typescript-cart/blob/0489372/src/interfaces/product.ts#L21)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| vat | `boolean`   |  - |





**Returns:** `number`





___

<a id="getvat"></a>

###  getVat

► **getVat**(): `number`



*Defined in [interfaces/product.ts:23](https://github.com/FlareMind/typescript-cart/blob/0489372/src/interfaces/product.ts#L23)*





**Returns:** `number`





___

<a id="getweight"></a>

###  getWeight

► **getWeight**(weightUnit: *[IWeightUnit](iweightunit.md)*): `number`



*Defined in [interfaces/product.ts:20](https://github.com/FlareMind/typescript-cart/blob/0489372/src/interfaces/product.ts#L20)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| weightUnit | [IWeightUnit](iweightunit.md)   |  - |





**Returns:** `number`





___

<a id="remove"></a>

###  remove

► **remove**(): `boolean`



*Defined in [interfaces/product.ts:14](https://github.com/FlareMind/typescript-cart/blob/0489372/src/interfaces/product.ts#L14)*





**Returns:** `boolean`





___

<a id="setquantity"></a>

###  setQuantity

► **setQuantity**(quantity: *`number`*, add?: *`undefined`⎮`true`⎮`false`*): [IProduct](iproduct.md)



*Defined in [interfaces/product.ts:13](https://github.com/FlareMind/typescript-cart/blob/0489372/src/interfaces/product.ts#L13)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| quantity | `number`   |  - |
| add | `undefined`⎮`true`⎮`false`   |  - |





**Returns:** [IProduct](iproduct.md)





___


