"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkHash = exports.decodeHash = exports.createHash = void 0;
const alphaDecode_1 = __importDefault(require("./utils/alphaDecode"));
const alphaEncode_1 = __importDefault(require("./utils/alphaEncode"));
const constants_1 = require("./utils/constants");
const createHash = (str, secret) => {
    const srtEnc = (0, alphaEncode_1.default)(str);
    if (srtEnc.length <= secret.length) {
        let strRes = "";
        for (let i = 0; i < srtEnc.length; i++) {
            strRes += secret[i] + srtEnc[i];
        }
        strRes = strRes + constants_1.secretExtra;
        for (let j = srtEnc.length + 1; j < secret.length; j++) {
            strRes += secret[j];
        }
        return (0, alphaEncode_1.default)(strRes);
    }
    else {
        let strRes = "";
        for (let i = 0; i < secret.length; i++) {
            strRes += secret[i] + srtEnc[i];
        }
        strRes = strRes + constants_1.strExtra;
        for (let j = secret.length + 1; j < srtEnc.length; j++) {
            strRes += srtEnc[j];
        }
        return (0, alphaEncode_1.default)(strRes);
    }
};
exports.createHash = createHash;
const decodeHash = (hashed) => {
    const strDec = (0, alphaDecode_1.default)(hashed);
    if (strDec.includes(constants_1.secretExtra)) {
        const split = strDec.split(constants_1.secretExtra);
        const strRes = split[0];
        let orgRes = "";
        for (let i = 0; i < strRes.length; i++) {
            if (i % 2 !== 0) {
                orgRes += strRes[i];
            }
        }
        return (0, alphaDecode_1.default)(orgRes);
    }
    else {
        const strRes = strDec.replace(constants_1.strExtra, "");
        let orgRes = "";
        for (let i = 0; i < strRes.length; i++) {
            if (i % 2 !== 0) {
                orgRes += strRes[i];
            }
        }
        return (0, alphaDecode_1.default)(orgRes);
    }
};
exports.decodeHash = decodeHash;
const checkHash = (originalStr, hashed) => {
    return originalStr === decodeHash(hashed);
};
exports.checkHash = checkHash;
const doHash = { createHash, decodeHash, checkHash };
exports.default = doHash;
