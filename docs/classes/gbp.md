[typescript-cart](../README.md) > [GBP](../classes/gbp.md)



# Class: GBP

## Hierarchy


 [Currency](currency.md)

**↳ GBP**







## Implements

* [ICurrency](../interfaces/icurrency.md)

## Index

### Properties

* [currencyName](gbp.md#currencyname)
* [prefix](gbp.md#prefix)
* [suffix](gbp.md#suffix)


### Methods

* [format](gbp.md#format)
* [getCode](gbp.md#getcode)
* [toString](gbp.md#tostring)



---
## Properties
<a id="currencyname"></a>

###  currencyName

**●  currencyName**:  *`string`*  = "Pound sterling"

*Implementation of [ICurrency](../interfaces/icurrency.md).[currencyName](../interfaces/icurrency.md#currencyname)*

*Overrides [Currency](currency.md).[currencyName](currency.md#currencyname)*

*Defined in [currencies/gbp.ts:4](https://github.com/FlareMind/typescript-cart/blob/0489372/src/currencies/gbp.ts#L4)*





___

<a id="prefix"></a>

###  prefix

**●  prefix**:  *`string`*  = "£"

*Implementation of [ICurrency](../interfaces/icurrency.md).[prefix](../interfaces/icurrency.md#prefix)*

*Overrides [Currency](currency.md).[prefix](currency.md#prefix)*

*Defined in [currencies/gbp.ts:6](https://github.com/FlareMind/typescript-cart/blob/0489372/src/currencies/gbp.ts#L6)*





___

<a id="suffix"></a>

###  suffix

**●  suffix**:  *`string`*  = "GBP"

*Implementation of [ICurrency](../interfaces/icurrency.md).[suffix](../interfaces/icurrency.md#suffix)*

*Overrides [Currency](currency.md).[suffix](currency.md#suffix)*

*Defined in [currencies/gbp.ts:5](https://github.com/FlareMind/typescript-cart/blob/0489372/src/currencies/gbp.ts#L5)*





___


## Methods
<a id="format"></a>

###  format

► **format**(amount: *`number`*, options?: *[ICurrencyOptions](../interfaces/icurrencyoptions.md)*): `string`



*Implementation of [ICurrency](../interfaces/icurrency.md).[format](../interfaces/icurrency.md#format)*

*Inherited from [Currency](currency.md).[format](currency.md#format)*

*Defined in [interfaces/currency.ts:21](https://github.com/FlareMind/typescript-cart/blob/0489372/src/interfaces/currency.ts#L21)*



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

*Inherited from [Currency](currency.md).[getCode](currency.md#getcode)*

*Defined in [interfaces/currency.ts:34](https://github.com/FlareMind/typescript-cart/blob/0489372/src/interfaces/currency.ts#L34)*





**Returns:** `string`





___

<a id="tostring"></a>

###  toString

► **toString**(): `string`



*Inherited from [Currency](currency.md).[toString](currency.md#tostring)*

*Defined in [interfaces/currency.ts:38](https://github.com/FlareMind/typescript-cart/blob/0489372/src/interfaces/currency.ts#L38)*





**Returns:** `string`





___


