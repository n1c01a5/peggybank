import { screen, render } from '@testing-library/react';

import App from './App';

test('renders react component', () => {
  render(<App />);

  const linkElement = screen.getByText(/insert coin/i);

  expect(linkElement).toBeInTheDocument();
});