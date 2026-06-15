import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outFile = resolve(__dirname, "..", "dist", "index.js");

try {
    const content = readFileSync(outFile, "utf-8");
    if (!content.startsWith("'use client'")) {
        writeFileSync(outFile, `'use client';\n${content}`);
        console.log("[postbuild] added 'use client' directive");
    }
} catch (err) {
    console.warn(`[postbuild] could not process ${outFile}:`, err.message);
}
