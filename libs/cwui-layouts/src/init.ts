import { CwuiHorizontalLayout } from './lib/cwui-horizontal-layout.component';
import { CwuiVerticalLayout } from './lib/cwui-vertical-layout.component';

export function init() {
  if (!customElements.get(CwuiHorizontalLayout.getType())) {
    customElements.define(CwuiHorizontalLayout.getType(), CwuiHorizontalLayout);
  }
  if (!customElements.get(CwuiVerticalLayout.getType())) {
    customElements.define(CwuiVerticalLayout.getType(), CwuiVerticalLayout);
  }
}
