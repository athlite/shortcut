import React from 'react';

/**
 * Prof
 * Show the diff time between two tweets.
 */
export default class Prof extends React.Component {
  render() {

    const { start, end } = this.props;
    
    if (!(start && end)) {
      return null;
    }

    const spent = (end - start) / 1000;
    return (
      <div className="prof" style={{textAlign: 'center', fontWeight: '100'}}>
        One tweet per {spent}s
      </div>
    )
  }
}
