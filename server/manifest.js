'use strict';

const Path = require('path');
const Dotenv = require('dotenv');
const Confidence = require('confidence');
const Toys = require('toys');

// Pull .env into process.env
Dotenv.config({ path: `${__dirname}/.env` });

// Glue manifest as a confidence store
module.exports = new Confidence.Store({
  server: {
    host: {
      $filter: { $env: 'NODE_ENV' },
      production: '0.0.0.0',
      $default: 'localhost'
    },
    port: {
      $env: 'PORT',
      $coerce: 'number',
      $default: 3000
    },
    // Tell 'inert' where to find files ..
    routes: {
      files: {
        relativeTo: Path.join(__dirname, '..', 'public')
      }
    },
    debug: {
      $filter: { $env: 'NODE_ENV' },
      $default: {
        log: ['error'],
        request: ['error']
      },
      production: {
        request: ['implementation']
      }
    }
  },
  register: {
    plugins: [
      {
        plugin: 'inert'
      },
      {
        plugin: 'nes'
      },
      {
        plugin: '../lib', // routes
        options: {}
      },
      {
        plugin: {
          $filter: { $env: 'NODE_ENV' },
          $default: 'hpal-debug',
          production: Toys.noop
        }
      }
    ]
  }
});
