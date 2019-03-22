[rollback](../README.md) > ["directory"](../modules/_directory_.md)

# External module: "directory"

## Index

### Interfaces

* [Snapshot](../interfaces/_directory_.snapshot.md)

### Type aliases

* [CopyOptionsProps](_directory_.md#copyoptionsprops)
* [RollbackContext](_directory_.md#rollbackcontext)
* [RollbackOptions](_directory_.md#rollbackoptions)
* [SnapshotOptions](_directory_.md#snapshotoptions)
* [SnapshotOptionsSync](_directory_.md#snapshotoptionssync)

### Functions

* [createRollback](_directory_.md#createrollback)
* [createRollbackSync](_directory_.md#createrollbacksync)
* [snapshot](_directory_.md#snapshot-1)
* [snapshotSync](_directory_.md#snapshotsync)

---

## Type aliases

<a id="copyoptionsprops"></a>

###  CopyOptionsProps

**Ƭ CopyOptionsProps**: *"preserveTimestamps" \| "filter" \| "recursive"*

*Defined in [directory.ts:19](https://github.com/JustinLivi/rollback/blob/4a42b27/src/directory.ts#L19)*

Options exposed from `fs-extra`'s `copy` and `copySync` methods

___
<a id="rollbackcontext"></a>

###  RollbackContext

**Ƭ RollbackContext**: *[RollbackOptions](_directory_.md#rollbackoptions) & `object`*

*Defined in [directory.ts:67](https://github.com/JustinLivi/rollback/blob/4a42b27/src/directory.ts#L67)*

The context necessary for a rollback

*__property__*: src the target source

*__property__*: dest the temporary copy

___
<a id="rollbackoptions"></a>

###  RollbackOptions

**Ƭ RollbackOptions**: *`Pick`<`CopyOptions`, "preserveTimestamps" \| "recursive">*

*Defined in [directory.ts:42](https://github.com/JustinLivi/rollback/blob/4a42b27/src/directory.ts#L42)*

Options passed to `rollback` and `rollbackSync`

___
<a id="snapshotoptions"></a>

###  SnapshotOptions

**Ƭ SnapshotOptions**: *`TmpOptions` & `Pick`<`CopyOptions`, [CopyOptionsProps](_directory_.md#copyoptionsprops)> & `object`*

*Defined in [directory.ts:25](https://github.com/JustinLivi/rollback/blob/4a42b27/src/directory.ts#L25)*

Options passed to `snapshot`

*__property__*: path - a path to the directory to snapshot. Defaults to cwd

___
<a id="snapshotoptionssync"></a>

###  SnapshotOptionsSync

**Ƭ SnapshotOptionsSync**: *`TmpOptions` & `Pick`<`CopyOptionsSync`, [CopyOptionsProps](_directory_.md#copyoptionsprops)> & `object`*

*Defined in [directory.ts:34](https://github.com/JustinLivi/rollback/blob/4a42b27/src/directory.ts#L34)*

Options passed to `snapshotSync`

*__property__*: path - a path to the directory to snapshot. Defaults to cwd

___

## Functions

<a id="createrollback"></a>

### `<Const>` createRollback

▸ **createRollback**(__namedParameters: *`object`*): `(Anonymous function)`

*Defined in [directory.ts:76](https://github.com/JustinLivi/rollback/blob/4a42b27/src/directory.ts#L76)*

Creates a `rollback` closure

**Parameters:**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| dest | `string` |
| preserveTimestampsDefault | `undefined` \| `false` \| `true` |
| recursiveDefault | `undefined` \| `false` \| `true` |
| src | `string` |

**Returns:** `(Anonymous function)`

___
<a id="createrollbacksync"></a>

### `<Const>` createRollbackSync

▸ **createRollbackSync**(__namedParameters: *`object`*): `(Anonymous function)`

*Defined in [directory.ts:105](https://github.com/JustinLivi/rollback/blob/4a42b27/src/directory.ts#L105)*

Creates a `rollbackSync` closure

**Parameters:**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| dest | `string` |
| preserveTimestampsDefault | `undefined` \| `false` \| `true` |
| recursiveDefault | `undefined` \| `false` \| `true` |
| src | `string` |

**Returns:** `(Anonymous function)`

___
<a id="snapshot-1"></a>

### `<Const>` snapshot

▸ **snapshot**(__namedParameters: *`object`*): `Promise`<[Snapshot](../interfaces/_directory_.snapshot.md)>

*Defined in [directory.ts:131](https://github.com/JustinLivi/rollback/blob/4a42b27/src/directory.ts#L131)*

Asynchronously creates a snapshot for a directory. Copies all the contents into a temporary location.

**Parameters:**

**__namedParameters: `object`**

| Name | Type | Default value |
| ------ | ------ | ------ |
| filter | `undefined` \| `function` \| `function` | - |
| preserveTimestamps | `boolean` | false |
| recursive | `boolean` | true |
| src | `string` | - |
| tmpOptions | [tmpOptions]() | - |

**Returns:** `Promise`<[Snapshot](../interfaces/_directory_.snapshot.md)>

___
<a id="snapshotsync"></a>

### `<Const>` snapshotSync

▸ **snapshotSync**(__namedParameters: *`object`*): [Snapshot](../interfaces/_directory_.snapshot.md)

*Defined in [directory.ts:163](https://github.com/JustinLivi/rollback/blob/4a42b27/src/directory.ts#L163)*

Synchronously creates a snapshot for a directory. Copies all the contents into a temporary location.

**Parameters:**

**__namedParameters: `object`**

| Name | Type | Default value |
| ------ | ------ | ------ |
| filter | `undefined` \| `function` | - |
| preserveTimestamps | `boolean` | false |
| recursive | `boolean` | true |
| src | `string` | - |
| tmpOptions | [tmpOptions]() | - |

**Returns:** [Snapshot](../interfaces/_directory_.snapshot.md)

___

