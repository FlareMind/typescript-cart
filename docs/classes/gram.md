[typescript-cart](../README.md) > [Gram](../classes/gram.md)



# Class: Gram

## Hierarchy


 [WeightUnit](weightunit.md)

**↳ Gram**







## Implements

* [IWeightUnit](../interfaces/iweightunit.md)

## Index

### Properties

* [label](gram.md#label)
* [unitName](gram.md#unitname)


### Methods

* [convertFromKilogram](gram.md#convertfromkilogram)
* [convertToKilogram](gram.md#converttokilogram)
* [format](gram.md#format)
* [toString](gram.md#tostring)



---
## Properties
<a id="label"></a>

###  label

**●  label**:  *`string`*  = "g"

*Implementation of [IWeightUnit](../interfaces/iweightunit.md).[label](../interfaces/iweightunit.md#label)*

*Overrides [WeightUnit](weightunit.md).[label](weightunit.md#label)*

*Defined in [weight-units/gram.ts:5](https://github.com/FlareMind/typescript-cart/blob/a202c9e/src/weight-units/gram.ts#L5)*





___

<a id="unitname"></a>

###  unitName

**●  unitName**:  *`string`*  = "Gram"

*Implementation of [IWeightUnit](../interfaces/iweightunit.md).[unitName](../interfaces/iweightunit.md#unitname)*

*Overrides [WeightUnit](weightunit.md).[unitName](weightunit.md#unitname)*

*Defined in [weight-units/gram.ts:4](https://github.com/FlareMind/typescript-cart/blob/a202c9e/src/weight-units/gram.ts#L4)*





___


## Methods
<a id="convertfromkilogram"></a>

###  convertFromKilogram

► **convertFromKilogram**(weight: *`number`*): `number`



*Implementation of [IWeightUnit](../interfaces/iweightunit.md).[convertFromKilogram](../interfaces/iweightunit.md#convertfromkilogram)*

*Overrides [WeightUnit](weightunit.md).[convertFromKilogram](weightunit.md#convertfromkilogram)*

*Defined in [weight-units/gram.ts:11](https://github.com/FlareMind/typescript-cart/blob/a202c9e/src/weight-units/gram.ts#L11)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| weight | `number`   |  - |





**Returns:** `number`





___

<a id="converttokilogram"></a>

###  convertToKilogram

► **convertToKilogram**(weight: *`number`*): `number`



*Implementation of [IWeightUnit](../interfaces/iweightunit.md).[convertToKilogram](../interfaces/iweightunit.md#converttokilogram)*

*Overrides [WeightUnit](weightunit.md).[convertToKilogram](weightunit.md#converttokilogram)*

*Defined in [weight-units/gram.ts:7](https://github.com/FlareMind/typescript-cart/blob/a202c9e/src/weight-units/gram.ts#L7)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| weight | `number`   |  - |





**Returns:** `number`





___

<a id="format"></a>

###  format

► **format**(weight: *`number`*, unit: *[IWeightUnit](../interfaces/iweightunit.md)*, options?: *[IWeightOptions](../interfaces/iweightoptions.md)*): `string`



*Implementation of [IWeightUnit](../interfaces/iweightunit.md).[format](../interfaces/iweightunit.md#format)*

*Inherited from [WeightUnit](weightunit.md).[format](weightunit.md#format)*

*Defined in [interfaces/weight-unit.ts:22](https://github.com/FlareMind/typescript-cart/blob/a202c9e/src/interfaces/weight-unit.ts#L22)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| weight | `number`   |  - |
| unit | [IWeightUnit](../interfaces/iweightunit.md)   |  - |
| options | [IWeightOptions](../interfaces/iweightoptions.md)   |  - |





**Returns:** `string`





___

<a id="tostring"></a>

###  toString

► **toString**(): `string`



*Inherited from [WeightUnit](weightunit.md).[toString](weightunit.md#tostring)*

*Defined in [interfaces/weight-unit.ts:33](https://github.com/FlareMind/typescript-cart/blob/a202c9e/src/interfaces/weight-unit.ts#L33)*





**Returns:** `string`





___


