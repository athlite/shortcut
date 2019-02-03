
import React from 'react';
import { render } from 'react-testing-library'
import Prof from './prof';

describe('Prof Component', () => {
  
  test('should render element', () => {
    const prof = render(<Prof startedAt={Date.now()} count={1} />);
    expect(prof.container.querySelector('.prof')).toBeTruthy();
  });

  test('should not render without startedAt prop', () => {
    const prof = render(<Prof count={1} />);
    expect(prof.container.querySelector('.prof')).toBeFalsy();
  });
});
