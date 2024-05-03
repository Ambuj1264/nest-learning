"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventryController = void 0;
const common_1 = require("@nestjs/common");
const inventry_service_1 = require("./inventry.service");
const auth_module_1 = require("../../auth/auth.module");
let InventryController = class InventryController {
    constructor(inventryService) {
        this.inventryService = inventryService;
    }
    getAllInventry() {
        return this.inventryService.getAllInventry();
    }
    getInventryById() {
        return 'Inventry Details';
    }
    createInventry(body) {
        return this.inventryService.createInventry(body);
    }
};
exports.InventryController = InventryController;
__decorate([
    (0, common_1.Get)('/findAll'),
    (0, common_1.UseGuards)(auth_module_1.AuthModule),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InventryController.prototype, "getAllInventry", null);
__decorate([
    (0, common_1.Get)(':id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InventryController.prototype, "getInventryById", null);
__decorate([
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InventryController.prototype, "createInventry", null);
exports.InventryController = InventryController = __decorate([
    (0, common_1.Controller)('inventry'),
    __metadata("design:paramtypes", [inventry_service_1.InventryService])
], InventryController);
//# sourceMappingURL=inventry.controller.js.map