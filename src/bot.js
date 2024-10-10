const { TwitterApi } = require('twitter-api-v2');
const config = require("./config");
const TwitterBot = new TwitterApi(config);

// API
console.log("Tweeting...")
const retweet = async () => {
  const createdTweet = await client.v1.tweet('twitter-api-v2 is awesome!', {
    lat: 1.23,
    long: -13.392,
  });
  console.log('Tweet', createdTweet.id_str, ':', createdTweet.full_text);
};

retweet();
