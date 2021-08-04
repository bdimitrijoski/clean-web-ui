export class CwuiVerticalLayout extends HTMLElement {
  private _shadowRoot;
  static getType() {
    return 'cwui-vertical-layout';
  }

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this._shadowRoot.innerHTML = `
    ${this.getTemplate()}
    `;
  }

  protected getTemplate() {
    return `
    ${this.getStyles()}
    <slot></slot>
    `;
  }

  protected getStyles() {
    return `
    <style>
    :host {
      --spacing-xs: var(--cw-vertical-layout-spacing-xs, 4px);
      --spacing-s: var(--cw-vertical-layout-spacing-s, 8px);
      --spacing-m: var(--cw-vertical-layout-spacing-m, 16px);
      --spacing-l: var(--cw-vertical-layout-spacing-l, 24px);
      --spacing-xl: var(--cw-vertical-layout-spacing-xl, 40px);

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      box-sizing: border-box;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host([spacing="spacing-xs"]) ::slotted(*) {
      margin-bottom: var(--spacing-xs);
    }

    :host([spacing="spacing-s"]) ::slotted(*) {
      margin-bottom: var(--spacing-s);
    }

    :host([spacing="spacing-m"]) ::slotted(*) {
      margin-bottom: var(--spacing-m);
    }

    :host([spacing="spacing-l"]) ::slotted(*) {
      margin-bottom: var(--spacing-l);
    }
    :host([spacing="spacing-xl"]) ::slotted(*) {
      margin-bottom: var(--spacing-xl);
    }


    </style>
    `;
  }
}
