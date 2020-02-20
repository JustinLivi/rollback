[rollback](../README.md) › ["directory"](../modules/_directory_.md) › [Snapshot](_directory_.snapshot.md)

# Interface: Snapshot

A Snapshot object
Use to either rollback to the original contents or cleanup the temp dir

**`property`** path the path of temporary directory

**`property`** cleanup manually cleans up the temporary directory

**`property`** rollback asynchronously rolls back any changes in the path to the snapshot

**`property`** rollbackSync synchronously rolls back any changes in the path to the snapshot

## Hierarchy

* **Snapshot**

## Index

### Properties

* [path](_directory_.snapshot.md#path)

### Methods

* [cleanup](_directory_.snapshot.md#cleanup)
* [rollback](_directory_.snapshot.md#rollback)
* [rollbackSync](_directory_.snapshot.md#rollbacksync)

## Properties

###  path

• **path**: *string*

Defined in src/directory.ts:56

## Methods

###  cleanup

▸ **cleanup**(): *void*

Defined in src/directory.ts:57

**Returns:** *void*

___

###  rollback

▸ **rollback**(`options?`: [RollbackOptions](../modules/_directory_.md#rollbackoptions)): *Promise‹void›*

Defined in src/directory.ts:58

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [RollbackOptions](../modules/_directory_.md#rollbackoptions) |

**Returns:** *Promise‹void›*

___

###  rollbackSync

▸ **rollbackSync**(`options?`: [RollbackOptions](../modules/_directory_.md#rollbackoptions)): *void*

Defined in src/directory.ts:59

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [RollbackOptions](../modules/_directory_.md#rollbackoptions) |

**Returns:** *void*
