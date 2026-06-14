"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseConfig = {
    testEnvironment: "node",
    transform: {
        "^.+\\.(t|j)sx?$": "ts-jest",
    },
    moduleFileExtensions: ["js", "json", "ts", "tsx"],
    collectCoverageFrom: ["**/*.(t|j)s"],
    coverageDirectory: "./coverage",
    testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};
exports.default = baseConfig;
