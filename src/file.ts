// tslint:disable:no-implicit-dependencies
import { copy, CopyOptions, CopyOptionsSync, copySync, pathExists, pathExistsSync } from 'fs-extra';
import { Options as TmpOptions } from 'tmp';
import { file, fileSync } from 'tmp-promise';

/**
 * Options exposed from `fs-extra`'s `copy` and `copySync` methods
 */
export type CopyOptionsFileProps = 'preserveTimestamps' | 'filter';

/**
 * Options passed to `rollback` and `rollbackSync`
 */
export type RollbackFileOptions = Pick<
  CopyOptions,
  CopyOptionsFileProps
>;

/**
 * Options passed to `snapshot`
 * @property path - a path to the directory to snapshot. Defaults to cwd
 */
export type SnapshotFileOptions = TmpOptions &
  RollbackFileOptions & {
    path: string;
  };

/**
 * Options passed to `snapshotSync`
 * @property path - a path to the directory to snapshot. Defaults to cwd
 */
export type SnapshotFileOptionsSync = TmpOptions &
  Pick<CopyOptionsSync, CopyOptionsFileProps> & {
    path: string;
  };

/**
 * A Snapshot object
 * Use to either rollback to the original contents or cleanup the temp dir
 * @property path the path of temporary directory
 * @property cleanup manually cleans up the temporary directory
 * @property rollback asynchronously rolls back any changes in the path to the snapshot
 * @property rollbackSync synchronously rolls back any changes in the path to the snapshot
 */
export interface SnapshotFile {
  path: string;
  cleanup(): void;
  rollback(options?: RollbackFileOptions): Promise<void>;
  rollbackSync(options?: RollbackFileOptions): void;
}

/**
 * The context necessary for a rollback
 * @property src the target source
 * @property dest the temporary copy
 */
export type RollbackFileContext = RollbackFileOptions & {
  src: string;
  dest: string;
};

/**
 * Creates a `rollback` closure
 * @param rollbackContext the context for the rollback closure
 */
export const createRollbackFile = ({
  src,
  dest,
  preserveTimestamps: preserveTimestampsDefault
}: RollbackFileContext) => async (
  {
    preserveTimestamps = preserveTimestampsDefault
  }: RollbackFileOptions = {
    preserveTimestamps: preserveTimestampsDefault
  }
) => {
  try {
    if (!(await pathExists(dest))) {
      throw new Error(`path ${dest} does not exist`);
    }
    await copy(dest, src, { preserveTimestamps });
  } catch (error) {
    throw error;
  }
};

/**
 * Creates a `rollbackSync` closure
 * @param rollbackContext the context for the rollback closure
 */
export const createRollbackFileSync = ({
  src,
  dest,
  preserveTimestamps: preserveTimestampsDefault
}: RollbackFileContext) => (
  {
    preserveTimestamps = preserveTimestampsDefault
  }: RollbackFileOptions = {
    preserveTimestamps: preserveTimestampsDefault
  }
) => {
  if (!pathExistsSync(dest)) {
    throw new Error(`path ${dest} does not exist`);
  }
  copySync(dest, src, { preserveTimestamps });
};

/**
 * Asynchronously creates a snapshot for a directory.
 * Copies all the contents into a temporary location.
 * @param options
 */
export const snapshotFile = async ({
  path: src,
  preserveTimestamps = false,
  filter,
  ...tmpOptions
}: SnapshotFileOptions): Promise<SnapshotFile> => {
  try {
    const directory = await file(tmpOptions);
    const { path: dest } = directory;
    await copy(src, dest, { preserveTimestamps, filter });
    const rollbackContext = {
      preserveTimestamps,
      src,
      dest
    };
    return {
      ...directory,
      rollback: createRollbackFile(rollbackContext),
      rollbackSync: createRollbackFileSync(rollbackContext)
    };
  } catch (error) {
    throw error;
  }
};

/**
 * Synchronously creates a snapshot for a directory.
 * Copies all the contents into a temporary location.
 * @param options
 */
export const snapshotFileSync = ({
  path: src,
  preserveTimestamps = false,
  filter,
  ...tmpOptions
}: SnapshotFileOptionsSync): SnapshotFile => {
  const directory = fileSync(tmpOptions);
  const { name: dest, removeCallback } = directory;
  copySync(src, dest, { preserveTimestamps, filter });
  const rollbackContext = {
    preserveTimestamps,
    src,
    dest
  };
  return {
    path: dest,
    cleanup: removeCallback,
    rollback: createRollbackFile(rollbackContext),
    rollbackSync: createRollbackFileSync(rollbackContext)
  };
};
