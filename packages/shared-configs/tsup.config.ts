import { defineConfig } from "tsup"

export default defineConfig({
    entry: {
        "jest/base": "./src/jest/base.ts",
        "jest/react": "./src/jest/react.ts",
        "jest/native": "./src/jest/native.ts",
        "playwright/base": "./src/playwright/base.ts",
    },
    format: ["cjs", "esm"],
    dts: true,
    sourcemap: true,
    clean: true,
})
