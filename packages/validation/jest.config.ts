import base from "@repo/jest-config/base";
import type { Config } from "jest";

const config = {
    ...base,
    rootDir: "src",
} as Config;

export default config;
