
import React from 'react'
import './tweet.css';

/**
 * Tweet
 * Shows a tweet.
 */
export default class Tweet extends React.Component {
  render() {

    const klass = [`tweet`, `${this.props.isFirst ? 'is-first' : ''}`].filter(k => k).join(' ');
    
    if (!this.props.tweet) {
      return (
        <div className={klass}>
          <div className="text">Oops up! Missing tweet?</div>
        </div>
      )
    }
    
    const userName = this.props.tweet.user && this.props.tweet.user.name || 'Unknown';

    return (
      <div className={klass}>
        <div className="text">{this.props.tweet.text}</div>
        <div className="user">{userName}</div>
      </div>
    )
  }
}