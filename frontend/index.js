import React from 'react';
import ReactDOM from 'react-dom';
import Nes from 'nes';
import TweetList from './tweet-list';
import CurrentTopic from './current-topic';
import Prof from './prof';
import './index.css'

const client = new Nes.Client('ws://localhost:3000');

let prof = [];

class Index extends React.Component {

  state = {
    topic: '',
    currentTopic: null,
    tweets: [],
    prof: []
  };

  currentHandler = null;

  componentWillMount() {
    client.connect();
  }

  componentWillUnmount() {
    client.disconnect();
  }

  subscribe(topic) {

    if (this.state.currentTopic) {
      client.unsubscribe(`/topic/${this.state.currentTopic}`)
    }

    this.setState({
      currentTopic: topic,
      topic: ''
    }, () => {
      fetch(`/create-topic/${topic}`).then(res => res.json()).then(data => {
        this.currentHandler = ((tweet) => {
          
          prof = [Date.now()].concat(prof).slice(0,2);

          const _tweets = [tweet].concat(this.state.tweets);
          const tweets = _tweets.reduce(((acc, cur) => {
            if (acc.map(t => t.id).includes(cur.id)) {
              return acc;
            }
            return acc.concat(cur);
          }), []).slice(0, 10);
          this.setState({ tweets, prof });
        }).bind(this);
        client.subscribe(`/topic/${topic}`, this.currentHandler);
      });
    });
  }

  render() {
    return (
      <div className="index container">
        <h1>Tweetstorm</h1>
        <CurrentTopic topic={this.state.currentTopic} />
        <Prof start={prof[1]} end={prof[0]} />
        <div className="field">
          <label htmlFor="search">Search:</label>
          <input onChange={e => {
            this.setState({ topic: e.target.value })
          }} onKeyUp={e => {
            if (e.key === 'Enter') {
              this.subscribe(e.target.value);
            }
          }}
            value={this.state.topic}
            id="search"
            placeholder="for something ..."
            autoComplete="off" />
        </div>
        <div>
          <TweetList tweets={this.state.tweets} />
        </div>
      </div>
    )
  }
}

const main = document.querySelector('#main');

ReactDOM.render(<Index />, main);
