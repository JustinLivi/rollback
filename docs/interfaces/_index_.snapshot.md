[rollback](../README.md) > ["index"](../modules/_index_.md) > [Snapshot](../interfaces/_index_.snapshot.md)

# Interface: Snapshot

A Snapshot object Use to either rollback to the original contents or cleanup the temp dir

*__property__*: path the directory to snapshot; default cwd

*__property__*: cleanup manually cleans up the temporary directory

*__property__*: rollback asynchronously rolls back any changes in the path to the snapshot

*__property__*: rollbackSync synchronously rolls back any changes in the path to the snapshot

## Hierarchy

**Snapshot**

## Index

### Properties

* [path](_index_.snapshot.md#path)

### Methods

* [cleanup](_index_.snapshot.md#cleanup)
* [rollback](_index_.snapshot.md#rollback)
* [rollbackSync](_index_.snapshot.md#rollbacksync)

---

## Properties

<a id="path"></a>

###  path

**● path**: *`string`*

*Defined in [index.ts:56](https://github.com/JustinLivi/rollback/blob/cce2349/src/index.ts#L56)*

___

## Methods

<a id="cleanup"></a>

###  cleanup

▸ **cleanup**(): `void`

*Defined in [index.ts:57](https://github.com/JustinLivi/rollback/blob/cce2349/src/index.ts#L57)*

**Returns:** `void`

___
<a id="rollback"></a>

###  rollback

▸ **rollback**(options?: *[RollbackOptions](../modules/_index_.md#rollbackoptions)*): `Promise`<`void`>

*Defined in [index.ts:58](https://github.com/JustinLivi/rollback/blob/cce2349/src/index.ts#L58)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [RollbackOptions](../modules/_index_.md#rollbackoptions) |

**Returns:** `Promise`<`void`>

___
<a id="rollbacksync"></a>

###  rollbackSync

▸ **rollbackSync**(options?: *[RollbackOptions](../modules/_index_.md#rollbackoptions)*): `void`

*Defined in [index.ts:59](https://github.com/JustinLivi/rollback/blob/cce2349/src/index.ts#L59)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [RollbackOptions](../modules/_index_.md#rollbackoptions) |

**Returns:** `void`

___

