const nativeConfig = require("@repo/shared-configs/jest/native").default;

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
