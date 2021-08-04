import { CwuiHorizontalLayout } from './lib/cwui-horizontal-layout.component';
import { CwuiVerticalLayout } from './lib/cwui-vertical-layout.component';

export function init() {
  customElements.define(CwuiHorizontalLayout.getType(), CwuiHorizontalLayout);
  customElements.define(CwuiVerticalLayout.getType(), CwuiVerticalLayout);
}
