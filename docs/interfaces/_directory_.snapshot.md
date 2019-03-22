[rollback](../README.md) > ["directory"](../modules/_directory_.md) > [Snapshot](../interfaces/_directory_.snapshot.md)

# Interface: Snapshot

A Snapshot object Use to either rollback to the original contents or cleanup the temp dir

*__property__*: path the path of temporary directory

*__property__*: cleanup manually cleans up the temporary directory

*__property__*: rollback asynchronously rolls back any changes in the path to the snapshot

*__property__*: rollbackSync synchronously rolls back any changes in the path to the snapshot

## Hierarchy

**Snapshot**

## Index

### Properties

* [path](_directory_.snapshot.md#path)

### Methods

* [cleanup](_directory_.snapshot.md#cleanup)
* [rollback](_directory_.snapshot.md#rollback)
* [rollbackSync](_directory_.snapshot.md#rollbacksync)

---

## Properties

<a id="path"></a>

###  path

**● path**: *`string`*

*Defined in [directory.ts:56](https://github.com/JustinLivi/rollback/blob/4a42b27/src/directory.ts#L56)*

___

## Methods

<a id="cleanup"></a>

###  cleanup

▸ **cleanup**(): `void`

*Defined in [directory.ts:57](https://github.com/JustinLivi/rollback/blob/4a42b27/src/directory.ts#L57)*

**Returns:** `void`

___
<a id="rollback"></a>

###  rollback

▸ **rollback**(options?: *[RollbackOptions](../modules/_directory_.md#rollbackoptions)*): `Promise`<`void`>

*Defined in [directory.ts:58](https://github.com/JustinLivi/rollback/blob/4a42b27/src/directory.ts#L58)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [RollbackOptions](../modules/_directory_.md#rollbackoptions) |

**Returns:** `Promise`<`void`>

___
<a id="rollbacksync"></a>

###  rollbackSync

▸ **rollbackSync**(options?: *[RollbackOptions](../modules/_directory_.md#rollbackoptions)*): `void`

*Defined in [directory.ts:59](https://github.com/JustinLivi/rollback/blob/4a42b27/src/directory.ts#L59)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [RollbackOptions](../modules/_directory_.md#rollbackoptions) |

**Returns:** `void`

___

