const jwt = require("jsonwebtoken");
const env = require("../config/env");

module.exports = {
  sign(payload) {
    return jwt.sign(payload, env.jwt.accessSecret, { expiresIn: env.jwt.accessExpires });
  },
  verify(token) {
    return jwt.verify(token, env.jwt.accessSecret);
  },
};
