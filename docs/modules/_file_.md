> **[rollback](../README.md)**

[Globals](../README.md) / ["file"](_file_.md) /

# External module: "file"

### Index

#### Interfaces

* [SnapshotFile](../interfaces/_file_.snapshotfile.md)

#### Type aliases

* [CopyOptionsFileProps](_file_.md#copyoptionsfileprops)
* [RollbackFileContext](_file_.md#rollbackfilecontext)
* [RollbackFileOptions](_file_.md#rollbackfileoptions)
* [SnapshotFileOptions](_file_.md#snapshotfileoptions)
* [SnapshotFileOptionsSync](_file_.md#snapshotfileoptionssync)

#### Functions

* [createRollbackFile](_file_.md#const-createrollbackfile)
* [createRollbackFileSync](_file_.md#const-createrollbackfilesync)
* [snapshotFile](_file_.md#const-snapshotfile)
* [snapshotFileSync](_file_.md#const-snapshotfilesync)

## Type aliases

###  CopyOptionsFileProps

Ƭ **CopyOptionsFileProps**: *"preserveTimestamps" | "filter"*

Defined in file.ts:9

Options exposed from `fs-extra`'s `copy` and `copySync` methods

___

###  RollbackFileContext

Ƭ **RollbackFileContext**: *[RollbackFileOptions](_file_.md#rollbackfileoptions) & object*

Defined in file.ts:54

The context necessary for a rollback

**`property`** src the target source

**`property`** dest the temporary copy

___

###  RollbackFileOptions

Ƭ **RollbackFileOptions**: *`Pick<CopyOptions, CopyOptionsFileProps>`*

Defined in file.ts:14

Options passed to `rollback` and `rollbackSync`

___

###  SnapshotFileOptions

Ƭ **SnapshotFileOptions**: *`FileOptions` & [RollbackFileOptions](_file_.md#rollbackfileoptions) & object*

Defined in file.ts:20

Options passed to `snapshot`

**`property`** path - a path to the directory to snapshot. Defaults to cwd

___

###  SnapshotFileOptionsSync

Ƭ **SnapshotFileOptionsSync**: *`FileOptions` & `Pick<CopyOptionsSync, CopyOptionsFileProps>` & object*

Defined in file.ts:29

Options passed to `snapshotSync`

**`property`** path - a path to the directory to snapshot. Defaults to cwd

## Functions

### `Const` createRollbackFile

▸ **createRollbackFile**(`__namedParameters`: object): *`(Anonymous function)`*

Defined in file.ts:63

Creates a `rollback` closure

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`dest` | string |
`preserveTimestampsDefault` | undefined \| false \| true |
`src` | string |

**Returns:** *`(Anonymous function)`*

___

### `Const` createRollbackFileSync

▸ **createRollbackFileSync**(`__namedParameters`: object): *`(Anonymous function)`*

Defined in file.ts:86

Creates a `rollbackSync` closure

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`dest` | string |
`preserveTimestampsDefault` | undefined \| false \| true |
`src` | string |

**Returns:** *`(Anonymous function)`*

___

### `Const` snapshotFile

▸ **snapshotFile**(`__namedParameters`: object): *`Promise<SnapshotFile>`*

Defined in file.ts:106

Asynchronously creates a snapshot for a directory.
Copies all the contents into a temporary location.

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`filter` | undefined \| function \| function | - |
`preserveTimestamps` | boolean | false |
`src` | string | - |
`tmpOptions` | [tmpOptions]() | - |

**Returns:** *`Promise<SnapshotFile>`*

___

### `Const` snapshotFileSync

▸ **snapshotFileSync**(`__namedParameters`: object): *[SnapshotFile](../interfaces/_file_.snapshotfile.md)*

Defined in file.ts:136

Synchronously creates a snapshot for a directory.
Copies all the contents into a temporary location.

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`filter` | undefined \| function | - |
`preserveTimestamps` | boolean | false |
`src` | string | - |
`tmpOptions` | [tmpOptions]() | - |

**Returns:** *[SnapshotFile](../interfaces/_file_.snapshotfile.md)*