import React from 'react';
import "intersection-observer";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import Services from '../components/Review'; 

test('renders heading and content', () => {
  render(<Services />);
  const heading = screen.getByText(/Our experts say/i);
  expect(heading).toBeInTheDocument();
});


test('renders asterisks', () => {
  render(<Services />);
  const asterisks = screen.getAllByText('*');
  expect(asterisks.length).toBe(1);
});

