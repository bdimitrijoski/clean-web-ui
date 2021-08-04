export class CwuiHorizontalLayout extends HTMLElement {
  private _shadowRoot;
  static getType() {
    return 'cwui-horizontal-layout';
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
      --spacing-xs: var(--cw-horizontal-layout-spacing-xs, 4px);
      --spacing-s: var(--cw-horizontal-layout-spacing-s, 8px);
      --spacing-m: var(--cw-horizontal-layout-spacing-m, 16px);
      --spacing-l: var(--cw-horizontal-layout-spacing-l, 24px);
      --spacing-xl: var(--cw-horizontal-layout-spacing-xl, 40px);

      display: flex;
      box-sizing: border-box;
      flex-wrap: wrap;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host([spacing="auto"]) {
      justify-content: space-between;
    }

    :host([spacing="spacing-xs"]) ::slotted(*) {
      margin-right: var(--spacing-xs);
    }

    :host([spacing="spacing-s"]) ::slotted(*) {
      margin-right: var(--spacing-s);
    }

    :host([spacing="spacing-m"]) ::slotted(*) {
      margin-right: var(--spacing-m);
    }

    :host([spacing="spacing-l"]) ::slotted(*) {
      margin-right: var(--spacing-l);
    }
    :host([spacing="spacing-xl"]) ::slotted(*) {
      margin-right: var(--spacing-xl);
    }


    </style>
    `;
  }
}
