const { TwitterApi } = require('twitter-api-v2');
const config = require("./config");
const client = new TwitterApi(config);

// API
console.log("Tweeting...")
const retweet = async () => {
  const fs = require('fs');
  console.log('Directory contents:', fs.readdirSync('.'));
  
  const path = require('path');
  const mediaId = await client.v1.uploadMedia(path.join(__dirname, '/src/test.jpg'));
  const createdTweet = await client.v2.tweet('Hello!', { media_ids: mediaId });
  console.log('Tweet', createdTweet.id, ':', createdTweet.text);

};

retweet();
