import type { Config } from "jest";

const baseConfig: Config = {
    testEnvironment: "node",
    transform: {
        "^.+\\.(t|j)sx?$": "ts-jest",
    },
    moduleFileExtensions: ["js", "json", "ts", "tsx"],
    collectCoverageFrom: ["**/*.(t|j)s"],
    coverageDirectory: "./coverage",
    testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};

export default baseConfig;
