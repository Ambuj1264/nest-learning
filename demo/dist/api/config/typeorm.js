"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionSource = void 0;
const config_1 = require("@nestjs/config");
const dotenv_1 = require("dotenv");
const typeorm_1 = require("typeorm");
(0, dotenv_1.config)({ path: '.env' });
const config = {
    type: 'postgres',
    host: 'dpg-cnqobvi1hbls73drveeg-a.singapore-postgres.render.com',
    port: 5432,
    username: 'ambujsingh',
    password: 'Zy1Wl2skAUZhgc4TEb9HVtHr0XYL4fO7',
    database: 'ambujsingh',
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/migrations/*{.ts,.js}'],
    autoLoadEntities: true,
    synchronize: false,
    ssl: true,
    cache: true,
};
exports.default = (0, config_1.registerAs)('typeorm', () => config);
exports.connectionSource = new typeorm_1.DataSource(config);
//# sourceMappingURL=typeorm.js.map