const base = require("./base");

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    ...base,
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.module\\.css$": "identity-obj-proxy",
        "\\.css$": "identity-obj-proxy",
        "^@/(.*)$": "<rootDir>/src/$1",
    },
};
