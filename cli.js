
/**
 * To be run this on the command line.
 * To run node client.js
 */

require('dotenv').config({ path: 'server/.env' });
const Readline = require('readline');
const Twitter = require('twitter');

const config = {
  consumer_key: process.env.TWITTER_API_KEY,
  consumer_secret: process.env.TWITTER_API_KEY_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

const rl = Readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const createStream = ( topic ) => {
  const client = new Twitter(config);
  const stream = client.stream('statuses/filter', { track: topic });
  stream.on('data', function (tweet) {
    console.log("");
    console.log(tweet.text);
    console.log(" - - - -");
  });
  return stream;
};

console.log("");
console.log("Welcome to tweetstorm!");
console.log("Please submit a topic for me to track.");
console.log("");

rl.setPrompt('Topic $ ');
rl.prompt(true);

const streams = new Map();

rl.on('line', (topic) => {
  console.log('Will stream topic:', topic);
  streams.forEach((v,k) => {
    v.destroy();
  });
  streams.clear();
  streams.set(topic, createStream(topic));
  rl.prompt(true);
});
