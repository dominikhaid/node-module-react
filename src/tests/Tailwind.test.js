import {render, screen, cleanup} from '@testing-library/react';
import Tailwind from '../pages/tailwind';
import React from 'react';

afterEach(cleanup);

it('should take a snapshot', () => {
  const {asFragment} = render(<Tailwind />);

  expect(asFragment(<Tailwind />)).toMatchSnapshot();
});

test('renders learn react link', () => {
  render(<Tailwind />);
  const linkElement = screen.getByText(/Tailwind Stylesheet/i);
  expect(linkElement).toBeInTheDocument();
});
