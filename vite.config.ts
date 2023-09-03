// @ts-ignore
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import EsLint from "vite-plugin-linter";
import tsConfigPaths from "vite-tsconfig-paths";
const { EsLinter, linterPlugin } = EsLint;
import * as PackageJSON from "./package.json";

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
    plugins: [
        react(),
        tsConfigPaths(),
        linterPlugin({
            include: ["./src}/**/*.{ts,tsx}"],
            linters: [new EsLinter({ configEnv })],
        }),
        dts({
            insertTypesEntry: true,
            resolvers: [],
        }),
    ],
    build: {
        lib: {
            entry: resolve("src", "lib.ts"),
            name: PackageJSON.name,
            formats: ["es", "umd"],
            fileName: (format) => `${PackageJSON.name}.${format}.js`,
        },
        rollupOptions: {
            external: [...Object.keys(PackageJSON.peerDependencies ?? {})],
        },
    },
}));
