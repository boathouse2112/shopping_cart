import { render } from '@testing-library/react';
import React from 'react';
import Home from './Home';

test('dummy', () => {
  render(<Home />);
  expect(true).toBe(true);
});
