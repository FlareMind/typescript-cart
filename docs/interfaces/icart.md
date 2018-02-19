[smart-cart](../README.md) > [ICart](../interfaces/icart.md)



# Interface: ICart

## Implemented by

* [Cart](../classes/cart.md)


## Methods
<a id="additem"></a>

###  addItem

► **addItem**(product: *[IAddProduct](iaddproduct.md)*): [IProduct](iproduct.md)

► **addItem**(product: *[IAddProduct](iaddproduct.md)[]*): [IProduct](iproduct.md)[]



*Defined in [interfaces/cart.ts:21](https://github.com/FlareMind/smart-cart/blob/a83b470/src/interfaces/cart.ts#L21)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| product | [IAddProduct](iaddproduct.md)   |  - |





**Returns:** [IProduct](iproduct.md)



*Defined in [interfaces/cart.ts:22](https://github.com/FlareMind/smart-cart/blob/a83b470/src/interfaces/cart.ts#L22)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| product | [IAddProduct](iaddproduct.md)[]   |  - |





**Returns:** [IProduct](iproduct.md)[]





___

<a id="clear"></a>

###  clear

► **clear**(): [ICart](icart.md)



*Defined in [interfaces/cart.ts:25](https://github.com/FlareMind/smart-cart/blob/a83b470/src/interfaces/cart.ts#L25)*





**Returns:** [ICart](icart.md)





___

<a id="count"></a>

###  count

► **count**(): `number`



*Defined in [interfaces/cart.ts:18](https://github.com/FlareMind/smart-cart/blob/a83b470/src/interfaces/cart.ts#L18)*





**Returns:** `number`





___

<a id="exportcart"></a>

###  exportCart

► **exportCart**(): `string`



*Defined in [interfaces/cart.ts:48](https://github.com/FlareMind/smart-cart/blob/a83b470/src/interfaces/cart.ts#L48)*





**Returns:** `string`





___

<a id="get"></a>

###  get

► **get**(id: *`number`*): [IProduct](iproduct.md)⎮`null`



*Defined in [interfaces/cart.ts:20](https://github.com/FlareMind/smart-cart/blob/a83b470/src/interfaces/cart.ts#L20)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `number`   |  - |





**Returns:** [IProduct](iproduct.md)⎮`null`





___

<a id="getconfig"></a>

###  getConfig

► **getConfig**(): [ICartConfig](icartconfig.md)



*Defined in [interfaces/cart.ts:13](https://github.com/FlareMind/smart-cart/blob/a83b470/src/interfaces/cart.ts#L13)*





**Returns:** [ICartConfig](icartconfig.md)





___

<a id="getcontents"></a>

###  getContents

► **getContents**(): [IProduct](iproduct.md)[]



*Defined in [interfaces/cart.ts:19](https://github.com/FlareMind/smart-cart/blob/a83b470/src/interfaces/cart.ts#L19)*





**Returns:** [IProduct](iproduct.md)[]





___

<a id="getcurrency"></a>

###  getCurrency

► **getCurrency**(): [ICurrency](icurrency.md)



*Defined in [interfaces/cart.ts:33](https://github.com/FlareMind/smart-cart/blob/a83b470/src/interfaces/cart.ts#L33)*





**Returns:** [ICurrency](icurrency.md)





___

<a id="getdefaultcurrency"></a>

###  getDefaultCurrency

► **getDefaultCurrency**(): [ICurrency](icurrency.md)



*Defined in [interfaces/cart.ts:35](https://github.com/FlareMind/smart-cart/blob/a83b470/src/interfaces/cart.ts#L35)*





**Returns:** [ICurrency](icurrency.md)





___

<a id="getdefaultunitsystem"></a>

###  getDefaultUnitSystem

► **getDefaultUnitSystem**(): [IWeightUnit](iweightunit.md)



*Defined in [interfaces/cart.ts:43](https://github.com/FlareMind/smart-cart/blob/a83b470/src/interfaces/cart.ts#L43)*





**Returns:** [IWeightUnit](iweightunit.md)





___

<a id="gettotalprice"></a>

###  getTotalPrice

► **getTotalPrice**(vat?: *`undefined`⎮`true`⎮`false`*): `number`⎮`null`



*Defined in [interfaces/cart.ts:31](https://github.com/FlareMind/smart-cart/blob/a83b470/src/interfaces/cart.ts#L31)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| vat | `undefined`⎮`true`⎮`false`   |  - |





**Returns:** `number`⎮`null`





___

<a id="getvat"></a>

###  getVat

► **getVat**(): `number`⎮`null`



*Defined in [interfaces/cart.ts:32](https://github.com/FlareMind/smart-cart/blob/a83b470/src/interfaces/cart.ts#L32)*





**Returns:** `number`⎮`null`





___

<a id="getweight"></a>

###  getWeight

► **getWeight**(): `number`



*Defined in [interfaces/cart.ts:40](https://github.com/FlareMind/smart-cart/blob/a83b470/src/interfaces/cart.ts#L40)*





**Returns:** `number`





___

<a id="getweightunitsystem"></a>

###  getWeightUnitSystem

► **getWeightUnitSystem**(): [IWeightUnit](iweightunit.md)



*Defined in [interfaces/cart.ts:41](https://github.com/FlareMind/smart-cart/blob/a83b470/src/interfaces/cart.ts#L41)*





**Returns:** [IWeightUnit](iweightunit.md)





___

<a id="removeitem"></a>

###  removeItem

► **removeItem**(id: *`number`*): `boolean`



*Defined in [interfaces/cart.ts:24](https://github.com/FlareMind/smart-cart/blob/a83b470/src/interfaces/cart.ts#L24)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `number`   |  - |





**Returns:** `boolean`





___

<a id="setcurrency"></a>

###  setCurrency

► **setCurrency**(currency: *[ICurrency](icurrency.md)*): [ICart](icart.md)



*Defined in [interfaces/cart.ts:34](https://github.com/FlareMind/smart-cart/blob/a83b470/src/interfaces/cart.ts#L34)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| currency | [ICurrency](icurrency.md)   |  - |





**Returns:** [ICart](icart.md)





___

<a id="setcurrencyconverter"></a>

###  setCurrencyConverter

► **setCurrencyConverter**(currencyConverter: *[ICurrencyConverter](icurrencyconverter.md)*): [ICart](icart.md)



*Defined in [interfaces/cart.ts:30](https://github.com/FlareMind/smart-cart/blob/a83b470/src/interfaces/cart.ts#L30)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| currencyConverter | [ICurrencyConverter](icurrencyconverter.md)   |  - |





**Returns:** [ICart](icart.md)





___

<a id="setweightunitsystem"></a>

###  setWeightUnitSystem

► **setWeightUnitSystem**(weightUnit: *[IWeightUnit](iweightunit.md)*): [ICart](icart.md)



*Defined in [interfaces/cart.ts:42](https://github.com/FlareMind/smart-cart/blob/a83b470/src/interfaces/cart.ts#L42)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| weightUnit | [IWeightUnit](iweightunit.md)   |  - |





**Returns:** [ICart](icart.md)





___

<a id="updateitemquantity"></a>

###  updateItemQuantity

► **updateItemQuantity**(id: *`number`*, quantity: *`number`*): `boolean`



*Defined in [interfaces/cart.ts:23](https://github.com/FlareMind/smart-cart/blob/a83b470/src/interfaces/cart.ts#L23)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `number`   |  - |
| quantity | `number`   |  - |





**Returns:** `boolean`





___


