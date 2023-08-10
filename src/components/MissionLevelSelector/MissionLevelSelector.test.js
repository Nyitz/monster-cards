import { render, screen } from '@testing-library/react';
import MissionLevelSelector from './MissionLevelSelector';

test('renders learn react link', () => {
  render(<MissionLevelSelector />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
