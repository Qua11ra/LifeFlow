import { defineConfig } from "tsup";

export default defineConfig({
    entry: {
        index: "./index.ts"
    },
    format: ["esm"],
    dts: true,
    sourcemap: true,
    treeshake: true,
    minify: true,
    tsconfig: "./tsconfig.json",
    clean: true,
    external: ["react", "react-dom"],
    esbuildOptions(options) {
        options.banner = {
            js: '"use client"',
        };
        options.alias = {
            "@/*": "./*",
        };
    },
    banner: {
        js: "'use client';",
    },
});
