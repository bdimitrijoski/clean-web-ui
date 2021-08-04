import { CwFormLayout } from "./lib/cwui-form-layout.component";
import { CwFormItem } from "./lib/cwui-form-item.component";

export function init(){
  customElements.define(CwFormLayout.getType(), CwFormLayout);
  customElements.define(CwFormItem.getType(), CwFormItem);
}
