"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const alphaDecode_1 = __importDefault(require("./alphaDecode"));
const constants_1 = require("./constants");
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
exports.default = decodeHash;
