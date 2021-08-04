export class CwPageLayout extends HTMLElement {
  private _shadowRoot;

  static getType() {
    return 'cwui-page-layout';
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
    <header  part="header"><slot id="header" name="header"></slot></header>
    <section part="content"><slot></slot></section>
    <section part="appbar"><slot name="appbar"></slot></section>
    `;
  }

  protected getStyles() {
    return `
    <style>
    :host {
      --host-background: var(--page-layout-background, #fff);
      --content-padding: var(--page-layout-content-padding, 15px);
      --appbar-height: var(--page-layout-appbar-height, 48px);
      --appbar-background: var(--page-layout-appbar-background, #EAEAEA);
      --header-background: var(--page-layout-header-background, #EAEAEA);
      --header-height: var(--page-layout-header-height, 115px);

      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      overflow: hidden;
      z-index: 0;
      background: var(--host-background);
    }

    :host [part="content"] {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      bottom: 0;
      overflow-x: auto;
      overflow-y: auto;
      padding: var(--content-padding);
      box-sizing: border-box;
      display: block;
      background: var(--host-background);
      z-index: 0;
    }

    :host [part="appbar"] {
      outline: 0;
      background-color: var(--appbar-background);
      min-height: 24px;
      display: none;
      height: var(--appbar-height);
      position: absolute;
      left: 0;
      width: 100%;
      bottom: 0;
      z-index: 1;
    }

    :host [part="header"] {
      margin: 0;
      height: var(--header-height);
      display: none;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      z-index: 0;
      background: var(--header-background);
      padding: 0 15px;
      z-index: 2;
    }

    :host([appbar]) [part="appbar"] {
      display: block;
    }
    :host([appbar="off"]) [part="appbar"] {
      display: none;
    }

    :host([appbar]) [part="content"] {
      bottom: var(--appbar-height);
    }
    :host([appbar="off"]) [part="content"] {
      bottom: 0;
    }

    :host([header]) [part="header"] {
      display: block;
    }
    :host([header="off"]) [part="header"] {
      display: none;
    }

    :host([header]) [part="content"] {
      top: var(--header-height);
    }
    :host([header="off"]) [part="content"] {
      top: 0;
    }

    slot[name="appbar"]::slotted(cw-toolbar),
    slot[name="header"]::slotted(cw-toolbar) {
      margin-left: calc(-1 * var(--content-padding));
      margin-right: calc(-1 * var(--content-padding));
      padding-left: var(--content-padding);
      padding-right: var(--content-padding);
    }

    /* TRANSPARENT THEME */
    :host([theme~="transparent"]),
    :host([theme~="transparent"]) [part="content"] {
        background: transparent;
    }

    :host([theme~="transparent"]) [part="appbar"],
    :host([theme~="transparent"]) [part="header"] {
        background: transparent;
    }

    </style>
    `;
  }
}
