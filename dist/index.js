"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkHash = exports.decodeHash = exports.createHash = void 0;
const checkHash_1 = __importDefault(require("./features/checkHash"));
exports.checkHash = checkHash_1.default;
const createHash_1 = __importDefault(require("./features/createHash"));
exports.createHash = createHash_1.default;
const decodeHash_1 = __importDefault(require("./features/decodeHash"));
exports.decodeHash = decodeHash_1.default;
const doHash = { createHash: createHash_1.default, decodeHash: decodeHash_1.default, checkHash: checkHash_1.default };
exports.default = doHash;
