import React from 'react';

/**
 * Prof
 * Show the average tweets per second.
 */
export default class Prof extends React.Component {

  render() {

    const { startedAt, count } = this.props;

    if (!startedAt || count < 1) {
      return null;
    }

    const currentTime = Date.now();

    const timeSpent = (currentTime - startedAt);
    const numberOfTweetsPerSecond = ((count / timeSpent) * 1000).toFixed(2);

    return (
      <div className="prof" style={{ textAlign: 'center', fontWeight: '100' }}>
        Average, {numberOfTweetsPerSecond} tweets per sec.
      </div>
    )
  }
}
