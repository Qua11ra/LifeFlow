import nativeConfig from "@repo/jest-config/native";
import type { Config } from "jest";

const config: Config = {
    ...nativeConfig,
    rootDir: "src",
};

export default config;
