import { render } from '@testing-library/react';
import React from 'react';
import Home from '.';

test('dummy', () => {
  render(<Home />);
  expect(true).toBe(true);
});
