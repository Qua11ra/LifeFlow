const reactConfig = require("@repo/shared-configs/jest/react").default;

const config = {
    ...reactConfig,
    rootDir: "src",
    transform: {
        ...reactConfig.transform,
        "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.jest.json" }],
    },
};

module.exports = config;
