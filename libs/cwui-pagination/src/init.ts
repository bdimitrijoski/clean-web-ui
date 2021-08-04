import { CwPagination } from "./lib/cwui-pagination.component";

export function init(){
  customElements.define(CwPagination.getType(), CwPagination);
}
