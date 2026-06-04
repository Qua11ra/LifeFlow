/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    testEnvironment: "node",
    transform: {
        "^.+\\.(t|j)sx?$": "ts-jest",
    },
    moduleFileExtensions: ["js", "json", "ts", "tsx"],
    collectCoverageFrom: ["**/*.(t|j)s"],
    coverageDirectory: "./coverage",
    testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};
