import React from 'react';
import { render, screen } from '@testing-library/react';
import MyComponent from './App.js';

// Test para verificar que el componente renderiza correctamente el texto pasado como prop
test('renders button with label', () => {
  render(<MyComponent label="Click me" />);
  const buttonElement = screen.getByText(/Click me/i);
  expect(buttonElement).toBeInTheDocument();
});