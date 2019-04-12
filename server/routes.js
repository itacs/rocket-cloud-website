"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var express = require("express");
var logger_1 = require("./logger");
var history_1 = require("./models/history");
exports.routes = express.Router();
// static routes
logger_1.logger.silly("dir: " + __dirname);
var clientStaticRoute = __dirname + '/../client';
logger_1.logger.info("client static route: " + clientStaticRoute);
exports.routes.use('/', express.static(clientStaticRoute, { redirect: false }));
// const nodeModulesRoute = __dirname + '/../../node_modules';
// logger.info(`node modules route ${nodeModulesRoute}`);
// routes.use('/node_modules', express.static(nodeModulesRoute, { redirect: false }));
// routes
exports.routes.post('/api/history', function (req, res, next) {
    if (req.body.url) {
        var history_2 = new history_1.History({ url: 'http://www.google.de' });
        history_2.save(function (err) {
            if (err) {
                return res.status(500).json({ ok: false, error: err });
            }
            else {
                return res.status(200).json({ ok: true });
            }
        });
    }
    else {
        return res.status(500).json({ ok: false });
    }
});
// spa route
logger_1.logger.info('setup * route');
logger_1.logger.silly('is only required if website runs in production mode');
exports.routes.use('*', function (req, res, next) {
    if (res.finished) {
        return;
    }
    var pathToIndex = path.resolve(__dirname, '../client/index.html');
    res.sendfile(pathToIndex);
});
