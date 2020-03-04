import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Bootstrap button primary is rendered', () => {
  const { getByText } = render(<App />);
  const btnElement = getByText('Primary');
  expect(btnElement).toBeInTheDocument();
});
