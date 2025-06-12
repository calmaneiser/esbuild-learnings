import {
  i2 as i,
  x
} from "/esbuild-learnings/chunk-UPGHY2G2.js";

// src/lazy-comp.ts
var LazyComp = class extends i {
  render() {
    return x`<p>🎉 Lazy Component Loaded!</p>`;
  }
};
customElements.define("lazy-comp", LazyComp);
