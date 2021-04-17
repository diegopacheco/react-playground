import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Person List from Axios remote call/i);
  expect(linkElement).toBeInTheDocument();
});
