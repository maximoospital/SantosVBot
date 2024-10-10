const { TwitterApi } = require('twitter-api-v2');
const config = require("./config");
const TwitterBot = new TwitterApi(config);

// API
console.log("Tweeting...")
const retweet = async () => {
  const { data: createdTweet } = await TwitterBot.v2.tweet('Test!', {
    poll: { duration_minutes: 120, options: ['Test 1', 'Test 2!'] },
  });
  console.log('Tweet', createdTweet.id, ':', createdTweet.text);
};

retweet();
