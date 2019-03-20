import * as rollback from '.';

describe('rollback', () => {
  it('should expose expected methods', () => {
    expect(rollback).toHaveProperty('snapshot');
    expect(rollback).toHaveProperty('snapshotSync');
    expect(rollback).toHaveProperty('snapshotFile');
    expect(rollback).toHaveProperty('snapshotFileSync');
  });
});
