import { render, screen } from '@testing-library/react';
import MonsterSelector from './MonsterSelector';

test('renders learn react link', () => {
  render(<MonsterSelector />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
