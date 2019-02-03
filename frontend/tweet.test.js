
import React from 'react';
import { render } from 'react-testing-library'
import Tweet from './tweet';

describe('Tweet Component', () => {
  it('should render', () => {
    
    const tweet = render(<Tweet tweet={{
      text: 'Hello world',
      user: {
        name: 'John Doe'
      }
    }} />);

    expect(tweet.container.querySelector('.text')).toBeTruthy();
    expect(tweet.container.querySelector('.user')).toBeTruthy();
  });

  it ('should append is-first to className', () => {
    const tweet = render(<Tweet isFirst={true} tweet={{
      text: 'Hello world',
      user: {
        name: 'John Doe'
      }
    }} />);
    expect(tweet.container.querySelector('.tweet.is-first')).toBeTruthy();
  });
});
