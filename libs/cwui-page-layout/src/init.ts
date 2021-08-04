import { CwPageLayout } from "./lib/cwui-page-layout.component";

export function init() {
  customElements.define(CwPageLayout.getType(), CwPageLayout);
}
