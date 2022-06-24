import { render } from '@testing-library/react';
import App from './App';

it('renders loading', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/loading/i);
  expect(linkElement).toBeInTheDocument();
});
