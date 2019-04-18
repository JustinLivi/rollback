[rollback](../README.md) > ["file"](../modules/_file_.md)

# External module: "file"

## Index

### Interfaces

* [SnapshotFile](../interfaces/_file_.snapshotfile.md)

### Type aliases

* [CopyOptionsFileProps](_file_.md#copyoptionsfileprops)
* [RollbackFileContext](_file_.md#rollbackfilecontext)
* [RollbackFileOptions](_file_.md#rollbackfileoptions)
* [SnapshotFileOptions](_file_.md#snapshotfileoptions)
* [SnapshotFileOptionsSync](_file_.md#snapshotfileoptionssync)

### Functions

* [createRollbackFile](_file_.md#createrollbackfile)
* [createRollbackFileSync](_file_.md#createrollbackfilesync)
* [snapshotFile](_file_.md#snapshotfile-1)
* [snapshotFileSync](_file_.md#snapshotfilesync)

---

## Type aliases

<a id="copyoptionsfileprops"></a>

###  CopyOptionsFileProps

**Ƭ CopyOptionsFileProps**: *"preserveTimestamps" \| "filter"*

*Defined in [file.ts:9](https://github.com/JustinLivi/rollback/blob/4a42b27/src/file.ts#L9)*

Options exposed from `fs-extra`'s `copy` and `copySync` methods

___
<a id="rollbackfilecontext"></a>

###  RollbackFileContext

**Ƭ RollbackFileContext**: *[RollbackFileOptions](_file_.md#rollbackfileoptions) & `object`*

*Defined in [file.ts:57](https://github.com/JustinLivi/rollback/blob/4a42b27/src/file.ts#L57)*

The context necessary for a rollback

*__property__*: src the target source

*__property__*: dest the temporary copy

___
<a id="rollbackfileoptions"></a>

###  RollbackFileOptions

**Ƭ RollbackFileOptions**: *`Pick`<`CopyOptions`, [CopyOptionsFileProps](_file_.md#copyoptionsfileprops)>*

*Defined in [file.ts:14](https://github.com/JustinLivi/rollback/blob/4a42b27/src/file.ts#L14)*

Options passed to `rollback` and `rollbackSync`

___
<a id="snapshotfileoptions"></a>

###  SnapshotFileOptions

**Ƭ SnapshotFileOptions**: *`TmpOptions` & [RollbackFileOptions](_file_.md#rollbackfileoptions) & `object`*

*Defined in [file.ts:23](https://github.com/JustinLivi/rollback/blob/4a42b27/src/file.ts#L23)*

Options passed to `snapshot`

*__property__*: path - a path to the directory to snapshot. Defaults to cwd

___
<a id="snapshotfileoptionssync"></a>

###  SnapshotFileOptionsSync

**Ƭ SnapshotFileOptionsSync**: *`TmpOptions` & `Pick`<`CopyOptionsSync`, [CopyOptionsFileProps](_file_.md#copyoptionsfileprops)> & `object`*

*Defined in [file.ts:32](https://github.com/JustinLivi/rollback/blob/4a42b27/src/file.ts#L32)*

Options passed to `snapshotSync`

*__property__*: path - a path to the directory to snapshot. Defaults to cwd

___

## Functions

<a id="createrollbackfile"></a>

### `<Const>` createRollbackFile

▸ **createRollbackFile**(__namedParameters: *`object`*): `(Anonymous function)`

*Defined in [file.ts:66](https://github.com/JustinLivi/rollback/blob/4a42b27/src/file.ts#L66)*

Creates a `rollback` closure

**Parameters:**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| dest | `string` |
| preserveTimestampsDefault | `undefined` \| `false` \| `true` |
| src | `string` |

**Returns:** `(Anonymous function)`

___
<a id="createrollbackfilesync"></a>

### `<Const>` createRollbackFileSync

▸ **createRollbackFileSync**(__namedParameters: *`object`*): `(Anonymous function)`

*Defined in [file.ts:91](https://github.com/JustinLivi/rollback/blob/4a42b27/src/file.ts#L91)*

Creates a `rollbackSync` closure

**Parameters:**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| dest | `string` |
| preserveTimestampsDefault | `undefined` \| `false` \| `true` |
| src | `string` |

**Returns:** `(Anonymous function)`

___
<a id="snapshotfile-1"></a>

### `<Const>` snapshotFile

▸ **snapshotFile**(__namedParameters: *`object`*): `Promise`<[SnapshotFile](../interfaces/_file_.snapshotfile.md)>

*Defined in [file.ts:113](https://github.com/JustinLivi/rollback/blob/4a42b27/src/file.ts#L113)*

Asynchronously creates a snapshot for a directory. Copies all the contents into a temporary location.

**Parameters:**

**__namedParameters: `object`**

| Name | Type | Default value |
| ------ | ------ | ------ |
| filter | `undefined` \| `function` \| `function` | - |
| preserveTimestamps | `boolean` | false |
| src | `string` | - |
| tmpOptions | [tmpOptions]() | - |

**Returns:** `Promise`<[SnapshotFile](../interfaces/_file_.snapshotfile.md)>

___
<a id="snapshotfilesync"></a>

### `<Const>` snapshotFileSync

▸ **snapshotFileSync**(__namedParameters: *`object`*): [SnapshotFile](../interfaces/_file_.snapshotfile.md)

*Defined in [file.ts:143](https://github.com/JustinLivi/rollback/blob/4a42b27/src/file.ts#L143)*

Synchronously creates a snapshot for a directory. Copies all the contents into a temporary location.

**Parameters:**

**__namedParameters: `object`**

| Name | Type | Default value |
| ------ | ------ | ------ |
| filter | `undefined` \| `function` | - |
| preserveTimestamps | `boolean` | false |
| src | `string` | - |
| tmpOptions | [tmpOptions]() | - |

**Returns:** [SnapshotFile](../interfaces/_file_.snapshotfile.md)

___
