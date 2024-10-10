/*
 * TWITTER APP CONFIGURATION
 * consumer_key
 * consumer_secret
 * access_token
 * access_token_secret
 */
require("dotenv").config();

module.exports = {
  appKey: process.env.CONSUMER_TOKEN,
  appSecret: process.env.CONSUMER_TOKEN_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_TOKEN_SECRET,
};

