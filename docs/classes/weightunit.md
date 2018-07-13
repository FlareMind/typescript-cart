[typescript-cart](../README.md) > [WeightUnit](../classes/weightunit.md)



# Class: WeightUnit

## Hierarchy

**WeightUnit**

↳  [Kilogram](kilogram.md)




↳  [Gram](gram.md)




↳  [Pound](pound.md)








## Implements

* [IWeightUnit](../interfaces/iweightunit.md)

## Index

### Properties

* [label](weightunit.md#label)
* [unitName](weightunit.md#unitname)


### Methods

* [convertFromKilogram](weightunit.md#convertfromkilogram)
* [convertToKilogram](weightunit.md#converttokilogram)
* [format](weightunit.md#format)
* [toString](weightunit.md#tostring)



---
## Properties
<a id="label"></a>

### «Abstract» label

**●  label**:  *`string`* 

*Implementation of [IWeightUnit](../interfaces/iweightunit.md).[label](../interfaces/iweightunit.md#label)*

*Defined in [interfaces/weight-unit.ts:17](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/interfaces/weight-unit.ts#L17)*





___

<a id="unitname"></a>

### «Abstract» unitName

**●  unitName**:  *`string`* 

*Implementation of [IWeightUnit](../interfaces/iweightunit.md).[unitName](../interfaces/iweightunit.md#unitname)*

*Defined in [interfaces/weight-unit.ts:16](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/interfaces/weight-unit.ts#L16)*





___


## Methods
<a id="convertfromkilogram"></a>

### «Abstract» convertFromKilogram

► **convertFromKilogram**(weight: *`number`*): `number`



*Implementation of [IWeightUnit](../interfaces/iweightunit.md).[convertFromKilogram](../interfaces/iweightunit.md#convertfromkilogram)*

*Defined in [interfaces/weight-unit.ts:20](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/interfaces/weight-unit.ts#L20)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| weight | `number`   |  - |





**Returns:** `number`





___

<a id="converttokilogram"></a>

### «Abstract» convertToKilogram

► **convertToKilogram**(weight: *`number`*): `number`



*Implementation of [IWeightUnit](../interfaces/iweightunit.md).[convertToKilogram](../interfaces/iweightunit.md#converttokilogram)*

*Defined in [interfaces/weight-unit.ts:19](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/interfaces/weight-unit.ts#L19)*



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

*Defined in [interfaces/weight-unit.ts:22](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/interfaces/weight-unit.ts#L22)*



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



*Defined in [interfaces/weight-unit.ts:33](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/interfaces/weight-unit.ts#L33)*





**Returns:** `string`





___


