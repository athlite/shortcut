import React from 'react';
import TweetList from './tweet-list';
import CurrentTopic from './current-topic';
import Prof from './prof';
import SearchField from './search-field';
import Waiting from './waiting';
import {createTopic} from './api';
import './index.css'

export default class App extends React.Component {

  state = {
    topic: '',
    currentTopic: null,
    tweets: [],
    fetchActive: false
  };

  currentHandler = null;

  startedAt = null;

  tweetCount = 0;

  componentWillMount() {
    this.props.client.connect();
  }

  componentWillUnmount() {
    this.props.client.disconnect();
  }

  subscribe(topic) {

    if (this.state.currentTopic) {
      this.props.client.unsubscribe(`/topic/${this.state.currentTopic}`)
    }

    this.tweetCount = 0;
    this.startedAt = Date.now();

    this.setState({
      currentTopic: topic,
      topic: '',
      fetchActive: true
    }, () => {

      createTopic(topic).then(data => {

        this.currentHandler = ((tweet) => {

          this.tweetCount += 1;

          const _tweets = [tweet].concat(this.state.tweets);
          const tweets = _tweets.reduce(((acc, cur) => {
            if (acc.map(t => t.id).includes(cur.id)) {
              return acc;
            }
            return acc.concat(cur);
          }), []).slice(0, 10);
          this.setState({ fetchActive: false, tweets });
        }).bind(this);

        this.props.client.subscribe(`/topic/${topic}`, this.currentHandler);
      });
    });
  }

  render() {
    return (
      <div className="index container">
        <h1>Tweetstorm</h1>
        <CurrentTopic topic={this.state.currentTopic} />
        <Prof startedAt={this.startedAt} count={this.tweetCount} />
        <SearchField value={this.state.topic} onchange={topic => {
          this.setState({ topic });
        }} onenter={topic => {
          this.setState({ tweets: [] });
          this.subscribe(topic);
        }} />
        <Waiting pulsate={this.state.fetchActive} />
        <div>
          <TweetList tweets={this.state.tweets} />
        </div>
      </div>
    )
  }
}
