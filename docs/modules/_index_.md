[rollback](../README.md) > ["index"](../modules/_index_.md)

# External module: "index"

## Index

### Interfaces

* [Snapshot](../interfaces/_index_.snapshot.md)

### Type aliases

* [CopyOptionsProps](_index_.md#copyoptionsprops)
* [RollbackContext](_index_.md#rollbackcontext)
* [RollbackOptions](_index_.md#rollbackoptions)
* [SnapshotOptions](_index_.md#snapshotoptions)
* [SnapshotOptionsSync](_index_.md#snapshotoptionssync)

### Functions

* [createRollback](_index_.md#createrollback)
* [createRollbackSync](_index_.md#createrollbacksync)
* [snapshot](_index_.md#snapshot-1)
* [snapshotSync](_index_.md#snapshotsync)

---

## Type aliases

<a id="copyoptionsprops"></a>

###  CopyOptionsProps

**Ƭ CopyOptionsProps**: *"preserveTimestamps" \| "filter" \| "recursive"*

*Defined in [index.ts:19](https://github.com/JustinLivi/rollback/blob/cce2349/src/index.ts#L19)*

Options exposed from `fs-extra`'s `copy` and `copySync` methods

___
<a id="rollbackcontext"></a>

###  RollbackContext

**Ƭ RollbackContext**: *[RollbackOptions](_index_.md#rollbackoptions) & `object`*

*Defined in [index.ts:67](https://github.com/JustinLivi/rollback/blob/cce2349/src/index.ts#L67)*

The context necessary for a rollback

*__property__*: src the target source

*__property__*: dest the temporary copy

___
<a id="rollbackoptions"></a>

###  RollbackOptions

**Ƭ RollbackOptions**: *`Pick`<`CopyOptions`, "preserveTimestamps" \| "recursive">*

*Defined in [index.ts:42](https://github.com/JustinLivi/rollback/blob/cce2349/src/index.ts#L42)*

Options passed to `rollback` and `rollbackSync`

___
<a id="snapshotoptions"></a>

###  SnapshotOptions

**Ƭ SnapshotOptions**: *`TmpOptions` & `Pick`<`CopyOptions`, [CopyOptionsProps](_index_.md#copyoptionsprops)> & `object`*

*Defined in [index.ts:25](https://github.com/JustinLivi/rollback/blob/cce2349/src/index.ts#L25)*

Options passed to `snapshot`

*__property__*: path - a path to the directory to snapshot. Defaults to cwd

___
<a id="snapshotoptionssync"></a>

###  SnapshotOptionsSync

**Ƭ SnapshotOptionsSync**: *`TmpOptions` & `Pick`<`CopyOptionsSync`, [CopyOptionsProps](_index_.md#copyoptionsprops)> & `object`*

*Defined in [index.ts:34](https://github.com/JustinLivi/rollback/blob/cce2349/src/index.ts#L34)*

Options passed to `snapshotSync`

*__property__*: path - a path to the directory to snapshot. Defaults to cwd

___

## Functions

<a id="createrollback"></a>

### `<Const>` createRollback

▸ **createRollback**(__namedParameters: *`object`*): `(Anonymous function)`

*Defined in [index.ts:76](https://github.com/JustinLivi/rollback/blob/cce2349/src/index.ts#L76)*

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

*Defined in [index.ts:105](https://github.com/JustinLivi/rollback/blob/cce2349/src/index.ts#L105)*

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

▸ **snapshot**(__namedParameters?: *`object`*): `Promise`<[Snapshot](../interfaces/_index_.snapshot.md)>

*Defined in [index.ts:131](https://github.com/JustinLivi/rollback/blob/cce2349/src/index.ts#L131)*

Asynchronously creates a snapshot for a directory. Copies all the contents into a temporary location.

**Parameters:**

**`Default value` __namedParameters: `object`**

| Name | Type | Default value |
| ------ | ------ | ------ |
| filter | `undefined` \| `function` \| `function` | - |
| preserveTimestamps | `boolean` | false |
| recursive | `boolean` | true |
| src | `string` |  process.cwd() |
| tmpOptions | [tmpOptions]() | - |

**Returns:** `Promise`<[Snapshot](../interfaces/_index_.snapshot.md)>

___
<a id="snapshotsync"></a>

### `<Const>` snapshotSync

▸ **snapshotSync**(__namedParameters?: *`object`*): [Snapshot](../interfaces/_index_.snapshot.md)

*Defined in [index.ts:163](https://github.com/JustinLivi/rollback/blob/cce2349/src/index.ts#L163)*

Synchronously creates a snapshot for a directory. Copies all the contents into a temporary location.

**Parameters:**

**`Default value` __namedParameters: `object`**

| Name | Type | Default value |
| ------ | ------ | ------ |
| filter | `undefined` \| `function` | - |
| preserveTimestamps | `boolean` | false |
| recursive | `boolean` | true |
| src | `string` |  process.cwd() |
| tmpOptions | [tmpOptions]() | - |

**Returns:** [Snapshot](../interfaces/_index_.snapshot.md)

___

