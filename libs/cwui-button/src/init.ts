import {CwButton} from './lib/cwui-button.component';

export function init(){
  customElements.define(CwButton.getType(), CwButton);
}
