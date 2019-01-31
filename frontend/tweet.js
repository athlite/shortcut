// sourceType: module

import React from 'react'
import './tweet.css';

export default class Tweet extends React.Component {
  render () {
    const klass = `tweet ${this.props.isFirst ? 'is-first': ''}`
    return (
      <div className={klass}>
        <div className="text">{this.props.tweet.text}</div>
        <div className="user">{this.props.tweet.user.name}</div>
      </div>
    )
  }
}