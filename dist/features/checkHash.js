"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const decodeHash_1 = __importDefault(require("./decodeHash"));
const checkHash = (originalStr, hashed, secret) => {
    if (secret) {
        return originalStr === (0, decodeHash_1.default)(hashed, secret).decoded;
    }
    else {
        return originalStr === (0, decodeHash_1.default)(hashed).decoded;
    }
};
exports.default = checkHash;
