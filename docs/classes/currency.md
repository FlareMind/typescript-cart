[typescript-cart](../README.md) > [Currency](../classes/currency.md)



# Class: Currency

## Hierarchy

**Currency**

↳  [EUR](eur.md)




↳  [GBP](gbp.md)




↳  [USD](usd.md)




↳  [SEK](sek.md)








## Implements

* [ICurrency](../interfaces/icurrency.md)

## Index

### Properties

* [currencyName](currency.md#currencyname)
* [prefix](currency.md#prefix)
* [suffix](currency.md#suffix)


### Methods

* [format](currency.md#format)
* [getCode](currency.md#getcode)
* [toString](currency.md#tostring)



---
## Properties
<a id="currencyname"></a>

### «Abstract» currencyName

**●  currencyName**:  *`string`* 

*Implementation of [ICurrency](../interfaces/icurrency.md).[currencyName](../interfaces/icurrency.md#currencyname)*

*Defined in [interfaces/currency.ts:18](https://github.com/FlareMind/typescript-cart/blob/1125687/src/interfaces/currency.ts#L18)*





___

<a id="prefix"></a>

###  prefix

**●  prefix**:  *`string`⎮`null`*  =  null

*Implementation of [ICurrency](../interfaces/icurrency.md).[prefix](../interfaces/icurrency.md#prefix)*

*Defined in [interfaces/currency.ts:17](https://github.com/FlareMind/typescript-cart/blob/1125687/src/interfaces/currency.ts#L17)*





___

<a id="suffix"></a>

### «Abstract» suffix

**●  suffix**:  *`string`* 

*Implementation of [ICurrency](../interfaces/icurrency.md).[suffix](../interfaces/icurrency.md#suffix)*

*Defined in [interfaces/currency.ts:19](https://github.com/FlareMind/typescript-cart/blob/1125687/src/interfaces/currency.ts#L19)*





___


## Methods
<a id="format"></a>

###  format

► **format**(amount: *`number`*, options?: *[ICurrencyOptions](../interfaces/icurrencyoptions.md)*): `string`



*Implementation of [ICurrency](../interfaces/icurrency.md).[format](../interfaces/icurrency.md#format)*

*Defined in [interfaces/currency.ts:21](https://github.com/FlareMind/typescript-cart/blob/1125687/src/interfaces/currency.ts#L21)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| amount | `number`   |  - |
| options | [ICurrencyOptions](../interfaces/icurrencyoptions.md)   |  - |





**Returns:** `string`





___

<a id="getcode"></a>

###  getCode

► **getCode**(): `string`



*Implementation of [ICurrency](../interfaces/icurrency.md).[getCode](../interfaces/icurrency.md#getcode)*

*Defined in [interfaces/currency.ts:34](https://github.com/FlareMind/typescript-cart/blob/1125687/src/interfaces/currency.ts#L34)*





**Returns:** `string`





___

<a id="tostring"></a>

###  toString

► **toString**(): `string`



*Defined in [interfaces/currency.ts:38](https://github.com/FlareMind/typescript-cart/blob/1125687/src/interfaces/currency.ts#L38)*





**Returns:** `string`





___


