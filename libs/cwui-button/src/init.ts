import { CwButton } from './lib/cwui-button.component';

export function init() {
  if (!customElements.get(CwButton.getType())) {
    customElements.define(CwButton.getType(), CwButton);
  }
}
