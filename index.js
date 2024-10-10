const config = require('./config');

// Using Twitter library
const Bot = new Twitter(config);

// Tweet a test message
Bot.tweet('Hello World!');