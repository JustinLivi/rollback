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

*Defined in file.ts:43*

___

## Methods

<a id="cleanup"></a>

###  cleanup

▸ **cleanup**(): `void`

*Defined in file.ts:44*

**Returns:** `void`

___
<a id="rollback"></a>

###  rollback

▸ **rollback**(options?: *[RollbackFileOptions](../modules/_file_.md#rollbackfileoptions)*): `Promise`<`void`>

*Defined in file.ts:45*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [RollbackFileOptions](../modules/_file_.md#rollbackfileoptions) |

**Returns:** `Promise`<`void`>

___
<a id="rollbacksync"></a>

###  rollbackSync

▸ **rollbackSync**(options?: *[RollbackFileOptions](../modules/_file_.md#rollbackfileoptions)*): `void`

*Defined in file.ts:46*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [RollbackFileOptions](../modules/_file_.md#rollbackfileoptions) |

**Returns:** `void`

___

