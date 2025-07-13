import { CwSplitLayout } from './lib/cwui-split-layout.component';

export function init() {
  if (!customElements.get(CwSplitLayout.getType())) {
    customElements.define(CwSplitLayout.getType(), CwSplitLayout);
  }
}
