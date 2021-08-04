import * as cwAppLayout from 'cwui-app-layout';
// import * as cwButton from 'cwui-button';
// import * as cwPagination from 'cwui-pagination';
import * as cwToolbar from 'cwui-toolbar';
import * as cwSplitLayout from 'cwui-split-layout';
import * as cwPageLayout from 'cwui-page-layout';
// import * as cwFormLayout from 'cwui-form-layout';
import * as cwLayouts from 'cwui-layouts';

export function init() {
  cwAppLayout.init();
  // cwButton.init();
  // cwPagination.init();
  cwToolbar.init();
  cwSplitLayout.init();
  cwPageLayout.init();
  // cwFormLayout.init();
  cwLayouts.init();
}

export { cwAppLayout, cwToolbar, cwSplitLayout, cwPageLayout, cwLayouts };
