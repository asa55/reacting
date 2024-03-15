import { render, screen, fireEvent } from '@testing-library/react';
import CounterApp from './CounterApp';

describe('CounterApp', () => {
  test('counter increments and decrements when buttons are clicked', () => {
    render(<CounterApp />);
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    const countElement = screen.getByText('Count: 0');

    // Increment and check
    fireEvent.click(incrementButton);
    expect(countElement).toHaveTextContent('Count: 1');

    // Decrement and check
    fireEvent.click(decrementButton);
    expect(countElement).toHaveTextContent('Count: 0');
  });
});
