require("esbuild")
  .build({
    entryPoints: ["src/main.ts"],
    bundle: true,
    outdir: "dist",
    splitting: true,
    format: "esm",
    sourcemap: true,
    target: ["esnext"],
    publicPath: "/",
  })
  .catch(() => process.exit(1));
