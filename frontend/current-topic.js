import React from 'react';

const style = {
  textAlign: 'center',
  fontWeight: '100'  
};

/**
 * Shows current topic. If topic is not set,
 * a initial text.
 */
export default class CurrentTopic extends React.Component {
  render() {
    const topic = this.props.topic;
    if (!topic) {
      return <p style={style}>Do a query of a topic you like and see what happens ..</p>
    }

    return (
      <p style={style}>
        Current topic is: {topic}
      </p>
    )
  }
}