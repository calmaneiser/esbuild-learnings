require("esbuild")
  .build({
    entryPoints: ["src/main.ts"],
    bundle: true,
    outdir: "dist",
    splitting: true,
    format: "esm",
    sourcemap: false,
    target: ["esnext"],
    publicPath: "/esbuild-learnings/",
  })
  .catch(() => process.exit(1));
