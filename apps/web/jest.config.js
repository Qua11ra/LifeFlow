const reactConfig = require("@repo/jest-config/react").default;

const config = {
    ...reactConfig,
    rootDir: "src",
    transform: {
        ...reactConfig.transform,
        "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.jest.json" }],
    },
};

module.exports = config;
