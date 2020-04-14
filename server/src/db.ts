const mongoose = require("mongoose");
const logger = require("pino")();

function init() {
  logger.info("Connecting to MongoDB...");
}

module.exports = { init: init };
