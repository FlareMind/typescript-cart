[typescript-cart](../README.md) > [ICurrency](../interfaces/icurrency.md)



# Interface: ICurrency

## Implemented by

* [Currency](../classes/currency.md)
* [EUR](../classes/eur.md)
* [GBP](../classes/gbp.md)
* [SEK](../classes/sek.md)
* [USD](../classes/usd.md)


## Properties
<a id="currencyname"></a>

###  currencyName

**●  currencyName**:  *`string`* 

*Defined in [interfaces/currency.ts:2](https://github.com/FlareMind/typescript-cart/blob/c89995c/src/interfaces/currency.ts#L2)*





___

<a id="prefix"></a>

###  prefix

**●  prefix**:  *`string`⎮`null`* 

*Defined in [interfaces/currency.ts:3](https://github.com/FlareMind/typescript-cart/blob/c89995c/src/interfaces/currency.ts#L3)*





___

<a id="suffix"></a>

###  suffix

**●  suffix**:  *`string`* 

*Defined in [interfaces/currency.ts:4](https://github.com/FlareMind/typescript-cart/blob/c89995c/src/interfaces/currency.ts#L4)*





___


## Methods
<a id="format"></a>

###  format

► **format**(amount: *`number`*, options?: *[ICurrencyOptions](icurrencyoptions.md)*): `string`



*Defined in [interfaces/currency.ts:8](https://github.com/FlareMind/typescript-cart/blob/c89995c/src/interfaces/currency.ts#L8)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| amount | `number`   |  - |
| options | [ICurrencyOptions](icurrencyoptions.md)   |  - |





**Returns:** `string`





___

<a id="getcode"></a>

###  getCode

► **getCode**(): `string`



*Defined in [interfaces/currency.ts:6](https://github.com/FlareMind/typescript-cart/blob/c89995c/src/interfaces/currency.ts#L6)*





**Returns:** `string`





___


