const Twitter = require("twitter");
const config = require("./config");
const TwitterBot = new Twitter(config);

// API

const retweet = () => {
  TwitterBot.post('statuses/update', {status: 'Test tweet'}, function(error, tweet, response) {
    if (!error) {
      console.log(tweet);
    }
  });
};

retweet();
