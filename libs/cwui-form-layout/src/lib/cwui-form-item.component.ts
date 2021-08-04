export class CwFormItem extends HTMLElement {
  private _shadowRoot;

  static getType(){
    return 'cwui-form-item';
  }

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.innerHTML = `
    ${this.getTemplate()}
    `;
  }


  protected getTemplate() {
    return `
    ${this.getStyles()}
    <div id="label" part="label" >
      <slot name="label" id="labelSlot"></slot>
    </div>
    <div id="spacing"></div>
    <div id="content">
      <slot id="contentSlot"></slot>
    </div>
    `;
  }

  protected getStyles() {
    return `
    <style>
    :host {
      display: inline-flex;
      flex-direction: row;
      align-items: baseline;

      /* CSS API for host */
      --vaadin-form-item-label-width: 8em;
      --vaadin-form-item-label-spacing: 1em;
      --vaadin-form-item-row-spacing: 1em;

      margin: calc(0.5 * var(--cw-form-item-row-spacing)) 0;
    }

    :host([label-position="top"]) {
      flex-direction: column;
      align-items: stretch;
    }

    :host([hidden]) {
      display: none !important;
    }

    #label {
      width: var(--cw-form-item-label-width);
      flex: 0 0 auto;
    }

    :host([label-position="top"]) #label {
      width: auto;
    }

    #spacing {
      width: var(--cw-form-item-label-spacing);
      flex: 0 0 auto;
    }

    #content {
      flex: 1 1 auto;
    }

    #content ::slotted(.full-width) {
      box-sizing: border-box;
      width: 100%;
      min-width: 0;
    }
    </style>
    `;
  }
}
