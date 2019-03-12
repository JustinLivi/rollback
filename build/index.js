"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-implicit-dependencies
var fs_extra_1 = require("fs-extra");
var tmp_1 = require("tmp");
var tmp_promise_1 = require("tmp-promise");
/**
 * Creates a `rollback` closure
 * @param rollbackContext the context for the rollback closure
 */
exports.createRollback = function (_a) {
    var src = _a.src, dest = _a.dest, preserveTimestampsDefault = _a.preserveTimestamps, recursiveDefault = _a.recursive;
    return function (_a) {
        var _b = _a === void 0 ? {
            preserveTimestamps: preserveTimestampsDefault,
            recursive: recursiveDefault
        } : _a, _c = _b.preserveTimestamps, preserveTimestamps = _c === void 0 ? preserveTimestampsDefault : _c, _d = _b.recursive, recursive = _d === void 0 ? recursiveDefault : _d;
        return __awaiter(_this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, fs_extra_1.pathExists(dest)];
                    case 1:
                        if (!(_e.sent())) {
                            throw new Error("path " + dest + " does not exist");
                        }
                        return [4 /*yield*/, fs_extra_1.emptyDir(src)];
                    case 2:
                        _e.sent();
                        return [4 /*yield*/, fs_extra_1.copy(dest, src, { preserveTimestamps: preserveTimestamps, recursive: recursive })];
                    case 3:
                        _e.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _e.sent();
                        throw error_1;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
};
/**
 * Creates a `rollbackSync` closure
 * @param rollbackContext the context for the rollback closure
 */
exports.createRollbackSync = function (_a) {
    var src = _a.src, dest = _a.dest, preserveTimestampsDefault = _a.preserveTimestamps, recursiveDefault = _a.recursive;
    return function (_a) {
        var _b = _a === void 0 ? {
            preserveTimestamps: preserveTimestampsDefault,
            recursive: recursiveDefault
        } : _a, _c = _b.preserveTimestamps, preserveTimestamps = _c === void 0 ? preserveTimestampsDefault : _c, _d = _b.recursive, recursive = _d === void 0 ? recursiveDefault : _d;
        if (!fs_extra_1.pathExistsSync(dest)) {
            throw new Error("path " + dest + " does not exist");
        }
        fs_extra_1.emptyDirSync(src);
        fs_extra_1.copySync(dest, src, { preserveTimestamps: preserveTimestamps, recursive: recursive });
    };
};
/**
 * Asynchronously creates a snapshot for a directory.
 * Copies all the contents into a temporary location.
 * @param options
 */
exports.snapshot = function (_a) {
    if (_a === void 0) { _a = {}; }
    return __awaiter(_this, void 0, void 0, function () {
        var directory, dest, rollbackContext, error_2;
        var _b = _a.path, src = _b === void 0 ? process.cwd() : _b, _c = _a.preserveTimestamps, preserveTimestamps = _c === void 0 ? false : _c, filter = _a.filter, _d = _a.recursive, recursive = _d === void 0 ? true : _d, tmpOptions = __rest(_a, ["path", "preserveTimestamps", "filter", "recursive"]);
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, tmp_promise_1.dir(tmpOptions)];
                case 1:
                    directory = _e.sent();
                    dest = directory.path;
                    return [4 /*yield*/, fs_extra_1.copy(src, dest, { preserveTimestamps: preserveTimestamps, filter: filter, recursive: recursive })];
                case 2:
                    _e.sent();
                    rollbackContext = {
                        preserveTimestamps: preserveTimestamps,
                        recursive: recursive,
                        src: src,
                        dest: dest
                    };
                    return [2 /*return*/, __assign({}, directory, { rollback: exports.createRollback(rollbackContext), rollbackSync: exports.createRollbackSync(rollbackContext) })];
                case 3:
                    error_2 = _e.sent();
                    throw error_2;
                case 4: return [2 /*return*/];
            }
        });
    });
};
/**
 * Synchronously creates a snapshot for a directory.
 * Copies all the contents into a temporary location.
 * @param options
 */
exports.snapshotSync = function (_a) {
    if (_a === void 0) { _a = {}; }
    var _b = _a.path, src = _b === void 0 ? process.cwd() : _b, _c = _a.preserveTimestamps, preserveTimestamps = _c === void 0 ? false : _c, filter = _a.filter, _d = _a.recursive, recursive = _d === void 0 ? true : _d, tmpOptions = __rest(_a, ["path", "preserveTimestamps", "filter", "recursive"]);
    var directory = tmp_1.dirSync(tmpOptions);
    var dest = directory.name, removeCallback = directory.removeCallback;
    fs_extra_1.ensureDirSync(dest);
    fs_extra_1.copySync(src, dest, { preserveTimestamps: preserveTimestamps, filter: filter, recursive: recursive });
    var rollbackContext = {
        preserveTimestamps: preserveTimestamps,
        recursive: recursive,
        src: src,
        dest: dest
    };
    return {
        path: dest,
        cleanup: removeCallback,
        rollback: exports.createRollback(rollbackContext),
        rollbackSync: exports.createRollbackSync(rollbackContext)
    };
};
//# sourceMappingURL=index.js.map