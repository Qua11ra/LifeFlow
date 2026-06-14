const nativeConfig = require("@repo/jest-config/native").default;

const config = {
    ...nativeConfig,
    rootDir: "src",
    transform: {
        ...nativeConfig.transform,
        "^.+\\.tsx?$": [
            "ts-jest",
            { tsconfig: "tsconfig.jest.json" },
        ],
    },
};

module.exports = config;
