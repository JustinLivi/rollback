// tslint:disable:no-implicit-dependencies
import 'jest-extended';

import { readFile, readFileSync, stat, statSync, writeFile, writeFileSync } from 'fs-extra';

import { createRollbackFile, createRollbackFileSync, snapshotFile, snapshotFileSync } from './file';

describe('snapshotFile', () => {
  const testfilePath = './testfiles/file/async/testfile.txt';

  it('should copy testfile to temp file', async () => {
    const snap = await snapshotFile({
      path: testfilePath
    });
    const tempfilePath = snap.path;
    const testfileStats = await stat(tempfilePath);
    expect(testfileStats.isFile()).toBe(true);
    const [testfileContents, tempfileContents] = await Promise.all(
      [testfilePath, tempfilePath].map(file => readFile(file))
    );
    expect(testfileContents).toEqual(tempfileContents);
  });

  it('should rollback changes', async () => {
    const snap = await snapshotFile({
      path: testfilePath
    });
    await writeFile(testfilePath, 'new file');
    const tempfileContents = await readFile(testfilePath);
    await snap.rollback();
    const testfileContents = await readFile(testfilePath);
    expect(testfileContents).not.toEqual(tempfileContents);
  });

  it('should accept option override', async () => {
    const snap = await snapshotFile({
      path: testfilePath,
      preserveTimestamps: true
    });
    const [testfileStats, testfileTempStats] = await Promise.all(
      [testfilePath, snap.path].map(file => stat(file))
    );
    expect(testfileStats.mtime).toEqual(testfileTempStats.mtime);
    await snap.rollback();
  });

  it('should reject on invalid path', async () => {
    await expect(snapshotFile({ path: './invalid' })).toReject();
  });
});

describe('snapshotFileSync', () => {
  const testfilePath = './testfiles/file/sync/testfile.txt';

  it('sshould copy testfile to temp file', () => {
    const snap = snapshotFileSync({
      path: testfilePath
    });
    const testfileStats = statSync(snap.path);
    expect(testfileStats.isFile()).toBe(true);
    const [testfileContents, tempfileContents] = [testfilePath, snap.path].map(file => readFileSync(file));
    expect(testfileContents).toEqual(tempfileContents);
  });

  it('should rollback changes syncronously', () => {
    const snap = snapshotFileSync({
      path: testfilePath
    });
    writeFileSync(testfilePath, 'new file');
    const tempfileContents = readFileSync(testfilePath);
    snap.rollbackSync();
    const testfileContents = readFileSync(testfilePath);
    expect(testfileContents).not.toEqual(tempfileContents);
  });

  it('should accept option override', () => {
    const snap = snapshotFileSync({
      path: testfilePath,
      preserveTimestamps: true
    });
    const testfileStats = statSync(testfilePath);
    const testfileTempStats = statSync(snap.path);
    expect(testfileStats.mtime).toEqual(testfileTempStats.mtime);
    snap.rollbackSync();
  });

  it('should throw on invalid path', () => {
    expect(() => snapshotFileSync({ path: './invalid' })).toThrow();
  });
});

describe('rollback', () => {
  it('should reject on error', () => {
    const rollback = createRollbackFile({ src: './invalid', dest: './invalid' });
    return expect(rollback()).toReject();
  });
});

describe('rollbackSync', () => {
  it('should throw on error', () => {
    const rollback = createRollbackFileSync({
      src: './invalid',
      dest: './invalid'
    });
    expect(() => rollback()).toThrow();
  });
});
