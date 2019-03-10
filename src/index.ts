// tslint:disable:no-implicit-dependencies
import { copy, CopyOptions, CopyOptionsSync, copySync } from 'fs-extra';
import { dirSync, Options as TmpOptions } from 'tmp';
import { dir } from 'tmp-promise';

/**
 * Options exposed from `fs-extra`'s `copy` and `copySync` methods
 */
export type CopyOptionsProps = 'preserveTimestamps' | 'filter' | 'recursive';

/**
 * Options passed to `snapshot`
 * @property path - a path to the directory to snapshot. Defaults to cwd
 */
export type SnapshotOptions = TmpOptions &
  Pick<CopyOptions, CopyOptionsProps> & {
    path?: string;
  };

/**
 * Options passed to `snapshotSync`
 * @property path - a path to the directory to snapshot. Defaults to cwd
 */
export type SnapshotOptionsSync = TmpOptions &
  Pick<CopyOptionsSync, CopyOptionsProps> & {
    path?: string;
  };

/**
 * Options passed to `rollback` and `rollbackSync`
 */
export type RollbackOptions = Pick<
  CopyOptions,
  'preserveTimestamps' | 'recursive'
>;

/**
 * A Snapshot object
 * Use to either rollback to the original contents or cleanup the temp dir
 * @property path the directory to snapshot; default cwd
 * @property cleanup manually cleans up the temporary directory
 * @property rollback asynchronously rolls back any changes in the path to the snapshot
 * @property rollbackSync synchronously rolls back any changes in the path to the snapshot
 */
export interface Snapshot {
  path: string;
  cleanup(): void;
  rollback(options?: RollbackOptions): Promise<void>;
  rollbackSync(options?: RollbackOptions): void;
}

/**
 * The context necessary for a rollback
 * @property method the method to perform the rollback
 * @property src the target source
 * @property dest the temporary copy
 */
export type RollbackContext = RollbackOptions & {
  method: typeof copy | typeof copySync;
  src: string;
  dest: string;
};

/**
 * Creates a `rollback` closure
 * Uses either the async or sync copy
 * @param rollbackContext the context for the rollback closure
 */
export const createRollback = ({
  method,
  src,
  dest,
  preserveTimestamps: preserveTimestampsDefault,
  recursive: recursiveDefault
}: RollbackContext) => async (
  {
    preserveTimestamps = preserveTimestampsDefault,
    recursive = recursiveDefault
  }: RollbackOptions = {
    preserveTimestamps: preserveTimestampsDefault,
    recursive: recursiveDefault
  }
) => method(dest, src, { preserveTimestamps, recursive });

/**
 * Asynchronously creates a snapshot for a directory
 * Copies all the contents into a temporary location
 * @param options
 */
export const snapshot = async ({
  path: src = process.cwd(),
  preserveTimestamps = false,
  filter,
  recursive = true,
  ...tmpOptions
}: SnapshotOptions): Promise<Snapshot> => {
  try {
    const directory = await dir(tmpOptions);
    const { path: dest } = directory;
    await copy(src, dest, { preserveTimestamps, filter, recursive });
    const rollbackContextBase = {
      preserveTimestamps,
      recursive,
      src,
      dest
    };
    return {
      ...directory,
      rollback: createRollback({
        ...rollbackContextBase,
        method: copy
      }),
      rollbackSync: createRollback({
        ...rollbackContextBase,
        method: copySync
      })
    };
  } catch (error) {
    throw error;
  }
};

/**
 * Synchronously creates a snapshot for a directory
 * Copies all the contents into a temporary location
 * @param options
 */
export const snapshotSync = ({
  path: src = process.cwd(),
  preserveTimestamps = false,
  filter,
  recursive = true,
  ...tmpOptions
}: SnapshotOptionsSync): Snapshot => {
  const directory = dirSync(tmpOptions);
  const { name: dest, removeCallback } = directory;
  copySync(src, name, { preserveTimestamps, filter, recursive });
  const rollbackContextBase = {
    preserveTimestamps,
    recursive,
    src,
    dest
  };
  return {
    path: dest,
    cleanup: removeCallback,
    rollback: createRollback({
      ...rollbackContextBase,
      method: copy
    }),
    rollbackSync: createRollback({
      ...rollbackContextBase,
      method: copySync
    })
  };
};
