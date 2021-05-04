import {render, screen} from '@testing-library/react';
import Tailwind from '../pages/tailwind';
import React from 'react';

test('renders learn react link', () => {
  render(<Tailwind />);
  const linkElement = screen.getByText(/Tailwind Stylesheet/i);
  expect(linkElement).toBeInTheDocument();
});
