
import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library'
import SearchField from './search-field';

describe('SearchField Component', () => {
  
  afterEach(cleanup);

  it('should call onChange on changes', () => {
    const value = ""
    const onchange = jest.fn();
    const onenter = jest.fn();
    const searchField = render(<SearchField onchange={onchange} onenter={onenter} value={value} />);
    const input = searchField.getByLabelText('Search:');
    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: 'nodejs' } });
    expect(onchange).toHaveBeenCalled();
  });

  it('should call onEnter on keypress enter', () => {
    const value = ""
    const onchange = jest.fn();
    const onenter = jest.fn();
    const searchField = render(<SearchField onchange={onchange} onenter={onenter} value={value} />);
    const input = searchField.getByLabelText('Search:');
    expect(input.value).toBe('');
    fireEvent.keyUp(input, { key: 'Enter', target: { value: 'nodejs' } });
    expect(onenter).toHaveBeenCalled();
  });
});
