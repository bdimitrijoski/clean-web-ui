/* eslint-disable  */
export interface CleanWebFormLayoutProps {
  minWidthInPixels: number;
  columns: number;
}
declare let ResizeObserver: any;
export class CwFormLayout extends HTMLElement {
  private _shadowRoot;
  private _columnCount = 2;
  private _resizeObserver;
  private _responsiveSteps: CleanWebFormLayoutProps[] = [
    { minWidthInPixels: 0, columns: 1 },
    { minWidthInPixels: 500, columns: 2 },
    { minWidthInPixels: 700, columns: 3 },
  ];

  get responsiveSteps() {
    return this._responsiveSteps;
  }

  set responsiveSteps(steps: CleanWebFormLayoutProps[]) {
    this._responsiveSteps = steps;
    this.selectResponsiveStep();
    this.updateStyles();
  }

  static get observedAttributes() {
    return ['columns'];
  }

  static getType() {
    return 'cwui-form-layout';
  }

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    // this._shadowRoot.appendChild(contactCardTemplate.content.cloneNode(true));
    this._shadowRoot.innerHTML = `
    ${this.getTemplate()}
    `;

    this.onLayoutResize = this.onLayoutResize.bind(this);

    this._resizeObserver = new ResizeObserver((entries: any) => {
      let selectedStep = null;
      this.responsiveSteps.forEach((step) => {
        // Compare step min-width with the host width, select the passed step
        if (step.minWidthInPixels <= this.offsetWidth) {
          selectedStep = step;
        }
      });

      if (selectedStep !== null && (selectedStep as CleanWebFormLayoutProps).columns !== this._columnCount) {
        console.log(this.offsetWidth);
        this.selectResponsiveStep();
        this.updateStyles();
      }
    });

    this._resizeObserver.observe(this);
  }

  connectedCallback() {
    this.selectResponsiveStep();
    this.updateStyles();

    // window.addEventListener('resize', this.onLayoutResize);
  }

  disconnectedCallback() {
    this._resizeObserver.unobserve(this);
    this._resizeObserver.disconnect();
    this._resizeObserver = null;
    // window.removeEventListener('resize', this.onLayoutResize);
  }

  attributeChangedCallback(attr: string, oldVal: any, newVal: any) {
    if (attr === 'columns') {
      this._columnCount = newVal;
      this.updateStyles();
    }
  }

  onLayoutResize(e: UIEvent) {
    console.log('resize');
    console.log(this.offsetWidth);
  }

  private selectResponsiveStep() {
    this._columnCount = 2;
    let selectedStep = null;
    this.responsiveSteps.forEach((step) => {
      // Compare step min-width with the host width, select the passed step
      if (step.minWidthInPixels <= this.offsetWidth) {
        selectedStep = step;
      }
    });

    if (selectedStep) {
      this._columnCount = (selectedStep as CleanWebFormLayoutProps).columns;
    }
  }

  private naturalNumberOrOne(n: number) {
    if (typeof n === 'number' && n >= 1 && n < Infinity) {
      return Math.floor(n);
    }
    return 1;
  }

  private updateStyles() {
    /*
        The item width formula:
            itemWidth = colspan / columnCount * 100% - columnSpacing
        We have to subtract columnSpacing, because the column spacing space is taken
        by item margins of 1/2 * spacing on both sides
      */
    const columnSpacing = getComputedStyle(this).getPropertyValue('--cw-form-layout-column-spacing');
    const direction = getComputedStyle(this).direction;
    const marginStartProp = 'margin-' + (direction === 'ltr' ? 'left' : 'right');
    const marginEndProp = 'margin-' + (direction === 'ltr' ? 'right' : 'left');

    const containerWidth = this.offsetWidth;
    const columnCount = parseInt(this._columnCount.toString(), 10);
    let col = 0;

    Array.from(this.children)
      .filter((child) => child.localName === 'br' || getComputedStyle(child).display !== 'none')
      .forEach((child, index, children) => {
        if (child.localName === 'br') {
          // Reset column count on line break
          col = 0;
          return;
        }

        let colspan = this.naturalNumberOrOne(parseFloat(child.getAttribute('colspan') as string));

        // Never span further than the number of columns
        colspan = Math.min(colspan, columnCount);

        const childRatio = colspan / columnCount;

        // Note: using 99.9% for 100% fixes rounding errors in MS Edge
        // (< v16), otherwise the items might wrap, resizing is wobbly.
        (child as HTMLElement).style.width = `calc(${childRatio * 99.9}% - ${1 - childRatio} * ${columnSpacing})`;

        if (col + colspan > columnCount) {
          // Too big to fit on this row, let’s wrap it
          col = 0;
        }

        // At the start edge
        if (col === 0) {
          (child as HTMLElement).style.setProperty(marginStartProp, '0px');
        } else {
          (child as HTMLElement).style.removeProperty(marginStartProp);
        }

        const nextIndex = index + 1;
        const nextLineBreak = nextIndex < children.length && children[nextIndex].localName === 'br';

        // At the end edge
        if (col + colspan === columnCount) {
          (child as HTMLElement).style.setProperty(marginEndProp, '0px');
        } else if (nextLineBreak) {
          const colspanRatio = (columnCount - col - colspan) / columnCount;
          (child as HTMLElement).style.setProperty(
            marginEndProp,
            `calc(${colspanRatio * containerWidth}px + ${colspanRatio} * ${columnSpacing})`,
          );
        } else {
          (child as HTMLElement).style.removeProperty(marginEndProp);
        }

        // Move the column counter
        col = (col + colspan) % columnCount;

        if (child.localName === 'cw-form-item') {
          // if (this._labelsOnTop) {
          //   child.setAttribute('label-position', 'top');
          // } else {
          //   child.removeAttribute('label-position');
          // }
        }
      });
  }

  protected getTemplate() {
    return `
    ${this.getStyles()}
    <div id="layout">
      <slot id="slot"></slot>
    </div>
    `;
  }

  protected getStyles() {
    return `
    <style>

    :host {
      --cw-form-layout-column-spacing: 24px;
      display: block;
      max-width: 100%;
      animation: 1ms form-layout-appear;

      align-self: stretch;
    }

    @keyframes form-layout-appear {
      to {
        opacity: 1 !important;
      }
    }

    :host([hidden]) {
      display: none !important;
    }

    #layout {
      display: flex;
      align-items: baseline;
      flex-wrap: wrap;
    }

    #layout ::slotted(*) {
      /* Items should neither grow nor shrink. */
      flex-grow: 0;
      flex-shrink: 0;

      /* Margins make spacing between the columns */
      margin-left: calc(0.5 * var(--cw-form-layout-column-spacing));
      margin-right: calc(0.5 * var(--cw-form-layout-column-spacing));
    }

    #layout ::slotted(br) {
      display: none;
    }


    </style>
    `;
  }
}
