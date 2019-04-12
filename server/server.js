"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var expressRequestId = require("express-request-id");
var mongoose_1 = require("mongoose");
var logger_1 = require("./logger");
var config_1 = require("./config");
var routes_1 = require("./routes");
// connect to db
mongoose_1.connect(config_1.config.COSMOSDB_CONNECTIONSTRING, { useNewUrlParser: true })
    .then(function () {
    logger_1.logger.info("connection to db established (url: " + config_1.config.COSMOSDB_CONNECTIONSTRING + ")");
})
    .catch(function (err) {
    logger_1.logger.error("unable to connect to db (url: " + config_1.config.COSMOSDB_CONNECTIONSTRING + ")", err);
});
// create app
var app = express();
app.use(expressRequestId());
app.use(morgan(config_1.config.Morgan));
// parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// routes
app.use('/', routes_1.routes);
// listen on port
app.listen(config_1.config.Port, function () {
    logger_1.logger.info("Web application listening on http://localhost:" + config_1.config.Port + "/");
});
