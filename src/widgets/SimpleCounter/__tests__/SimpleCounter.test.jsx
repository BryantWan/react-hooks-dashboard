import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SimpleCounter from '../SimpleCounter.starter';

describe('SimpleCounter Widget', () => {
  it('renders with initial count of 0', () => {
    render(<SimpleCounter />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('increments count when + button is clicked', async () => {
    const user = userEvent.setup();
    render(<SimpleCounter />);

    const incrementButton = screen.getByText('+');
    await user.click(incrementButton);

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('decrements count when - button is clicked', async () => {
    const user = userEvent.setup();
    render(<SimpleCounter />);

    const decrementButton = screen.getByText('-');
    await user.click(decrementButton);

    expect(screen.getByText('-1')).toBeInTheDocument();
  });

  it('resets count to 0 when reset button is clicked', async () => {
    const user = userEvent.setup();
    render(<SimpleCounter />);

    const incrementButton = screen.getByText('+');
    const resetButton = screen.getByText('Reset');

    await user.click(incrementButton);
    await user.click(incrementButton);
    await user.click(resetButton);

    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
