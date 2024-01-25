// Counter.test.jsx

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../src/components/Counter';

describe('Counter Component', () => {
  it('renders counter value', () => {
    render(<Counter />);

    // Check if the initial counter value is rendered
    expect(screen.getByText('Counter: 0')).toBeInTheDocument();
  });

  it('increments the counter when the "Increment" button is clicked', () => {
    render(<Counter />);

    // Click the "Increment" button
    fireEvent.click(screen.getByText('Increment'));

    // Check if the counter value is updated
    expect(screen.getByText('Counter: 1')).toBeInTheDocument();
  });

  it('decrements the counter when the "Decrement" button is clicked', () => {
    render(<Counter />);

    // Click the "Increment" button twice to have a non-zero value
    fireEvent.click(screen.getByText('Increment'));
    fireEvent.click(screen.getByText('Increment'));

    // Click the "Decrement" button
    fireEvent.click(screen.getByText('Decrement'));

    // Check if the counter value is updated
    expect(screen.getByText('Counter: 1')).toBeInTheDocument();
  });

  // Add more tests as needed for different scenarios
});
