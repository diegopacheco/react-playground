import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('[CSS-TEST] h1 has underline class', () => {
  render(<App />);
  const h1Element = screen.getByText(/Hello world from tailwind!/i);

  // checking all CSS
  expect(h1Element).toHaveClass('underline');
  expect(h1Element).toHaveClass('text-3xl');
  expect(h1Element).toHaveClass('font-bold');
});
