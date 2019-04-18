import { CopyOptions, CopyOptionsSync } from 'fs-extra';
import { FileOptions } from 'tmp';
/**
 * Options exposed from `fs-extra`'s `copy` and `copySync` methods
 */
export declare type CopyOptionsFileProps = 'preserveTimestamps' | 'filter';
/**
 * Options passed to `rollback` and `rollbackSync`
 */
export declare type RollbackFileOptions = Pick<CopyOptions, CopyOptionsFileProps>;
/**
 * Options passed to `snapshot`
 * @property path - a path to the directory to snapshot. Defaults to cwd
 */
export declare type SnapshotFileOptions = FileOptions & RollbackFileOptions & {
    path: string;
};
/**
 * Options passed to `snapshotSync`
 * @property path - a path to the directory to snapshot. Defaults to cwd
 */
export declare type SnapshotFileOptionsSync = FileOptions & Pick<CopyOptionsSync, CopyOptionsFileProps> & {
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
export declare type RollbackFileContext = RollbackFileOptions & {
    src: string;
    dest: string;
};
/**
 * Creates a `rollback` closure
 * @param rollbackContext the context for the rollback closure
 */
export declare const createRollbackFile: ({ src, dest, preserveTimestamps: preserveTimestampsDefault }: RollbackFileContext) => ({ preserveTimestamps }?: Pick<CopyOptions, CopyOptionsFileProps>) => Promise<void>;
/**
 * Creates a `rollbackSync` closure
 * @param rollbackContext the context for the rollback closure
 */
export declare const createRollbackFileSync: ({ src, dest, preserveTimestamps: preserveTimestampsDefault }: RollbackFileContext) => ({ preserveTimestamps }?: Pick<CopyOptions, CopyOptionsFileProps>) => void;
/**
 * Asynchronously creates a snapshot for a directory.
 * Copies all the contents into a temporary location.
 * @param options
 */
export declare const snapshotFile: ({ path: src, preserveTimestamps, filter, ...tmpOptions }: SnapshotFileOptions) => Promise<SnapshotFile>;
/**
 * Synchronously creates a snapshot for a directory.
 * Copies all the contents into a temporary location.
 * @param options
 */
export declare const snapshotFileSync: ({ path: src, preserveTimestamps, filter, ...tmpOptions }: SnapshotFileOptionsSync) => SnapshotFile;
