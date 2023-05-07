"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
const validator_1 = require("validator");
exports.UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true],
    },
    email: {
        type: String,
        validate(val) {
            if (!validator_1.default.isEmail(val))
                throw new Error('Enter a validate Email');
        },
    },
    password: {
        type: String,
        required: [true],
    },
    phone: {
        type: Number,
        unique: true,
    },
});
exports.UserSchema.set('timestamps', true);
//# sourceMappingURL=user.model.js.map