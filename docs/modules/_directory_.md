> **[rollback](../README.md)**

[Globals](../README.md) / ["directory"](_directory_.md) /

# External module: "directory"

### Index

#### Interfaces

* [Snapshot](../interfaces/_directory_.snapshot.md)

#### Type aliases

* [CopyOptionsProps](_directory_.md#copyoptionsprops)
* [RollbackContext](_directory_.md#rollbackcontext)
* [RollbackOptions](_directory_.md#rollbackoptions)
* [SnapshotOptions](_directory_.md#snapshotoptions)
* [SnapshotOptionsSync](_directory_.md#snapshotoptionssync)

#### Functions

* [createRollback](_directory_.md#const-createrollback)
* [createRollbackSync](_directory_.md#const-createrollbacksync)
* [snapshot](_directory_.md#const-snapshot)
* [snapshotSync](_directory_.md#const-snapshotsync)

## Type aliases

###  CopyOptionsProps

Ƭ **CopyOptionsProps**: *"preserveTimestamps" | "filter" | "recursive"*

Defined in src/directory.ts:19

Options exposed from `fs-extra`'s `copy` and `copySync` methods

___

###  RollbackContext

Ƭ **RollbackContext**: *[RollbackOptions](_directory_.md#rollbackoptions) & object*

Defined in src/directory.ts:67

The context necessary for a rollback

**`property`** src the target source

**`property`** dest the temporary copy

___

###  RollbackOptions

Ƭ **RollbackOptions**: *`Pick<CopyOptions, "preserveTimestamps" | "recursive">`*

Defined in src/directory.ts:42

Options passed to `rollback` and `rollbackSync`

___

###  SnapshotOptions

Ƭ **SnapshotOptions**: *`DirOptions` & `Pick<CopyOptions, CopyOptionsProps>` & object*

Defined in src/directory.ts:25

Options passed to `snapshot`

**`property`** path - a path to the directory to snapshot. Defaults to cwd

___

###  SnapshotOptionsSync

Ƭ **SnapshotOptionsSync**: *`DirOptions` & `Pick<CopyOptionsSync, CopyOptionsProps>` & object*

Defined in src/directory.ts:34

Options passed to `snapshotSync`

**`property`** path - a path to the directory to snapshot. Defaults to cwd

## Functions

### `Const` createRollback

▸ **createRollback**(`__namedParameters`: object): *`(Anonymous function)`*

Defined in src/directory.ts:76

Creates a `rollback` closure

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`dest` | string |
`preserveTimestampsDefault` | undefined \| false \| true |
`recursiveDefault` | undefined \| false \| true |
`src` | string |

**Returns:** *`(Anonymous function)`*

___

### `Const` createRollbackSync

▸ **createRollbackSync**(`__namedParameters`: object): *`(Anonymous function)`*

Defined in src/directory.ts:105

Creates a `rollbackSync` closure

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`dest` | string |
`preserveTimestampsDefault` | undefined \| false \| true |
`recursiveDefault` | undefined \| false \| true |
`src` | string |

**Returns:** *`(Anonymous function)`*

___

### `Const` snapshot

▸ **snapshot**(`__namedParameters`: object): *`Promise<Snapshot>`*

Defined in src/directory.ts:131

Asynchronously creates a snapshot for a directory.
Copies all the contents into a temporary location.

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`filter` | undefined \| function \| function | - |
`preserveTimestamps` | boolean | false |
`recursive` | boolean | true |
`src` | string | - |
`tmpOptions` | [tmpOptions]() | - |

**Returns:** *`Promise<Snapshot>`*

___

### `Const` snapshotSync

▸ **snapshotSync**(`__namedParameters`: object): *[Snapshot](../interfaces/_directory_.snapshot.md)*

Defined in src/directory.ts:163

Synchronously creates a snapshot for a directory.
Copies all the contents into a temporary location.

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`filter` | undefined \| function | - |
`preserveTimestamps` | boolean | false |
`recursive` | boolean | true |
`src` | string | - |
`tmpOptions` | [tmpOptions]() | - |

**Returns:** *[Snapshot](../interfaces/_directory_.snapshot.md)*