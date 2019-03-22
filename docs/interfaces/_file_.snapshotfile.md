[rollback](../README.md) > ["file"](../modules/_file_.md) > [SnapshotFile](../interfaces/_file_.snapshotfile.md)

# Interface: SnapshotFile

A Snapshot object Use to either rollback to the original contents or cleanup the temp dir

*__property__*: path the path of temporary directory

*__property__*: cleanup manually cleans up the temporary directory

*__property__*: rollback asynchronously rolls back any changes in the path to the snapshot

*__property__*: rollbackSync synchronously rolls back any changes in the path to the snapshot

## Hierarchy

**SnapshotFile**

## Index

### Properties

* [path](_file_.snapshotfile.md#path)

### Methods

* [cleanup](_file_.snapshotfile.md#cleanup)
* [rollback](_file_.snapshotfile.md#rollback)
* [rollbackSync](_file_.snapshotfile.md#rollbacksync)

---

## Properties

<a id="path"></a>

###  path

**● path**: *`string`*

*Defined in [file.ts:46](https://github.com/JustinLivi/rollback/blob/4a42b27/src/file.ts#L46)*

___

## Methods

<a id="cleanup"></a>

###  cleanup

▸ **cleanup**(): `void`

*Defined in [file.ts:47](https://github.com/JustinLivi/rollback/blob/4a42b27/src/file.ts#L47)*

**Returns:** `void`

___
<a id="rollback"></a>

###  rollback

▸ **rollback**(options?: *[RollbackFileOptions](../modules/_file_.md#rollbackfileoptions)*): `Promise`<`void`>

*Defined in [file.ts:48](https://github.com/JustinLivi/rollback/blob/4a42b27/src/file.ts#L48)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [RollbackFileOptions](../modules/_file_.md#rollbackfileoptions) |

**Returns:** `Promise`<`void`>

___
<a id="rollbacksync"></a>

###  rollbackSync

▸ **rollbackSync**(options?: *[RollbackFileOptions](../modules/_file_.md#rollbackfileoptions)*): `void`

*Defined in [file.ts:49](https://github.com/JustinLivi/rollback/blob/4a42b27/src/file.ts#L49)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [RollbackFileOptions](../modules/_file_.md#rollbackfileoptions) |

**Returns:** `void`

___

