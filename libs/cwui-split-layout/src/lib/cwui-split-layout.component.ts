export class CwSplitLayout extends HTMLElement {
  private _shadowRoot;

  static getType() {
    return 'cwui-split-layout';
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
    <aside part="sidebar"><slot name="sidebar"></slot></aside>
    <aside part="content"><slot name="content"></slot></aside>
    `;
  }

  protected getStyles() {
    return `
    <style>
    :host {
      --sidebar-width: var(--cw-split-layout-sidebar-width, 350px);
      --sidebar-background: var(--cw-split-layout-sidebar-background, transparent);

      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
    }

    :host [part="sidebar"] {
      width: var(--sidebar-width);
      border-right: 1px solid #ccc;
      background: var(--sidebar-background);
      position: absolute;
      top: 0;
      overflow: hidden;
      bottom: 0;
      display: block;
      box-sizing: border-box;
    }

    :host [part="content"] {
      position: absolute;
      left: var(--sidebar-width);
      right: 0;
      top: 0;
      overflow: hidden;
      bottom: 0;
      box-shadow: 0 0 7px rgba(0,0,0,.1);
    }

    </style>
    `;
  }
}
