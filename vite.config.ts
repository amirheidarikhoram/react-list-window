// @ts-ignore
import path from "node:path";

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
            include: ["src/components/", "src/ts"],
            insertTypesEntry: true,
        }),
    ],
    resolve: {
        alias: {
            src: "/src",
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/components/index.ts"),
            name: PackageJSON.name,
            formats: ["es", "umd"],
            fileName: (format) => `${PackageJSON.name}.${format}.js`,
        },
        rollupOptions: {
            external: [...Object.keys(PackageJSON.peerDependencies ?? {})],
        },
    },
}));
