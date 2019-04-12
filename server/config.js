"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = require("./logger");
var dotenv_1 = require("dotenv");
// load dotenv
var configLoadResult = dotenv_1.config();
if (configLoadResult.error) {
    logger_1.logger.info("Not using env file: " + configLoadResult.error);
}
else {
    logger_1.logger.info('Environment config loaded');
    logger_1.logger.silly(JSON.stringify(configLoadResult.parsed));
}
exports.config = {
    ERROR: configLoadResult.error,
    IsProd: (process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() == 'prod') || (process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() == 'production') ? true : false,
    Port: process.env.PORT,
    Morgan: process.env.MORGAN,
    COSMOSDB_CONNECTIONSTRING: process.env.COSMOSDB_CONNECTIONSTRING
};
