import React from 'react';
import Greeting from './Greeting';
import { render, screen, fireEvent } from '@testing-library/react';

test('renders the correct greeting text after 1 click', () => {
  render(<Greeting name={""} />);
  const greetingElement = screen.getByText(/0/i);
  fireEvent.click(greetingElement)
  expect(greetingElement).toHaveTextContent("1")
});
