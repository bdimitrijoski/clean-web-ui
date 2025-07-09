import { beforeEach, describe, expect, it } from 'vitest';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import './cwui-toolbar.component'; // register the component
import { init } from '../init';

describe('CWUI Toolbar', () => {
  beforeAll(() => {
    document.body.innerHTML = '';
    init();
  });

  it('should render the component', () => {
    const el = document.createElement('cwui-toolbar');
    el.innerHTML = 'Toolbar';
    document.body.appendChild(el);

    const toolbar = screen.getByText('Toolbar');
    expect(toolbar).toBeTruthy();
  });
});
