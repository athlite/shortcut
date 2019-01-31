import React from 'react';
import Tweet from './tweet';

// Generate a pseudo id
const pseudoId = () => Math.floor(Math.random() * Date.now() * 1000).toString(36);

/**
 * TweetList
 * Render a list of tweets.
 */
export default class TweetList extends React.Component {
  render () {
    return (
      <div className="tweet-list">
        {this.props.tweets.map((tweet, idx) => {
          return <Tweet isFirst={idx === 0} key={tweet.id|| pseudoId()} tweet={tweet} />
        })}
      </div>
    )
  }
}