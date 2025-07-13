import { CwFormLayout } from './lib/cwui-form-layout.component';
import { CwFormItem } from './lib/cwui-form-item.component';

export function init() {
  if (!customElements.get(CwFormLayout.getType())) {
    customElements.define(CwFormLayout.getType(), CwFormLayout);
  }
  if (!customElements.get(CwFormItem.getType())) {
    customElements.define(CwFormItem.getType(), CwFormItem);
  }
}
