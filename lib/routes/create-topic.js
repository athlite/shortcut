'use strict';

const Twitter = require('twitter');

const streams = new Map();

module.exports = {
  method: 'get',
  path: '/create-topic/{topic}',
  options: {
    handler: async (request, h) => {

      const topic = request.params.topic;
      if (!streams.has(topic)) {
        const stream = await request.server.methods.twitter.stream(topic);
        stream.on('data', (tweet) => {
          request.server.publish(`/topic/${topic}`, tweet);
        });
        stream.on('error', (err) => {
          console.log(err);
        });
        streams.set(topic, stream);
        return { message: `Created topic ${topic}. To subscribe use endpoint /topic/${topic}` }
      } else {
        return { message: `${topic} already exists` }
      }
    }
  }
};
