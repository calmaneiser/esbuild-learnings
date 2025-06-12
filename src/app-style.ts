import { css } from "lit";

const appRootStyle = css`
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
export default appRootStyle;
