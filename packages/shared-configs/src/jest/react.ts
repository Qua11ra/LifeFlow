import type { Config } from "jest";
import baseConfig from "./base";

const reactConfig: Config = {
    ...baseConfig,
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.module\\.css$": "identity-obj-proxy",
        "\\.css$": "identity-obj-proxy",
        "^@/(.*)$": "<rootDir>/src/$1",
    },
};

export default reactConfig;
