"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const express_rate_limit_1 = require("express-rate-limit");
const port = 3000;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((0, express_rate_limit_1.default)({
        windowMs: 5 * 60 * 1000,
        max: 200,
        message: 'Rate limit exceeded. Please try again later.',
    }));
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map