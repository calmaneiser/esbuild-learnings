import { LitElement, html } from "lit";

class LazyComp extends LitElement {
  render() {
    return html`<p>🎉 Lazy Component Loaded!</p>`;
  }
}

customElements.define("lazy-comp", LazyComp);
