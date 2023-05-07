"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgetPasswordShema = void 0;
const mongoose = require("mongoose");
exports.ForgetPasswordShema = new mongoose.Schema({
    userId: String,
    request_status: {
        type: String,
        enum: ['vaild', 'invalid', 'done'],
    },
});
exports.ForgetPasswordShema.set('timestamps', true);
//# sourceMappingURL=forget-password.schema.js.map