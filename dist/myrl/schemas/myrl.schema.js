"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.MyrlSchema = new mongoose.Schema({
    urlCode: String,
    oldUrl: String,
    newUrl: String,
    date: { type: String, default: Date.now() },
});
//# sourceMappingURL=myrl.schema.js.map