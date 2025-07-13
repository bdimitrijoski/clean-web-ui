import { CwPagination } from './lib/cwui-pagination.component';

export function init() {
  if (!customElements.get(CwPagination.getType())) {
    customElements.define(CwPagination.getType(), CwPagination);
  }
}
