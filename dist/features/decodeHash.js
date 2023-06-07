"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IndexExchange_1 = __importDefault(require("../utils/IndexExchange"));
const alphaDecode_1 = __importDefault(require("../utils/alphaDecode"));
const alphaEncode_1 = __importDefault(require("../utils/alphaEncode"));
const constants_1 = require("../utils/constants");
const decodeHash = (hashed, secret) => {
    const idxExHashed = (0, IndexExchange_1.default)(hashed);
    const arrangedHashed = idxExHashed.length % 2 === 0
        ? idxExHashed.slice(Math.floor(idxExHashed.length / 2)) + idxExHashed.slice(0, Math.floor(idxExHashed.length / 2))
        : idxExHashed.slice(Math.floor(idxExHashed.length / 2) + 1) + idxExHashed.slice(0, Math.floor(idxExHashed.length / 2) + 1);
    if (!arrangedHashed.includes((0, IndexExchange_1.default)((0, alphaEncode_1.default)(constants_1.secretExist)))) {
        const easyDecodedBase = (0, IndexExchange_1.default)((0, alphaDecode_1.default)(hashed));
        return easyDecodedBase.includes(constants_1.checkValid)
            ? { decoded: easyDecodedBase.replace(constants_1.checkValid, ""), error: null }
            : { decoded: null, error: "Invalid hash" };
    }
    else {
        if (!secret) {
            return { decoded: null, error: "UnAuthorized" };
        }
        const extract = secret.length % 2 === 0
            ? arrangedHashed.substring(Math.floor(secret.length / 2), arrangedHashed.length - Math.floor(secret.length / 2))
            : arrangedHashed.substring(Math.floor(secret.length / 2), arrangedHashed.length - Math.floor(secret.length / 2) - 1);
        if (!extract.includes((0, IndexExchange_1.default)((0, alphaEncode_1.default)(constants_1.secretExist)))) {
            return { decoded: null, error: "UnAuthorized" };
        }
        const extractSecret = arrangedHashed.replace(extract, "");
        const decodeSecret = (0, IndexExchange_1.default)((0, alphaDecode_1.default)(extractSecret));
        if (decodeSecret.localeCompare(secret) !== 0) {
            return { decoded: null, error: "UnAuthorized" };
        }
        const decodeBase = extract.replace((0, IndexExchange_1.default)((0, alphaEncode_1.default)(constants_1.secretExist)), "");
        const decodeBaseWithValidation = (0, IndexExchange_1.default)((0, alphaDecode_1.default)(decodeBase));
        return decodeBaseWithValidation.includes(constants_1.checkValid)
            ? { decoded: decodeBaseWithValidation.replace(constants_1.checkValid, ""), error: null }
            : { decoded: null, error: "Invalid hash" };
    }
};
exports.default = decodeHash;
