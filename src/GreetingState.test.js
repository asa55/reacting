import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
//import userEvent from '@testing-library/user-event'
import Greeting from './Greeting';

test('renders the correct greeting text after 1 click', () => {
  render(<Greeting name={""} />);
  const greetingElement = screen.getByText(/click/i);
  fireEvent.click(greetingElement)
  expect(greetingElement).toHaveTextContent("1")
});
