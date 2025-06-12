import { LitElement, html } from "lit";
import { when } from "lit/directives/when.js";
import appRootStyle from "./app-style.js";

export class AppRoot extends LitElement {
  static get properties() {
    return {
      showLazy: { type: Boolean },
      isLoading: { type: Boolean },
    };
  }
  showLazy = false;
  isLoading = false;

  constructor() {
    super();
    this.showLazy = false;
    this.isLoading = false;
  }

  static styles = [appRootStyle];

  render() {
    return html`
      <p id="name">NEISER CALMA</p>
      ${when(
        this.isLoading,
        () =>
          html` <div id="overlay">
            <div class="spinner"></div>
          </div>`
      )}
      <button @click=${this.loadLazy}>ES Build and LitElement</button>
      ${when(this.showLazy, () => html`<lazy-comp></lazy-comp>`)}
    `;
  }
  async loadLazy() {
    /** requestUpdate()
     * I needed to put this every state change since esbuild does not support decorators yet.
     * That is why I cannot use @property decorator from lit/decorators.js
     */
    this.isLoading = true;
    this.requestUpdate();
    console.log("isLoading?", this.isLoading);
    await new Promise((r) => setTimeout(r, 1000));
    await import("./lazy-comp.js");

    this.showLazy = true;
    this.isLoading = false;
    this.requestUpdate();
    console.log("Lazy component loaded");
  }
}

customElements.define("app-root", AppRoot);
