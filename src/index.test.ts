// tslint:disable:no-implicit-dependencies
import { pathExists, pathExistsSync, readFile, readFileSync, stat, statSync, writeFile, writeFileSync } from 'fs-extra';
import { resolve } from 'path';

import { snapshot, snapshotSync } from '.';

const testfile = './testfile.txt';

describe('snapshot', () => {
  const testfilePath = './testfiles/async/testfile.txt';
  const testdir = './testfiles/async';

  it('should copy contents of testfiles into tmp dir', async () => {
    const snap = await snapshot({
      path: testdir
    });
    const tmpDirStats = await stat(snap.path);
    expect(tmpDirStats.isDirectory()).toBe(true);
    const tempfilePath = resolve(snap.path, testfile);
    const testfileStats = await stat(tempfilePath);
    expect(testfileStats.isFile()).toBe(true);
    const [testfileContents, tempfileContents] = await Promise.all(
      [testfilePath, tempfilePath].map(file => readFile(file))
    );
    expect(testfileContents).toEqual(tempfileContents);
  });

  it('should rollback changes', async () => {
    const snap = await snapshot({
      path: testdir
    });
    const testfile2 = './testfiles/async/testfile2.txt';
    await writeFile(testfile2, 'new file');
    const testfileStats = await stat(testfile2);
    expect(testfileStats.isFile()).toBe(true);
    await snap.rollback();
    expect(await pathExists(testfile2)).toBe(false);
  });
});

describe('snapshotSync', () => {
  const testfilePath = './testfiles/sync/testfile.txt';
  const testdir = './testfiles/sync';

  it('should copy contents of testfiles into tmp dir', () => {
    const snap = snapshotSync({
      path: testdir
    });
    const tmpDirStats = statSync(snap.path);
    expect(tmpDirStats.isDirectory()).toBe(true);
    const tempfilePath = resolve(snap.path, testfile);
    const testfileStats = statSync(tempfilePath);
    expect(testfileStats.isFile()).toBe(true);
    expect(readFileSync(testfilePath)).toEqual(readFileSync(tempfilePath));
  });

  it('should rollback changes syncronously', () => {
    const snap = snapshotSync({
      path: testdir
    });
    const testfile2 = './testfiles/sync/testfile2.txt';
    writeFileSync(testfile2, 'new file');
    const testfileStats = statSync(testfile2);
    expect(testfileStats.isFile()).toBe(true);
    snap.rollbackSync();
    expect(pathExistsSync(testfile2)).toBe(false);
  });
});
