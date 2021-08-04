import { CwToolbar } from "./lib/cwui-toolbar.component";

export function init(){
  customElements.define(CwToolbar.getType(), CwToolbar);
}
