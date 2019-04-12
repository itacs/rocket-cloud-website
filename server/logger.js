"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = require("winston");
exports.logger = winston_1.createLogger({
    level: 'info',
    format: winston_1.format.json(),
    transports: [
        new winston_1.transports.Console({
            level: 'silly',
            format: winston_1.format.combine(winston_1.format.simple(), winston_1.format.colorize())
        })
    ]
});
