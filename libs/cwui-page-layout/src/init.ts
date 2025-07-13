import { CwPageLayout } from './lib/cwui-page-layout.component';

export function init() {
  if (!customElements.get(CwPageLayout.getType())) {
    customElements.define(CwPageLayout.getType(), CwPageLayout);
  }
}
