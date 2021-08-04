export class CwToolbar extends HTMLElement {
  private _shadowRoot;

  static getType() {
    return 'cwui-toolbar';
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
    <div class="toolbar" >
      <div class="set left">
          <slot name="left"></slot>
      </div>
      <div class="set right">
          <slot name="right"></slot>
      </div>
    </div>
    `;
  }

  protected getStyles() {
    return `
    <style>
    :host {
        --toolbar-background: var(--cw-toolbar-background, transparent);
        --toolbar-padding: var(--cw-toolbar-padding, 0);
        --toolbar-border-color: var(--cw-toolbar-border-color, transparent);
        --toolbar-height: var(--cw-toolbar-height, 48px);

        outline: 0;
        background-color: var(--toolbar-background);
        padding: var(--toolbar-padding);
        min-height: 24px;
        position: absolute;
        left: 0;
        width: 100%;


        display: flex;
        justify-content: space-between;
        align-items: center;
        border:1px solid var(--toolbar-border-color);
        box-sizing: content-box;
        position: relative;
        height: var(--toolbar-height);
    }

      :host > .toolbar {
        display:flex;
        align-items:center;
        justify-content:space-between;
        flex:1;
    }

    :host .set{
      display:flex;
    }

    :host([theme="light"]) {
      background-color: rgba(230,230,230);
    }

    </style>
    `;
  }
}
