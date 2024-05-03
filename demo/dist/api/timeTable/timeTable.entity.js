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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTable = void 0;
const typeorm_1 = require("typeorm");
let TimeTable = class TimeTable extends typeorm_1.BaseEntity {
};
exports.TimeTable = TimeTable;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id' }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], TimeTable.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'companyId', nullable: false }),
    __metadata("design:type", String)
], TimeTable.prototype, "companyId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'date', nullable: false }),
    __metadata("design:type", Date)
], TimeTable.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'startTime', nullable: false, type: 'time' }),
    __metadata("design:type", String)
], TimeTable.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'endTime', nullable: false, type: 'time' }),
    __metadata("design:type", String)
], TimeTable.prototype, "endTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'isDeleted', default: false }),
    __metadata("design:type", Boolean)
], TimeTable.prototype, "isDeleted", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'createdAt', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], TimeTable.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'updatedAt', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], TimeTable.prototype, "updatedAt", void 0);
exports.TimeTable = TimeTable = __decorate([
    (0, typeorm_1.Entity)({ name: 'timeTable' })
], TimeTable);
//# sourceMappingURL=timeTable.entity.js.map