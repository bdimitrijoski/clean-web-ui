const paginationComponentTemplate = document.createElement('template');
const paginationComponentTemplateContent = `
<style>
nav {
  display: block;
}
.pagination {
  display: inline-block;
  padding-left: 0;
  margin: 20px 0;
  border-radius: 4px;
  box-sizing: border-box;
}
.pagination>li {
  display: inline;
  box-sizing: border-box;
}
.pagination>li>a, .pagination>li>span {
  position: relative;
  float: left;
  padding: 6px;
  margin-left: -1px;
  line-height: 1.42857143;
  color: #337ab7;
  text-decoration: none;
  background-color: transparent;
  border: 0;
}
.pagination>li:first-child>a, .pagination>li:first-child>span {
  margin-left: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.pagination>.active>a, .pagination>.active>a:focus, .pagination>.active>a:hover, .pagination>.active>span, .pagination>.active>span:focus, .pagination>.active>span:hover {
  z-index: 3;
  color: #fff;
  cursor: default;
  background-color: #337ab7;
  border-color: #337ab7;
}
</style>
<nav aria-label="Page navigation" id="pagination">
    <ul class="pagination">
    </ul>
  </nav>
`;
paginationComponentTemplate.innerHTML = paginationComponentTemplateContent;

export interface CleanWebUiPagination extends HTMLElement {
  page: number | string;
  total: number | string;
}

export class CwPagination extends HTMLElement implements CleanWebUiPagination {
  protected _shadowRoot: ShadowRoot;
  protected _container: HTMLDivElement;
  private _total = 0;
  private _page = 0;

  static getType() {
    return 'cwui-pagination';
  }

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(
      paginationComponentTemplate.content.cloneNode(true),
    );
    this._container = this._shadowRoot.querySelector('#pagination') as HTMLDivElement;
    this.onPageChanged = this.onPageChanged.bind(this);
  }

  static get observedAttributes() {
    return ['page', 'total'];
  }

  connectedCallback() {
    if (this._container.isConnected) {
      this.render();
    }
  }

  onPageChanged(e: any) {
    e.preventDefault();

    if (e.target.id === 'next') {
      this._page = this._page + 1 > this._total ? this._total : this._page++;
    } else if (e.target.id === 'prev') {
      this._page = this._page - 1 <= 0 ? 1 : this._page--;
    } else {
      this._page = +e.target.innerText;
    }

    this.changePage(this._page);
  }

  private changePage(page: number) {
    this._shadowRoot.querySelectorAll('.pagination li').forEach((e) => {
      e.classList.remove('active');
    });

    setTimeout(() => {
      const activePage = this._shadowRoot.querySelector(
        `.pagination li[data-page="${this._page}"]`,
      );
      if (activePage) {
        activePage.classList.add('active');
      }
    });

    const selectEvent = new CustomEvent('change', {
      detail: page,
      bubbles: true,
      cancelable: true,
    });
    this.dispatchEvent(selectEvent);
  }

  attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    if (oldValue === newValue) {
      return;
    }
    switch (name) {
      case 'page':
        this.page = newValue;
        this.changePage(newValue);
        break;
      case 'total':
        this.total = newValue;
        break;

      default:
        break;
    }
  }

  get total() {
    return this._total;
  }

  set total(newValue) {
    if (this._total === newValue) {
      return;
    }
    this._total = newValue;
    this.render();
  }

  get page() {
    return this._page;
  }

  set page(newValue) {
    if (this._page === newValue) {
      return;
    }
    this._page = newValue;
    this.render();
  }

  private render() {
    if (!this._container.isConnected) {
      return;
    }

    let pagesHTML = '';

    const prev = `<li>
    <a href="#" aria-label="Previous">
      <span aria-hidden="true">&laquo;</span>
    </a>
  </li>`;

    const next = `<li>
    <a href="#" aria-label="Next">
      <span aria-hidden="true">&raquo;</span>
    </a>
  </li>`;

    const total = this._total / 10;

    pagesHTML += prev;
    for (let i = 1; i <= total; i++) {
      pagesHTML += `<li data-page="${i}">
        <a href="#" >${i}</a>
      </li>`;
    }

    pagesHTML += next;

    this.removeEventListeners();
    (<HTMLDivElement>this._shadowRoot.querySelector('.pagination')).innerHTML = pagesHTML;

    setTimeout(() => {
      this.attachEventListeners();
      const activePage = this._shadowRoot.querySelector(
        `.pagination li[data-page="${this._page}"]`,
      );
      if (activePage) {
        activePage.classList.add('active');
      }
    });
  }

  private attachEventListeners() {
    const liItems = this._shadowRoot.querySelectorAll('.pagination li > a');

    for (let i = 0; i < liItems.length; i++) {
      liItems[i].addEventListener('click', this.onPageChanged);
    }
  }
  private removeEventListeners() {
    const liItems = this._shadowRoot.querySelectorAll('.pagination li > a');

    for (let i = 0; i < liItems.length; i++) {
      liItems[i].removeEventListener('click', this.onPageChanged);
    }
  }
}
