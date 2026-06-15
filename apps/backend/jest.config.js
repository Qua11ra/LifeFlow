const base = require("@repo/shared-configs/jest/base").default;

const config = {
    ...base,
    projects: [
        {
            displayName: "unit",
            rootDir: "src",
            testRegex: ".*\\.spec\\.ts$",
            transform: {
                "^.+\\.(t|j)s$": ["ts-jest", { tsconfig: "tsconfig.json" }],
            },
            testEnvironment: "node",
            moduleFileExtensions: ["js", "json", "ts"],
            collectCoverageFrom: ["**/*.(t|j)s"],
            coverageDirectory: "../coverage",
        },
        {
            displayName: "e2e",
            rootDir: "test",
            testRegex: "\\.e2e-spec\\.ts$",
            transform: {
                "^.+\\.(t|j)s$": ["ts-jest", { tsconfig: "tsconfig.json" }],
            },
            testEnvironment: "node",
            moduleFileExtensions: ["js", "json", "ts"],
        },
    ],
};

module.exports = config;
