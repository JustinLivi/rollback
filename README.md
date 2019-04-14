# Rollback

[![Gitlab pipeline status](https://img.shields.io/gitlab/pipeline/justinlivi/rollback.svg)](https://gitlab.com/justinlivi/rollback/pipelines)
[![Coverage Status](https://coveralls.io/repos/gitlab/justinlivi/rollback/badge.svg?branch=master&kill_cache=1)](https://coveralls.io/gitlab/justinlivi/rollback?branch=master)
[![David](https://img.shields.io/david/justinlivi/rollback.svg)](https://github.com/JustinLivi/rollback/blob/master/package.json)
[![NPM](https://img.shields.io/npm/l/rollback.svg)](https://www.npmjs.com/package/rollback)
[![node](https://img.shields.io/node/v/rollback.svg)](https://github.com/JustinLivi/rollback/blob/master/package.json)
[![npm](https://img.shields.io/npm/v/rollback.svg)](https://www.npmjs.com/package/rollback)
[![Greenkeeper badge](https://badges.greenkeeper.io/JustinLivi/rollback.svg)](https://greenkeeper.io/)
[![npm type definitions](https://img.shields.io/npm/types/rollback.svg)](https://github.com/JustinLivi/rollback/blob/master/package.json)

> Rollback the rock!

[![Alt text](https://i.imgur.com/nirHaAb.gif)](https://www.youtube.com/watch?v=rS-HcK7d-LE) 

Undo pesky file system mutations with ease.

# Installation

`npm i -s rollback`

Both typescript and javascript support come out of the box.

# Basic Usage

## Asynchronous API

Take a snapshot of a directory.

```typescript
import { snapshot } from 'rollback';
import { writeFileSync } from 'fs';

snapshot({
  path: '/some/directory'
}).then(snap => {
  // make some changes
  writeFileSync('/some/directory/myFile', 'some updates');
  // then rollback all the changes
  return snap.rollback();
});
```

Take a snapshot of a file.

```typescript
import { snapshotFile } from 'rollback';
import { writeFileSync } from 'fs';

snapshotFile({
  path: '/some/file.txt'
}).then(snap => {
  // make some changes
  writeFileSync('/some/file.txt', 'some updates');
  // then rollback all the changes
  return snap.rollback();
});
```

## Synchronous API

Take a snapshot of a directory.

```typescript
import { snapshotSync } from 'rollback';
import { writeFileSync } from 'fs';

const snap = snapshotSync({
  path: '/some/directory'
});
writeFileSync('/some/directory/myFile', 'some updates');
snap.rollbackSync();
```

Take a snapshot of a file.

```typescript
import { snapshotFileSync } from 'rollback';
import { writeFileSync } from 'fs';

const snap = snapshotFileSync({
  path: '/some/file.txt'
});
writeFileSync('/some/file.txt', 'some updates');
snap.rollbackSync();
```

# Advanced Usage

Rollback exposes four base methods: `snapshot`, `snapshotSync`, `snapshotFile`, and `snapshotFileSync`.

All methods accept all configuration options exposed by [tmp](https://www.npmjs.com/package/tmp#options).

Additionally the following options from [fs-extra's copy](https://github.com/jprichardson/node-fs-extra/blob/master/docs/copy.md#copysrc-dest-options-callback) are supported:

`preserveTimestamps, filter, recursive` (`recursive` is only supported for `snapshot` and `snapshotSync`)

`snapshot` and `snapshotFile` return a Promise which resolves with a `Snapshot` object.

`snapshotSync` and `snapshotFileSync` return a `Snapshot` directly.

## Snapshot

A `Snapshot` object has the following properties:

| property       | type                                           | description                                           |
| -------------- | ---------------------------------------------- | ----------------------------------------------------- |
| `path`         | `string`                                       | the path of the temporary directory                   |
| `cleanup`      | `() => void`                                   | manually cleans up the temporary directory            |
| `rollback`     | `(options?: RollbackOptions) => Promise<void>` | asynchronously rolls back any changes to the snapshot |
| `rollbackSync` | `(options?: RollbackOptions) => void`          | synchronously rolls back any changes to the snapshot  |

`RollbackOptions` takes the following form:

```typescript
interface RollbackOptions {
  preserveTimestamps?: boolean;
  recursive?: boolean; // only supported if the snapshot is of a directory 
}
```

The default for rollback options is whatever was specified in the `snapshot`, `snapshotSync`, `snapshotFile`, or `snapshotFileSync` invocation that generated the `Snapshot` object.

# API Documentation

[API](https://github.com/JustinLivi/rollback/blob/master/docs/README.md)

# License

Licensed under [MIT](https://github.com/JustinLivi/rollback/blob/master/LICENSE)
