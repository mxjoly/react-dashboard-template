import * as React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import App from './App';

describe('<App>', () => {
  it('renders correctly', () => {
    const { container } = render(<App />);
    expect(container.innerHTML).to.be.not.null;
  });
});
