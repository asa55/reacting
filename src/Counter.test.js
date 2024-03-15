import { render, screen } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
  test('counter shows expected text', () => {
    render(<Counter />);
    const countElement = screen.getByText('Count:');
    expect(countElement).toHaveTextContent('Count:');
  });
});
