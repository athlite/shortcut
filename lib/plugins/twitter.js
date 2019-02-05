'use strict';

const Stream = require('stream');
const Twitter = require('twitter');

const Faker = (times, stream) => {

  Array(times).fill(0).forEach((_, idx) => {

    setTimeout(() => {

      const id = (idx + 1).toString();
      stream.push({ text: 'Hello World ' + id, user: { name: 'John Doe' }, id });
    }, idx * 10);
  });
};

/**
 * Generate server methods for twitter stream
 */
module.exports = {
  plugins: [{
    plugin: {
      name: 'twitter-client',
      register: function (server, options) {

        if (options.env === 'test') {

          const stream = Stream.Readable({
            objectMode: true,
            read: function (size) { }
          });

          server.method('twitter.stream', (track) => {

            return stream;
          });

          Faker(5, stream);
        }
        else {

          console.log('Hello from twitter client plugin');

          const client = new Twitter(options.config);

          server.method('twitter.stream', (track) => {
            return client.stream('statuses/filter', { track });
          });
        }
      }
    },
    options: {
      env: process.env.NODE_ENV,
      config: {
        consumer_key: process.env.TWITTER_API_KEY,
        consumer_secret: process.env.TWITTER_API_KEY_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
      }
    }
  }],
  options: {}
};
