import { render, screen, fireEvent } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting Component', () => {
  test('initial count is 0 and increments by 1 when button clicked', () => {
    render(<Greeting />);
    const countElement = screen.getByText(/click me! 0/i);
    expect(countElement).toHaveTextContent('click me! 0');
    fireEvent.click(countElement)
    expect(countElement).toHaveTextContent('click me! 1')
  });
});