[typescript-cart](../README.md) > [IWeightUnit](../interfaces/iweightunit.md)



# Interface: IWeightUnit

## Implemented by

* [Gram](../classes/gram.md)
* [Kilogram](../classes/kilogram.md)
* [Pound](../classes/pound.md)
* [WeightUnit](../classes/weightunit.md)


## Properties
<a id="label"></a>

###  label

**●  label**:  *`string`* 

*Defined in [interfaces/weight-unit.ts:3](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/interfaces/weight-unit.ts#L3)*





___

<a id="unitname"></a>

###  unitName

**●  unitName**:  *`string`* 

*Defined in [interfaces/weight-unit.ts:2](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/interfaces/weight-unit.ts#L2)*





___


## Methods
<a id="convertfromkilogram"></a>

###  convertFromKilogram

► **convertFromKilogram**(weight: *`number`*): `number`



*Defined in [interfaces/weight-unit.ts:5](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/interfaces/weight-unit.ts#L5)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| weight | `number`   |  - |





**Returns:** `number`





___

<a id="converttokilogram"></a>

###  convertToKilogram

► **convertToKilogram**(weight: *`number`*): `number`



*Defined in [interfaces/weight-unit.ts:6](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/interfaces/weight-unit.ts#L6)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| weight | `number`   |  - |





**Returns:** `number`





___

<a id="format"></a>

###  format

► **format**(weight: *`number`*, unit: *[IWeightUnit](iweightunit.md)*, options?: *[IWeightOptions](iweightoptions.md)*): `string`



*Defined in [interfaces/weight-unit.ts:8](https://github.com/FlareMind/typescript-cart/blob/b9c0f4d/src/interfaces/weight-unit.ts#L8)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| weight | `number`   |  - |
| unit | [IWeightUnit](iweightunit.md)   |  - |
| options | [IWeightOptions](iweightoptions.md)   |  - |





**Returns:** `string`





___


