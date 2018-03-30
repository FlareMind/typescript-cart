[typescript-cart](../README.md) > [CurrencyConverter](../classes/currencyconverter.md)



# Class: CurrencyConverter

## Implements

* [ICurrencyConverter](../interfaces/icurrencyconverter.md)

## Index

### Constructors

* [constructor](currencyconverter.md#constructor)


### Properties

* [base](currencyconverter.md#base)
* [rates](currencyconverter.md#rates)


### Methods

* [convert](currencyconverter.md#convert)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new CurrencyConverter**(rates: *`any`*, base?: *[ICurrency](../interfaces/icurrency.md)*): [CurrencyConverter](currencyconverter.md)


*Defined in [currency-converter.ts:8](https://github.com/FlareMind/typescript-cart/blob/c89995c/src/currency-converter.ts#L8)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| rates | `any`   |  - |
| base | [ICurrency](../interfaces/icurrency.md)   |  - |





**Returns:** [CurrencyConverter](currencyconverter.md)

---


## Properties
<a id="base"></a>

### «Private» base

**●  base**:  *[ICurrency](../interfaces/icurrency.md)* 

*Defined in [currency-converter.ts:8](https://github.com/FlareMind/typescript-cart/blob/c89995c/src/currency-converter.ts#L8)*





___

<a id="rates"></a>

### «Private» rates

**●  rates**:  *`any`* 

*Defined in [currency-converter.ts:7](https://github.com/FlareMind/typescript-cart/blob/c89995c/src/currency-converter.ts#L7)*





___


## Methods
<a id="convert"></a>

###  convert

► **convert**(convertObject: *[IConvertObject](../interfaces/iconvertobject.md)*): `number`⎮`null`



*Implementation of [ICurrencyConverter](../interfaces/icurrencyconverter.md).[convert](../interfaces/icurrencyconverter.md#convert)*

*Defined in [currency-converter.ts:22](https://github.com/FlareMind/typescript-cart/blob/c89995c/src/currency-converter.ts#L22)*



Convert a price from one currency to another.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| convertObject | [IConvertObject](../interfaces/iconvertobject.md)   |  The conversion object that specifies amount and which currencies theconversion involves. |





**Returns:** `number`⎮`null`
The amount in the new currency.






___


