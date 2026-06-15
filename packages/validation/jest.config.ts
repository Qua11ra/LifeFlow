import base from "@repo/shared-configs/jest/base";
import type { Config } from "jest";

const config = {
    ...base,
    rootDir: "src",
} as Config;

export default config;
