import { CwAppLayout } from './lib/cwui-app-layout.component';

export function init() {
  customElements.define(CwAppLayout.getType(), CwAppLayout);
}
