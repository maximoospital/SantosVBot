/*
 * TWITTER APP CONFIGURATION
 * consumer_key
 * consumer_secret
 * access_token
 * access_token_secret
 */
require("dotenv").config();

module.exports = {
  consumer_key: process.env.CONSUMER_TOKEN,
  consumer_secret: process.env.CONSUMER_TOKEN_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
};