import React from 'react';
import Tweet from './tweet';

export default class TweetList extends React.Component {
  render () {
    return (
      <div className="tweet-list">
        {this.props.tweets.map((tweet, idx) => {
          return <Tweet isFirst={idx === 0} key={tweet.id} tweet={tweet} />
        })}
      </div>
    )
  }
}