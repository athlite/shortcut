'use strict';
/**
 * Inert - catchall that resolves to public directory.
 */
module.exports = {
  method: 'get',
  path: '/{param*}',
  handler: {
    directory: {
      path: '.',
      redirectToSlash: true,
      index: true
    }
  }
};
