"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __importDefault(require("./base"));
const reactConfig = {
    ...base_1.default,
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.module\\.css$": "identity-obj-proxy",
        "\\.css$": "identity-obj-proxy",
        "^@/(.*)$": "<rootDir>/src/$1",
    },
};
exports.default = reactConfig;
