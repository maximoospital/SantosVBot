const Twitter = require("twitter");
const config = require("./config");
const TwitterBot = new Twitter(config);

// API
console.log("Tweeting...")
const retweet = () => {
  TwitterBot.post('statuses/update', {status: 'Test tweet'}, function(error, tweet, response) {
    console.log(response);
    if (!error) {
      console.log(tweet);
    }
  });
};

retweet();
