'use strict';

const Twitter = require('twitter');

module.exports = {
  method: 'get',
  path: '/tweets/{name}',
  options: {
    handler: async (request, h) => {
      const tweets = await request.server.methods.twitter.search(request.params.name);
      return { tweets };
    }
  }
};
