export const cwAppLayoutStyles = `
:host {
  --header-background: var(--app-layout-header-background, #0278d4);
  --app-font-family: var(
    --app-layout-font-family,
    "Segoe UI",
    Selawik,
    Tahoma,
    Verdana,
    Arial,
    sans-serif
  );
  --app-header-height: var(--app-layout-header-height, 66px);
  --app-sidebar-background: var(--app-layout-sidebar-background, #eaeaea);
  --app-sidebar-color: var(--app-layout-sidebar-color, #333);
  --app-sidebar-width: var(--app-layout-sidebar-width, 250px);
  --app-sidebar-collapsed-width: var(
    --app-layout-sidebar-collapsed-width,
    50px
  );
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}

:host [part="header"] {
  background: var(--header-background);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
  z-index: 2;
  height: var(--app-header-height);
  display: block;
  color: rgba(255, 255, 255, 0.7);
  box-sizing: border-box;
  font-family: var(--app-font-family);
  font-size: 14px;
  line-height: 1.5625;
  transition: left 0.2s ease;
}

:host [part="sidebar"] {
  width: var(--app-sidebar-width);
  position: absolute;
  top: var(--app-header-height);
  bottom: 0;
  left: 0;
  background: var(--app-sidebar-background);
  color: var(--app-sidebar-color);
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0;
  box-sizing: border-box;
  display: none;
  transition: left 0.2s ease;
  z-index: -1;
  opacity: 0;
}

:host [part="content"] {
  position: absolute;
  left: 0;
  right: 0;
  top: var(--app-header-height);
  bottom: 0;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  z-index: 2;
  transition: left 0.2s ease;
  display: block;
  box-sizing: border-box;
}

/* IF HEADER IS OFF */
:host([header="off"]) [part="header"] {
  display: none;
}

:host([header="off"]) [part="sidebar"],
:host([header="off"]) [part="content"] {
  top: 0;
}

/* SIDEBAR EXPANDED */
:host([sidebar="expanded"]) [part="sidebar"],
:host([sidebar]) [part="sidebar"] {
  z-index: 1;
  opacity: 1;
  display: block;
  width: var(--app-sidebar-width);
}

:host([sidebar="expanded"]) [part="content"],
:host([sidebar]) [part="content"] {
  left: var(--app-sidebar-width);
}

/* SIDEBAR COLLAPSED */
:host([sidebar="collapsed"]) [part="sidebar"] {
  z-index: 1;
  opacity: 1;
  display: block;
  width: var(--app-sidebar-collapsed-width);
}

:host([sidebar="collapsed"]) [part="content"] {
  left: var(--app-sidebar-collapsed-width);
}

/* SIDEBAR OFF */
:host([sidebar="off"]) [part="sidebar"] {
  z-index: -1;
  opacity: 0;
  display: none;
}

:host([sidebar="off"]) [part="content"] {
  left: 0;
}

`;
