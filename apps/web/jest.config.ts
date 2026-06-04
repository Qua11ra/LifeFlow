import base from "@repo/jest-config/react";
import type { Config } from "jest";

const config = {
    ...base,
    rootDir: "src",
} as Config;

export default config;
