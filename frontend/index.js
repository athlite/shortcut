
import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Nes from 'nes';
import App from './app';
const client = new Nes.Client('ws://localhost:3000');
const main = document.querySelector('#main');
ReactDOM.render(<App client={client} />, main);
