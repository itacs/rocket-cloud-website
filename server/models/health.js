"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var healthSchema = new mongoose_1.Schema({
    date: {
        type: String,
        lowercase: true,
        required: true
    }
});
exports.Health = mongoose_1.model('health', healthSchema, 'health');
