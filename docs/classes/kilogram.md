[smart-cart](../README.md) > [Kilogram](../classes/kilogram.md)



# Class: Kilogram

## Hierarchy


 [WeightUnit](weightunit.md)

**↳ Kilogram**







## Implements

* [IWeightUnit](../interfaces/iweightunit.md)

## Index

### Properties

* [label](kilogram.md#label)
* [unitName](kilogram.md#unitname)


### Methods

* [convertFromKilogram](kilogram.md#convertfromkilogram)
* [convertToKilogram](kilogram.md#converttokilogram)
* [format](kilogram.md#format)
* [toString](kilogram.md#tostring)



---
## Properties
<a id="label"></a>

###  label

**●  label**:  *`string`*  = "kg"

*Implementation of [IWeightUnit](../interfaces/iweightunit.md).[label](../interfaces/iweightunit.md#label)*

*Overrides [WeightUnit](weightunit.md).[label](weightunit.md#label)*

*Defined in [weight-units/kilogram.ts:6](https://github.com/FlareMind/smart-cart/blob/a83b470/src/weight-units/kilogram.ts#L6)*





___

<a id="unitname"></a>

###  unitName

**●  unitName**:  *`string`*  = "Kilogram"

*Implementation of [IWeightUnit](../interfaces/iweightunit.md).[unitName](../interfaces/iweightunit.md#unitname)*

*Overrides [WeightUnit](weightunit.md).[unitName](weightunit.md#unitname)*

*Defined in [weight-units/kilogram.ts:5](https://github.com/FlareMind/smart-cart/blob/a83b470/src/weight-units/kilogram.ts#L5)*





___


## Methods
<a id="convertfromkilogram"></a>

###  convertFromKilogram

► **convertFromKilogram**(weight: *`number`*): `number`



*Implementation of [IWeightUnit](../interfaces/iweightunit.md).[convertFromKilogram](../interfaces/iweightunit.md#convertfromkilogram)*

*Overrides [WeightUnit](weightunit.md).[convertFromKilogram](weightunit.md#convertfromkilogram)*

*Defined in [weight-units/kilogram.ts:12](https://github.com/FlareMind/smart-cart/blob/a83b470/src/weight-units/kilogram.ts#L12)*



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

*Defined in [weight-units/kilogram.ts:8](https://github.com/FlareMind/smart-cart/blob/a83b470/src/weight-units/kilogram.ts#L8)*



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

*Defined in [interfaces/weight-unit.ts:22](https://github.com/FlareMind/smart-cart/blob/a83b470/src/interfaces/weight-unit.ts#L22)*



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

*Defined in [interfaces/weight-unit.ts:33](https://github.com/FlareMind/smart-cart/blob/a83b470/src/interfaces/weight-unit.ts#L33)*





**Returns:** `string`





___


