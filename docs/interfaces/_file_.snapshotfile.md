> **[rollback](../README.md)**

[Globals](../README.md) / ["file"](../modules/_file_.md) / [SnapshotFile](_file_.snapshotfile.md) /

# Interface: SnapshotFile

A Snapshot object
Use to either rollback to the original contents or cleanup the temp dir

**`property`** path the path of temporary directory

**`property`** cleanup manually cleans up the temporary directory

**`property`** rollback asynchronously rolls back any changes in the path to the snapshot

**`property`** rollbackSync synchronously rolls back any changes in the path to the snapshot

## Hierarchy

* **SnapshotFile**

### Index

#### Properties

* [path](_file_.snapshotfile.md#path)

#### Methods

* [cleanup](_file_.snapshotfile.md#cleanup)
* [rollback](_file_.snapshotfile.md#rollback)
* [rollbackSync](_file_.snapshotfile.md#rollbacksync)

## Properties

###  path

• **path**: *string*

Defined in src/file.ts:43

## Methods

###  cleanup

▸ **cleanup**(): *void*

Defined in src/file.ts:44

**Returns:** *void*

___

###  rollback

▸ **rollback**(`options?`: [RollbackFileOptions](../modules/_file_.md#rollbackfileoptions)): *`Promise<void>`*

Defined in src/file.ts:45

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [RollbackFileOptions](../modules/_file_.md#rollbackfileoptions) |

**Returns:** *`Promise<void>`*

___

###  rollbackSync

▸ **rollbackSync**(`options?`: [RollbackFileOptions](../modules/_file_.md#rollbackfileoptions)): *void*

Defined in src/file.ts:46

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [RollbackFileOptions](../modules/_file_.md#rollbackfileoptions) |

**Returns:** *void*