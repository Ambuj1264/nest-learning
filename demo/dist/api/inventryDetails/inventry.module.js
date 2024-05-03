"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventryModule = void 0;
const common_1 = require("@nestjs/common");
const inventry_service_1 = require("./inventry.service");
const inventry_controller_1 = require("./inventry.controller");
let InventryModule = class InventryModule {
};
exports.InventryModule = InventryModule;
exports.InventryModule = InventryModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [inventry_service_1.InventryService],
        controllers: [inventry_controller_1.InventryController],
        exports: [],
    })
], InventryModule);
//# sourceMappingURL=inventry.module.js.map