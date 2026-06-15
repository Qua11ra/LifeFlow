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
    onSuccess: "node scripts/postbuild.mjs",
    esbuildOptions(options) {
        options.alias = {
            "@/*": "./*",
        };
    },
});
