require("esbuild")
  .build({
    entryPoints: ["src/main.ts"],
    bundle: true,
    outdir: "public",
    splitting: true,
    format: "esm",
    sourcemap: true,
    target: ["esnext"],
    publicPath: "/",
  })
  .catch(() => process.exit(1));
