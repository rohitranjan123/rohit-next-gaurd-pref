import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "index.ts",
  output: [
    { file: "dist/index.js", format: "cjs", sourcemap: true },
    { file: "dist/index.es.js", format: "es", sourcemap: true }
  ],
  plugins: [resolve(), commonjs(), typescript()],
  external: ["react", "next"]
};