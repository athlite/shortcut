import React from 'react';
import ReactDOM from 'react-dom';

class Index extends React.Component {
  render () {
    return (
      <div>
        Hello from React
      </div>
    )
  }
}
const main = document.querySelector('#main');

ReactDOM.render(<Index />, main);
