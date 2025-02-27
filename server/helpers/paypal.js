require("dotenv").config();
const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: process.env.PAYPAL_MODE || "sandbox", // Default to sandbox if not set
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_SECRET_ID,
});

module.exports = paypal;
