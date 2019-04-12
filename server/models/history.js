"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var historySchema = new mongoose_1.Schema({
    url: {
        type: String,
        lowercase: true,
        required: true
    }
});
exports.History = mongoose_1.model('history', historySchema);
