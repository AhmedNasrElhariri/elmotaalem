"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProviders = void 0;
const user_model_1 = require("./user.model");
exports.UserProviders = [
    {
        provide: 'USER_MODEL',
        useFactory: (connection) => connection.model('User', user_model_1.UserSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=user.providers.js.map