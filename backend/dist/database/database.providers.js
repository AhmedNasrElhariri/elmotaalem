"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await typeorm_1.createConnection({
            type: 'mongodb',
            host: '127.0.0.1',
            port: 27017,
            username: '',
            password: '',
            database: 'elmotaalem',
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            synchronize: true,
        }),
    },
];
//# sourceMappingURL=database.providers.js.map