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

# API Documentation

[API](https://github.com/JustinLivi/rollback/blob/master/docs/README.md)

# License

Licensed under [MIT](https://github.com/JustinLivi/rollback/blob/master/LICENSE)
