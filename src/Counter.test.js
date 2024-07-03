import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

// Verificar que el componente renderiza correctamente con el valor inicial
test('renders counter with initial value', () => {
  render(<Counter />);
  const counterElement = screen.getByText(/0/i);
  expect(counterElement).toBeInTheDocument();
});

// Verificar que el botón incrementa el valor del contador
test('increments counter', () => {
  render(<Counter />);
  const incrementButton = screen.getByText(/Increment/i);
  fireEvent.click(incrementButton);
  const counterElement = screen.getByText(/1/i);
  expect(counterElement).toBeInTheDocument();
});

// Verificar que el botón decrementa el valor del contador
test('decrements counter', () => {
  render(<Counter />);
  const decrementButton = screen.getByText(/Decrement/i);
  fireEvent.click(decrementButton);
  const counterElement = screen.getByText(/-1/i);
  expect(counterElement).toBeInTheDocument();
});
