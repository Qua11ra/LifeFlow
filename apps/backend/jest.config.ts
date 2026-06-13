import base from "@repo/jest-config/base"
import type { Config } from "jest";

const config: Config = {
    ...base,
    projects: [
        {
            displayName: "unit",
            rootDir: "src",
            testRegex: ".*\\.spec\\.ts$",
            transform: {
                "^.+\\.(t|j)s$": "ts-jest",
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
                "^.+\\.(t|j)s$": "ts-jest",
            },
            testEnvironment: "node",
            moduleFileExtensions: ["js", "json", "ts"],
        },
    ],
};

export default config;
