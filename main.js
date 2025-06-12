import {
  i,
  i2,
  x
} from "/esbuild-learnings/chunk-UPGHY2G2.js";

// node_modules/lit-html/directives/when.js
function n(n2, r, t) {
  return n2 ? r(n2) : t?.(n2);
}

// src/app-style.ts
var appRootStyle = i`
  :host {
    --btn-bg: rgb(9, 220, 52);
    --btn-color: #fff;
    --btn-hover-bg: rgb(8, 178, 42);
    --spinner-color: rgb(60, 0, 255);
    --spinner-border: 4px;
    --spinner-size: 32px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: #fff;
    font-family: "Segoe UI", sans-serif;

    background-color: #e5e5f7;
    opacity: 0.9;
    background-size: 35px 35px;
    background-image: repeating-linear-gradient(
      0deg,
      #444cf7,
      #444cf7 1px,
      #e5e5f7 1px,
      #e5e5f7
    );
  }

  #name {
    font-size: 66px;
    margin: 0;
    letter-spacing: 8px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    font-weight: 500;
  }

  button {
    background: var(--btn-bg);
    color: var(--btn-color);
    border: none;
    padding: 8px 16px;
    font-size: 32px;
    margin-top: 13px;
    letter-spacing: 2px;
    cursor: pointer;
    border-radius: 4px;
    transition: background 0.2s ease-in-out;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  }
  button:hover {
    background: var(--btn-hover-bg);
  }

  #overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100dvw;
    height: 100dvh;
    background-color: rgba(0, 0, 0, 0.4); /* translucent */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }
  .spinner {
    border: var(--spinner-border) solid #ccc;
    border-top: var(--spinner-border) solid var(--spinner-color);
    border-radius: 50%;
    width: var(--spinner-size);
    height: var(--spinner-size);
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* Tablet: 768px and below */
  @media (max-width: 768px) {
    :host {
      background-size: 30px 30px;
    }

    #name {
      font-size: 62px;
      letter-spacing: 8px;
    }

    button {
      padding: 8px 16px;
      font-size: 28px;
      margin-top: 4px;
      letter-spacing: 2px;
    }
  }

  /* Mobile: 480px and below */
  @media (max-width: 480px) {
    :host {
      background-size: 30px 30px;
    }

    #name {
      font-size: 40px;
      text-align: center;
      letter-spacing: 8px;
    }

    button {
      padding: 8px 16px;
      font-size: 21px;
      margin-top: 8px;
      letter-spacing: 2px;
    }
  }
`;
var app_style_default = appRootStyle;

// src/app-root.ts
var AppRoot = class extends i2 {
  static get properties() {
    return {
      showLazy: { type: Boolean },
      isLoading: { type: Boolean }
    };
  }
  showLazy = false;
  isLoading = false;
  constructor() {
    super();
    this.showLazy = false;
    this.isLoading = false;
  }
  static styles = [app_style_default];
  render() {
    return x`
      <p id="name">NEISER CALMA</p>
      ${n(
      this.isLoading,
      () => x` <div id="overlay">
            <div class="spinner"></div>
          </div>`
    )}
      <button @click=${this.loadLazy}>ES Build and LitElement</button>
      ${n(this.showLazy, () => x`<lazy-comp></lazy-comp>`)}
    `;
  }
  async loadLazy() {
    this.isLoading = true;
    this.requestUpdate();
    console.log("isLoading?", this.isLoading);
    await new Promise((r) => setTimeout(r, 1e3));
    await import("/esbuild-learnings/lazy-comp-VQRKE3MN.js");
    this.showLazy = true;
    this.isLoading = false;
    this.requestUpdate();
    console.log("Lazy component loaded");
  }
};
customElements.define("app-root", AppRoot);
/*! Bundled license information:

lit-html/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
