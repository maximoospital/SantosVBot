const { TwitterApi } = require('twitter-api-v2');
const config = require("./config");
const client = new TwitterApi(config);

// API
console.log("Tweeting...")
const retweet = async () => {

  const mediaId = await client.v1.uploadMedia('test.jpg');
  const createdTweet = await client.v2.tweet('Hello!', { media_ids: mediaId });
  console.log('Tweet', createdTweet.id, ':', createdTweet.text);

};

retweet();
