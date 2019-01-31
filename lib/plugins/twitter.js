'use strict';

const Twitter = require('twitter');

/**
 * Generate server methods for twitter stream
 */
module.exports = {
  plugins: [{
    plugin: {
      name: 'twitter-client',
      register: async function (server, options) {

        const client = new Twitter(options.config);

        console.log('Hello from twitter client plugin');

        server.method('twitter.stream', function (track) {
          return client.stream('statuses/filter', { track });
        });
      }
    },
    options: {
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
