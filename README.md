# Rollback

[![Coverage Status](https://coveralls.io/repos/gitlab/justinlivi/rollback/badge.svg?branch=master)](https://coveralls.io/gitlab/justinlivi/rollback?branch=master)

[![Alt text](https://img.youtube.com/vi/rS-HcK7d-LE/0.jpg)](https://www.youtube.com/watch?v=rS-HcK7d-LE)

Take a snapshot of a directory and then optionally rollback later.

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
