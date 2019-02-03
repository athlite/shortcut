
import React from 'react';
import { render, cleanup } from 'react-testing-library'
import CurrentTopic from './current-topic';

describe('CurrentTopic Component', () => {
  
  afterEach(cleanup);

  it('should render default text when no topic', () => {
    const currentTopic = render(<CurrentTopic />);
    expect(currentTopic.queryByText('Do a query of a topic you like and see what happens ..')).toBeTruthy();
  });

  it ('should render the topic', () => {
    const currentTopic = render(<CurrentTopic topic="javascript" />);
    expect(currentTopic.queryByText('Current topic is: javascript')).toBeTruthy();
  });
});
