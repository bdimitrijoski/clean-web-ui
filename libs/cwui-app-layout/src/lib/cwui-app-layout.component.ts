import { cwAppLayoutStyles } from './cwui-app-layout.styles';
import { HeaderState, SidebarState } from './types';

export interface CleanWebUiAppLayout extends HTMLElement {
  sidebar: SidebarState;
  header: HeaderState;
}

export class CwAppLayout extends HTMLElement implements CleanWebUiAppLayout {
  private _shadowRoot;

  static get observedAttributes() {
    return ['sidebar', 'header'];
  }

  static getType() {
    return 'cwui-app-layout';
  }

  get sidebar() {
    const sidebarVal = <SidebarState>this.getAttribute('sidebar') || SidebarState.expanded;
    return SidebarState[sidebarVal];
  }

  set sidebar(sidebarValue: SidebarState) {
    this.setAttribute('sidebar', sidebarValue);
    this.notifySidebarStateChanges(sidebarValue);
  }

  get header() {
    const headerVal = <HeaderState>this.getAttribute('header') || HeaderState.on;
    return HeaderState[headerVal];
  }

  set header(headerValue: HeaderState) {
    this.setAttribute('header', headerValue);
    this.notifyHeaderVisibilityChanges(headerValue);
  }

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.innerHTML = `${this.getTemplate()}`;
  }

  attributeChangedCallback(attr: string) {
    if (attr === 'sidebar') {
      this.notifySidebarStateChanges(this.sidebar);
    } else if (attr === 'header') {
      this.notifyHeaderVisibilityChanges(this.header);
    }
  }

  private notifySidebarStateChanges(sidebarValue: SidebarState) {
    this.dispatchEvent(
      new CustomEvent('sidebar-opened-changed', {
        detail: sidebarValue,
      }),
    );
  }
  private notifyHeaderVisibilityChanges(newValue: HeaderState) {
    this.dispatchEvent(
      new CustomEvent('header-visibility-changed', {
        detail: newValue,
      }),
    );
  }
  protected getTemplate() {
    return `
    ${this.getStyles()}
      <header part="header" ><slot name="header"></slot></header>
      <aside part="sidebar" ><slot name="sidebar"></slot></aside>
      <main part="content"><slot></slot></main>
    `;
  }

  protected getStyles() {
    return `
    <style>
   ${cwAppLayoutStyles}
    </style>
    `;
  }
}
