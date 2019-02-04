
import React from 'react';
import { render } from 'react-testing-library'
import TweetList from '../tweet-list';

describe('TweetList Component', () => {
  it('should render', () => {
    
    const tweetList = render(<TweetList tweets={[{
      text: 'Hello world 1',
      user: {
        name: 'John Doe'
      }
    }, {
      text: 'Hello world 2',
      user: {
        name: 'Jane Doe'
      }
    }]} />);

    expect(tweetList.container.querySelector('.tweet-list').childElementCount).toBe(2);
  });
});
