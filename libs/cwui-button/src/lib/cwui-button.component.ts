export interface CleanWebUiButton extends HTMLElement {
  active: boolean;
  focus(): void;
}
export class CwButton extends HTMLElement implements CleanWebUiButton {
  static get observedAttributes() {
    return ['type', 'name', 'readonly', 'disabled', 'autofocus', 'type'];
  }

  private _shadowRoot: ShadowRoot;
  private _button: HTMLButtonElement;
  private _ripple: HTMLDivElement;

  static getType() {
    return 'cwui-button';
  }

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({
      mode: 'open',
      delegatesFocus: true,
    });
    // this._shadowRoot.appendChild(contactCardTemplate.content.cloneNode(true));

    this._shadowRoot.innerHTML = `
    ${this.getTemplate()}
    `;

    this._button = this._shadowRoot.querySelector('button') as HTMLButtonElement;
    this._ripple = this._shadowRoot.querySelector('.ripple') as HTMLDivElement;
    // this.setAttribute('role', 'button');
    // this.tabIndex = 0;
  }

  get active() {
    return this.hasAttribute('active');
  }

  set active(isActive) {
    if (isActive) {
      this.setAttribute('active', '');
    } else {
      this.removeAttribute('active');
    }
  }

  connectedCallback() {
    // init
  }
  disconnectedCallback() {
    // clean
  }

  attributeChangedCallback(attr: string, oldVal: any, newVal: any) {
    // if (CwButton.observedAttributes.indexOf(attr) !== -1) {
    (this._button as any)[attr] = newVal ? newVal : true;

    if (attr === 'autofocus') {
      this.focus();
    }
    // }
  }

  override focus() {
    this._button.focus();
  }

  protected getTemplate() {
    return `
    ${this.getStyles()}
    <button type="button" part="button">
        <div class="ripple"></div>
        <slot name="prefix"></slot>
        <span class="label" part="label"><slot></slot></span>
        <slot name="suffix"></slot>
      </button>
    `;
  }

  protected getStyles() {
    return `
    <style>
    :host {
      --button-background: transparent;
      --button-color-hover: #e2e2e2;
      --button-active-background: #c4c4c4;
      --font-color: #000000;
      --font-size: var(--cw-button-font-size, 11px);
      --font-weight: var(--cw-button-font-weight, 600);
      --button-padding: 0 8px 0 8px;
      --border-radius: 3px;
      --button-font-family: var(--cw-button-font-family, "Segoe UI",Selawik,Tahoma,Verdana,Arial,sans-serif);
      display: inline-block;
      width: fit-content;
    }

    :host([hidden]) {
      display: none !important;
    }

    button {
      border: 0;
      border-radius: var(--border-radius);
      min-height: 30px;
      padding: var(--button-padding);
      font-size: var(--font-size);
      font-weight: var(--font-weight);
      color: var(--font-color);
      background-color: var(--button-background);
      cursor: pointer;
      outline: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
      line-height: 1.5;
      font-family: var(--button-font-family);
      touch-action: manipulation;
      border: 1px solid transparent;
      white-space: nowrap;
      user-select: none;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
    }

    :host([active]) .ripple {
      animation-name: ripple;
      animation-duration: 0.4s;
      animation-timing-function: ease-out;
      background-color: #808080;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    @keyframes ripple {
      from {
        width: 0;
        height: 0;
        opacity: 0.8;
      }
      to {
        width: 100px;
        height: 100px;
        opacity: 0.1;
      }
    }

    .label {
      padding-left: 4px;
      padding-right: 4px;
    }
    :focus {
      border:0;
      outline:0;
    }

    :host(.hovered) button,
    button:hover {
      transition: background-color 0.3s ease-out;
      background-color: var(--button-color-hover);
    }

    button:active,
    :host(.active) button {
      transition: background-color 0.3s ease-out;
      background-color: var(--button-active-background);
    }

    button:focus,
    :host(.focused) button,
    button.focused {
        outline: 1px dotted #000000;
        outline-offset: -4px;
    }

    button:disabled,
    :host(.disabled) button {
      background-color: var(--button-background);
      cursor: not-allowed;
      color: rgba(0,0,0,0.6);
    }

    :host([theme~="raised"]) button {
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
    }


    :host([theme~="outlined"]) button {
      border: 1px solid #333;
    }

    :host([theme~="outlined"]) button:disabled,
    :host([theme~="outlined"].disabled) button {
      border: 1px solid rgba(0, 0, 0, 0.6);
    }

    :host([theme~="primary"]) button {
      border: 1px solid transparent;
      background: #0278d4;
      color: white;
    }

    :host([theme~="primary"]) button:hover {
      background: #036dc0;
    }

    :host([theme~="primary"]) button:active {
      transition: background-color 0.3s ease-out;
      background: #035da3;
    }

    :host([theme~="primary"].focused) button,
    :host([theme~="primary"]) button:focus {
      outline: 1px dotted rgba(255,255,255,0.5);
    }

    :host([theme~="primary"]) button:disabled,
    :host([theme~="primary"].disabled) button {
      background: #0278d4;
      color: rgba(255,255,255, 0.6);
    }

    :host([theme~="small"]) button {
      min-height:24px;
      padding: 0 4px;
    }
    :host([theme~="large"]) button {
      min-height:40px;
    }
    </style>
    `;
  }
}
