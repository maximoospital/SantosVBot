const { TwitterApi } = require('twitter-api-v2');
const config = require("./config");
const client = new TwitterApi(config);

// API
console.log("Tweeting...")
const retweet = async () => {
  
  const path = require('path');
  const mediaId = await client.v1.uploadMedia(path.join(__dirname, '/test.jpg'));
  const createdTweet = await client.v2.tweet({ text: 'Twitter is a fantastic social network. Look at this:', media: { media_ids: [mediaId] } });
  console.log(createdTweet);
};

retweet();
