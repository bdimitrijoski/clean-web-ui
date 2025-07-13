import { CwAppLayout } from './lib/cwui-app-layout.component';

export function init() {
  if (!customElements.get(CwAppLayout.getType())) {
    customElements.define(CwAppLayout.getType(), CwAppLayout);
  }
}
