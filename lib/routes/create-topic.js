'use strict';

const Twitter = require('twitter');

let stream = null;

/**
 * GET /create-topic/{topic}
 * 
 * Create a new topic to be able to subscribe to it.
 */
module.exports = {
  method: 'get',
  path: '/create-topic/{topic}',
  options: {
    handler: async (request, h) => {

      const topic = request.params.topic;
      
      // Sorry, but there's a limit to Twitter's love for you.
      // Only stream one topic at a time.
      if (stream) {
        stream.destroy();
      }

      // create new stream
      stream = await request.server.methods.twitter.stream(topic);

      // Listen to the incoming data
      stream.on('data', (tweet) => {
        request.server.publish(`/topic/${topic}`, tweet);
      });

      // Something wrong occured
      stream.on('error', (err) => {
        console.log(err);
      });

      return { message: `Created topic ${topic}. To subscribe use endpoint /topic/${topic}` }
    }
  }
};
