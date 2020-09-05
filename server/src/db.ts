const mongoose = require("mongoose");
const logger = require("pino")();

function init() {
  logger.info("Connect to your database here");
}

module.exports = { init: init };
