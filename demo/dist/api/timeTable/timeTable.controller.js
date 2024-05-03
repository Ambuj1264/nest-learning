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
exports.TimeTableController = void 0;
const common_1 = require("@nestjs/common");
const timeTable_service_1 = require("./timeTable.service");
const timeTable_entity_1 = require("./timeTable.entity");
let TimeTableController = class TimeTableController {
    constructor(timeTableService) {
        this.timeTableService = timeTableService;
    }
    getAllTimeTable() {
        return this.timeTableService.findAllTimeTables();
    }
    updateTimeTable(timeTable) {
        return this.timeTableService.updateTimeTableServices(timeTable);
    }
    deleteTimeTable(timeTableId) {
        return this.timeTableService.deleteTimeTableServices(timeTableId);
    }
    addTimeTable(timeTable) {
        return this.timeTableService.addTimeTableService(timeTable);
    }
};
exports.TimeTableController = TimeTableController;
__decorate([
    (0, common_1.Get)('/findAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TimeTableController.prototype, "getAllTimeTable", null);
__decorate([
    (0, common_1.Put)('/update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [timeTable_entity_1.TimeTable]),
    __metadata("design:returntype", Promise)
], TimeTableController.prototype, "updateTimeTable", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TimeTableController.prototype, "deleteTimeTable", null);
__decorate([
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [timeTable_entity_1.TimeTable]),
    __metadata("design:returntype", Promise)
], TimeTableController.prototype, "addTimeTable", null);
exports.TimeTableController = TimeTableController = __decorate([
    (0, common_1.Controller)('timeTable'),
    __metadata("design:paramtypes", [timeTable_service_1.TimeTableService])
], TimeTableController);
//# sourceMappingURL=timeTable.controller.js.map