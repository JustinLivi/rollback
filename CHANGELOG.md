## [0.2.3](https://github.com/JustinLivi/rollback/compare/v0.2.2...v0.2.3) (2019-04-27)


### Build

* Add sync stage (refs #34) ([dc851abd6e48208e6e2541e4e34e63a95d4d431b](https://github.com/JustinLivi/rollback/commit/dc851abd6e48208e6e2541e4e34e63a95d4d431b)), closes [#34](https://github.com/JustinLivi/rollback/issues/34)
* Auto sync release to dev (fixes #34) ([daa1f786388a727ab69436b1a621d6991869ed63](https://github.com/JustinLivi/rollback/commit/daa1f786388a727ab69436b1a621d6991869ed63)), closes [#34](https://github.com/JustinLivi/rollback/issues/34)

### Upgrade

* Update @types/node to version 11.13.6 ([863028c42497c744cdbe73175786cbbc042c5651](https://github.com/JustinLivi/rollback/commit/863028c42497c744cdbe73175786cbbc042c5651))
* Update @types/node to version 11.13.8 ([4f0227bc1047cbed87b36ee0b71d55fd25b4672b](https://github.com/JustinLivi/rollback/commit/4f0227bc1047cbed87b36ee0b71d55fd25b4672b)), closes [#36](https://github.com/JustinLivi/rollback/issues/36)
* Update conventional-changelog-cli to version 2.0.17 ([d5ccf908f70c702736e6c68a13859d409104c5ad](https://github.com/JustinLivi/rollback/commit/d5ccf908f70c702736e6c68a13859d409104c5ad))
* Update mock-fs to version 4.9.0 ([7cf83b37ea2ec20222f46dc01a0f57f03b3356cf](https://github.com/JustinLivi/rollback/commit/7cf83b37ea2ec20222f46dc01a0f57f03b3356cf))



## [0.2.2](https://github.com/JustinLivi/rollback/compare/v0.2.1...v0.2.2) (2019-04-19)


### Fix

* Pin version numbers (fixes #29) ([a4f45bf7faea0b516f878ebfd9730c0208b0d6da](https://github.com/JustinLivi/rollback/commit/a4f45bf7faea0b516f878ebfd9730c0208b0d6da)), closes [#29](https://github.com/JustinLivi/rollback/issues/29)



## [0.2.1](https://github.com/JustinLivi/rollback/compare/v0.2.0...v0.2.1) (2019-04-18)


### Build

* Add additional git configuration (refs #12) ([7dc2be981de247527b5602a2cbd2db741b9db1d3](https://github.com/JustinLivi/rollback/commit/7dc2be981de247527b5602a2cbd2db741b9db1d3)), closes [#12](https://github.com/JustinLivi/rollback/issues/12)
* Add automated bump script (refs #12) ([0f341817b3341bcf2c5c8eb5079f0c890aee8c16](https://github.com/JustinLivi/rollback/commit/0f341817b3341bcf2c5c8eb5079f0c890aee8c16)), closes [#12](https://github.com/JustinLivi/rollback/issues/12)
* Add CD pipeline (fixes #12) ([83e27dc3dae8c512f4d29587f48a1ebc7fda6879](https://github.com/JustinLivi/rollback/commit/83e27dc3dae8c512f4d29587f48a1ebc7fda6879)), closes [#12](https://github.com/JustinLivi/rollback/issues/12)
* Add mergify configuration (fixes #13) ([7e03ffa92e059ecc0c146dbd59da78fb3a7f7bdb](https://github.com/JustinLivi/rollback/commit/7e03ffa92e059ecc0c146dbd59da78fb3a7f7bdb)), closes [#13](https://github.com/JustinLivi/rollback/issues/13)
* Attempt CD fix using --unsafe-perm (refs #12) ([4b99d242b9c740d9affa8a3b3f0ad1a34f3d2e85](https://github.com/JustinLivi/rollback/commit/4b99d242b9c740d9affa8a3b3f0ad1a34f3d2e85)), closes [#12](https://github.com/JustinLivi/rollback/issues/12)
* Configure git user in CD pipeline (refs #12) ([a5b1649d4eff921044ae228a848e552f3e7e53fc](https://github.com/JustinLivi/rollback/commit/a5b1649d4eff921044ae228a848e552f3e7e53fc)), closes [#12](https://github.com/JustinLivi/rollback/issues/12)
* Ensure build breaks on test failure (fixes #7) ([36151cd9ee49121fb8d6f5f21c3cd81859fd407a](https://github.com/JustinLivi/rollback/commit/36151cd9ee49121fb8d6f5f21c3cd81859fd407a)), closes [#7](https://github.com/JustinLivi/rollback/issues/7)
* Fix git configuration (refs #12) ([c895ff7e3ebd87c5c02207110b62d39b71559060](https://github.com/JustinLivi/rollback/commit/c895ff7e3ebd87c5c02207110b62d39b71559060)), closes [#12](https://github.com/JustinLivi/rollback/issues/12)
* Move publish script to CD config (refs #12) ([4b5b0741c0a1035b724a2581112bba260d168f41](https://github.com/JustinLivi/rollback/commit/4b5b0741c0a1035b724a2581112bba260d168f41)), closes [#12](https://github.com/JustinLivi/rollback/issues/12)
* Only utilize .npmrc during release (refs #12) ([8de98f7b1fe13c5f7e37dfd520647cfcdf245308](https://github.com/JustinLivi/rollback/commit/8de98f7b1fe13c5f7e37dfd520647cfcdf245308)), closes [#12](https://github.com/JustinLivi/rollback/issues/12)
* Output coverage reporting in directory (refs #7) ([092a23a4584365d6e6caba5c570e041320ab613c](https://github.com/JustinLivi/rollback/commit/092a23a4584365d6e6caba5c570e041320ab613c)), closes [#7](https://github.com/JustinLivi/rollback/issues/7)
* Properly report coverage (refs #7) ([c20e5769db2c2ea8fd6f743ff29d44fcb4ce80bf](https://github.com/JustinLivi/rollback/commit/c20e5769db2c2ea8fd6f743ff29d44fcb4ce80bf)), closes [#7](https://github.com/JustinLivi/rollback/issues/7)
* Resolve git branch name issue (refs #12) ([186d124de65f6f602d972dcd77f20214fc7728f3](https://github.com/JustinLivi/rollback/commit/186d124de65f6f602d972dcd77f20214fc7728f3)), closes [#12](https://github.com/JustinLivi/rollback/issues/12)
* Revert mergify config status check ([994e674ae76f1a5eb26ea9d04f249784514171a4](https://github.com/JustinLivi/rollback/commit/994e674ae76f1a5eb26ea9d04f249784514171a4))
* Update CD git logic (refs #12) ([76d8faddbba2045ee4c207812158c41fc321326e](https://github.com/JustinLivi/rollback/commit/76d8faddbba2045ee4c207812158c41fc321326e)), closes [#12](https://github.com/JustinLivi/rollback/issues/12)
* Update git push command (refs #12) ([c12a01dc6d73ea3a130d4b208aaf0eca4191aafe](https://github.com/JustinLivi/rollback/commit/c12a01dc6d73ea3a130d4b208aaf0eca4191aafe)), closes [#12](https://github.com/JustinLivi/rollback/issues/12)

### Docs

* Add types badge (fixes #15) ([397c0eec96ddccee6b503a1599fc0e06cf77d315](https://github.com/JustinLivi/rollback/commit/397c0eec96ddccee6b503a1599fc0e06cf77d315)), closes [#15](https://github.com/JustinLivi/rollback/issues/15)
* Configure Greenkeeper messages (fixes #16) ([d123816d9ec625856383ec86346fd5a3157ddf10](https://github.com/JustinLivi/rollback/commit/d123816d9ec625856383ec86346fd5a3157ddf10)), closes [#16](https://github.com/JustinLivi/rollback/issues/16)

### Fix

* Attempt to fix coveralls badge caching (fixes #10) ([ce4306f3d2730e491da2f00509339dd5638d9d4d](https://github.com/JustinLivi/rollback/commit/ce4306f3d2730e491da2f00509339dd5638d9d4d)), closes [#10](https://github.com/JustinLivi/rollback/issues/10)
* Enforce mergify config checking (refs #13) ([9ba9432271e7c90f578698a0077c23e63ebe8b89](https://github.com/JustinLivi/rollback/commit/9ba9432271e7c90f578698a0077c23e63ebe8b89)), closes [#13](https://github.com/JustinLivi/rollback/issues/13)
* Properly import types from upgrade tmp (fixes #9) ([dedea4e6d531de009c24c4d8007c23636b890a9e](https://github.com/JustinLivi/rollback/commit/dedea4e6d531de009c24c4d8007c23636b890a9e)), closes [#9](https://github.com/JustinLivi/rollback/issues/9)



# [0.2.0](https://github.com/JustinLivi/rollback/compare/v0.1.1...v0.2.0) (2019-03-22)


### Breaking

* Require path option ([d4610a2642f261903392ad44bee768c38690fef7](https://github.com/JustinLivi/rollback/commit/d4610a2642f261903392ad44bee768c38690fef7))

### Docs

* Add anchors to badges ([339e052f2509e0a6512b20cfd94de8527b84f54e](https://github.com/JustinLivi/rollback/commit/339e052f2509e0a6512b20cfd94de8527b84f54e))

### New

* Add file API (refs #3) ([56ffffa8ef390c2b2fc155815dca2b8f2ff89d26](https://github.com/JustinLivi/rollback/commit/56ffffa8ef390c2b2fc155815dca2b8f2ff89d26)), closes [#3](https://github.com/JustinLivi/rollback/issues/3)

### Update

* Add file API documentation (refs: #3) ([aabd1a3f242e60c9f9f3da99f2d87d7bff7e2f02](https://github.com/JustinLivi/rollback/commit/aabd1a3f242e60c9f9f3da99f2d87d7bff7e2f02)), closes [#3](https://github.com/JustinLivi/rollback/issues/3)



## [0.1.1](https://github.com/JustinLivi/rollback/compare/v0.1.0...v0.1.1) (2019-03-12)




# 0.1.0 (2019-03-10)




