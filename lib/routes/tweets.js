'use strict';

module.exports = {
  method: 'get',
  path: '/tweets',
  options: {
    handler: async (request, h) => {
      return { message: 'Hello' }
    }
  }
};
