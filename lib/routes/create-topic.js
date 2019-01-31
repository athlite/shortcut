'use strict';

const Twitter = require('twitter');

const streams = {};

module.exports = {
  method: 'get',
  path: '/create-topic/{topic}',
  options: {
    handler: async (request, h) => {

      const topic = request.params.topic;

      streams[topic] = await request.server.methods.twitter.stream(topic);
      console.log(streams[topic]);
      stream.on('data', (tweet) => {
        request.server.publish(`/topic/${topic}`, tweet);
      });

      stream.on('error', (err) => {
        console.log(err);
      });

      return { message: 'ok' };
    }
  }
};
