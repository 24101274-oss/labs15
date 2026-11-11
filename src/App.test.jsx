import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('renders the product name label', () => {
  render(<App />);
  const linkElement = screen.getByText(/Nombre de producto/i);
  expect(linkElement).toBeInTheDocument();
});
