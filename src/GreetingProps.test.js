import React from 'react';
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders the correct greeting text', () => {
  render(<Greeting name={"World!"} />);
  const greetingElement = screen.getByText(/hello, world/i);
  expect(greetingElement).toBeInTheDocument();
});
