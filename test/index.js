'use strict';

// Load modules

const Code = require('code');
const Lab = require('lab');
const Nes = require('nes');
const Server = require('../server');
const Package = require('../package.json');

// Test shortcuts
const { describe, it, before } = exports.lab = Lab.script();
const { expect } = Code;

describe('Hapi', () => {
  describe('Deployment', () => {

    it('registers the main plugin.', async () => {

      const server = await Server.deployment();

      expect(server.registrations[Package.name]).to.exist();
    });
  });

  describe('Routes', () => {

    let server;

    before(async () => {
      server = await Server.deployment();
    }); 

    it('should create new topic on javascript', async () => {
      const response = await server.inject({
        method: 'get',
        url: '/create-topic/javascript'
      });
      expect(response.result.message).to.equal('Created topic javascript. To subscribe use endpoint /topic/javascript');
    });
  });
});