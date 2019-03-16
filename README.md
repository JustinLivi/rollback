# Rollback

[![Gitlab pipeline status](https://img.shields.io/gitlab/pipeline/justinlivi/rollback.svg)](https://gitlab.com/justinlivi/rollback/pipelines)
[![Coverage Status](https://coveralls.io/repos/gitlab/justinlivi/rollback/badge.svg?branch=master)](https://coveralls.io/gitlab/justinlivi/rollback?branch=master)
[![David](https://img.shields.io/david/justinlivi/rollback.svg)](https://github.com/JustinLivi/rollback/blob/master/package.json)
[![NPM](https://img.shields.io/npm/l/rollback.svg)](https://www.npmjs.com/package/rollback)
[![node](https://img.shields.io/node/v/rollback.svg)](https://github.com/JustinLivi/rollback/blob/master/package.json)
[![npm](https://img.shields.io/npm/v/rollback.svg)](https://www.npmjs.com/package/rollback)

> Rollback the rock!

[![Alt text](https://i.imgur.com/nirHaAb.gif)](https://www.youtube.com/watch?v=rS-HcK7d-LE)

Take a snapshot of a directory and then optionally rollback changes at a later time.

# Installation

`npm i -s rollback`

Both typescript and javascript support come out of the box.

# Basic Usage

Asynchronous API:

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

Synchronous API:

```typescript
import { snapshotSync } from 'rollback';
import { writeFileSync } from 'fs';

const snap = snapshotSync({
  path: '/some/directory'
});
writeFileSync('/some/directory/myFile', 'some updates');
snap.rollbackSync();
```

# Advanced Usage

Rollback exposes two base methods: `snapshot` and `snapshotSync`.

The only required parameter is the `path` parameter which is a string representing the path to the directory to snapshot.

Both methods accept all configuration options exposed by [tmp](https://www.npmjs.com/package/tmp#options).

Additionally the following options from [fs-extra's copy](https://github.com/jprichardson/node-fs-extra/blob/master/docs/copy.md#copysrc-dest-options-callback) are supported:

`preserveTimestamps, filter, recursive`

`snapshot` returns a Promise which resolves with a `Snapshot` object and `snapshotSync` returns a `Snapshot` directly.

## Snapshot

A `Snapshot` object has the following properties:

| property | type | description |
|----------|------|-------------|
| `path` | `string` | the path of the temporary directory |
| `cleanup` | `() => void` | manually cleans up the temporary directory |
| `rollback` | `(options?: RollbackOptions) => Promise<void>` | asynchronously rolls back any changes to the snapshot |
| `rollbackSync` | `(options?: RollbackOptions) => void` | synchronously rolls back any changes to the snapshot |

`RollbackOptions` takes the following form:

```typescript
interface RollbackOptions {
  preserveTimestamps?: boolean;
  recursive?: boolean;
}
```

The default for rollback options is whatever was specified in the `snapshot` or `snapshotSync` invocation that generated the `Snapshot` object.

# API Documentation

[API](https://github.com/JustinLivi/rollback/blob/master/docs/README.md)

# License

Licensed under [MIT](https://github.com/JustinLivi/rollback/blob/master/LICENSE)
