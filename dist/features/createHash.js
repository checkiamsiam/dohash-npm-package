"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IndexExchange_1 = __importDefault(require("../utils/IndexExchange"));
const alphaEncode_1 = __importDefault(require("../utils/alphaEncode"));
const constants_1 = require("../utils/constants");
const createHash = (str, secret) => {
    const randomIOfStr = Math.floor(Math.random() * str.length);
    const strBaseEnc = str.slice(0, randomIOfStr) + constants_1.checkValid + str.slice(randomIOfStr);
    const strEnc = (0, IndexExchange_1.default)((0, alphaEncode_1.default)(strBaseEnc));
    if (!secret) {
        return strEnc;
    }
    else {
        const secEnc = (0, IndexExchange_1.default)((0, alphaEncode_1.default)(secret));
        const secretExistEncode = (0, IndexExchange_1.default)((0, alphaEncode_1.default)(constants_1.secretExist));
        const randomIndex = Math.floor(Math.random() * strEnc.length);
        const secretCodeIncludedStr = strEnc.slice(0, randomIndex) + secretExistEncode + strEnc.slice(randomIndex);
        const baseStrRes = secEnc.slice(0, Math.floor(secEnc.length / 2)) + secretCodeIncludedStr + secEnc.slice(Math.floor(secEnc.length / 2));
        const baseStrRes2 = baseStrRes.slice(Math.floor(baseStrRes.length / 2)) + baseStrRes.slice(0, Math.floor(baseStrRes.length / 2));
        const finalStrRes = (0, IndexExchange_1.default)(baseStrRes2);
        return finalStrRes;
    }
};
exports.default = createHash;
