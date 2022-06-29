import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Anti Gaspi', () => {
  render(<App />);
  const linkElement = screen.getByText(/Anti Gaspi/i);
  expect(linkElement).toBeInTheDocument();
});
