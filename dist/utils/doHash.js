"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const alphaEncode_1 = __importDefault(require("./alphaEncode"));
const constants_1 = require("./constants");
const doHash = (str, secret) => {
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
exports.default = doHash;
