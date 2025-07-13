import { CwToolbar } from './lib/cwui-toolbar.component';

export function init() {
  if (!customElements.get(CwToolbar.getType())) {
    customElements.define(CwToolbar.getType(), CwToolbar);
  }
}
