import React from 'react';

export default class Waiting extends React.Component {
  render() {
    if (!this.props.pulsate) {
      return null;
    }
    return (
      <div style={{ textAlign: 'center' }}>
        <svg height="100" width="100">
          <circle cx={50} cy={50} r={25} stroke="black" strokeWidth="1" fill="orange">
            <animate attributeName="r" begin="0s" dur="1s" repeatCount="indefinite" from="5%" to="25%" />
          </circle>
        </svg>
        <p> Waiting for tweets .. </p>
      </div>
    )
  }
}