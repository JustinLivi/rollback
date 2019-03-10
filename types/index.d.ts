import { CopyOptions, CopyOptionsSync } from 'fs-extra';
import { Options as TmpOptions } from 'tmp';
/**
 * Options exposed from `fs-extra`'s `copy` and `copySync` methods
 */
export declare type CopyOptionsProps = 'preserveTimestamps' | 'filter' | 'recursive';
/**
 * Options passed to `snapshot`
 * @property path - a path to the directory to snapshot. Defaults to cwd
 */
export declare type SnapshotOptions = TmpOptions & Pick<CopyOptions, CopyOptionsProps> & {
    path?: string;
};
/**
 * Options passed to `snapshotSync`
 * @property path - a path to the directory to snapshot. Defaults to cwd
 */
export declare type SnapshotOptionsSync = TmpOptions & Pick<CopyOptionsSync, CopyOptionsProps> & {
    path?: string;
};
/**
 * Options passed to `rollback` and `rollbackSync`
 */
export declare type RollbackOptions = Pick<CopyOptions, 'preserveTimestamps' | 'recursive'>;
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
 * @property src the target source
 * @property dest the temporary copy
 */
export declare type RollbackContext = RollbackOptions & {
    src: string;
    dest: string;
};
/**
 * Creates a `rollback` closure
 * @param rollbackContext the context for the rollback closure
 */
export declare const createRollback: ({ src, dest, preserveTimestamps: preserveTimestampsDefault, recursive: recursiveDefault }: RollbackContext) => ({ preserveTimestamps, recursive }?: Pick<CopyOptions, "preserveTimestamps" | "recursive">) => Promise<void>;
/**
 * Creates a `rollbackSync` closure
 * @param rollbackContext the context for the rollback closure
 */
export declare const createRollbackSync: ({ src, dest, preserveTimestamps: preserveTimestampsDefault, recursive: recursiveDefault }: RollbackContext) => ({ preserveTimestamps, recursive }?: Pick<CopyOptions, "preserveTimestamps" | "recursive">) => void;
/**
 * Asynchronously creates a snapshot for a directory.
 * Copies all the contents into a temporary location.
 * @param options
 */
export declare const snapshot: ({ path: src, preserveTimestamps, filter, recursive, ...tmpOptions }?: SnapshotOptions) => Promise<Snapshot>;
/**
 * Synchronously creates a snapshot for a directory.
 * Copies all the contents into a temporary location.
 * @param options
 */
export declare const snapshotSync: ({ path: src, preserveTimestamps, filter, recursive, ...tmpOptions }?: SnapshotOptionsSync) => Snapshot;
