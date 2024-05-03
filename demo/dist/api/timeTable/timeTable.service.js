"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTableService = void 0;
const commonfunction_1 = require("../../utility/commonfunction");
const timeTable_entity_1 = require("./timeTable.entity");
const common_1 = require("@nestjs/common");
const company_entity_1 = require("../copmany/company.entity");
const employee_entity_1 = require("../employee/employee.entity");
const typeorm_1 = require("typeorm");
let TimeTableService = class TimeTableService {
    constructor() {
        this.timeTable = [];
    }
    async addTimeTableService(timeTable) {
        try {
            const { companyId, startTime, endTime, date } = timeTable;
            const findTime = await timeTable_entity_1.TimeTable.findOne({
                where: {
                    companyId,
                    startTime: (0, typeorm_1.Between)(startTime, endTime),
                    date,
                    isDeleted: false,
                },
            });
            if (findTime) {
                return (0, commonfunction_1.errorResponse)('Already occupied', null);
            }
            const createTimeTable = timeTable_entity_1.TimeTable.create({
                companyId,
                startTime,
                endTime,
                date,
            });
            await createTimeTable.save();
            if (!createTimeTable) {
                return (0, commonfunction_1.errorResponse)('TimeTable not added', null);
            }
            return (0, commonfunction_1.sucessResponse)('TimeTable added sucessfully', createTimeTable);
        }
        catch (error) {
            return (0, commonfunction_1.errorResponse)(error.message, null);
        }
    }
    async updateTimeTableServices(timeTable) {
        try {
            const { id, companyId, startTime, endTime, date } = timeTable;
            const updateTimeTable = await timeTable_entity_1.TimeTable.update({ id, isDeleted: false }, {
                companyId,
                startTime,
                endTime,
                date,
            });
            if (!updateTimeTable.affected) {
                return (0, commonfunction_1.errorResponse)('TimeTable not updated', null);
            }
            return (0, commonfunction_1.sucessResponse)('TimeTable updated sucessfully', updateTimeTable);
        }
        catch (error) {
            return (0, commonfunction_1.errorResponse)(error.message, null);
        }
    }
    async deleteTimeTableServices(timeTableId) {
        try {
            const id = timeTableId;
            const deleteTimeTable = await timeTable_entity_1.TimeTable.update({ id, isDeleted: false }, { isDeleted: true });
            if (!deleteTimeTable.affected) {
                return (0, commonfunction_1.errorResponse)('TimeTable not deleted', null);
            }
            return (0, commonfunction_1.sucessResponse)('TimeTable deleted sucessfully', deleteTimeTable);
        }
        catch (error) {
            return (0, commonfunction_1.errorResponse)(error.message, null);
        }
    }
    async findTimeTables(id) {
        try {
            const findAll = timeTable_entity_1.TimeTable.createQueryBuilder('timeTable');
            const data = await findAll
                .leftJoinAndSelect(company_entity_1.Company, 'company', 'timeTable.companyId ::uuid = company.id')
                .leftJoinAndSelect(employee_entity_1.Employee, 'employee', 'timeTable.employeeId ::uuid = employee.id')
                .where('employee.isDeleted = :isDeleted', { isDeleted: false })
                .andWhere('company.isDeleted = :isDeleted', { isDeleted: false })
                .andWhere('timeTable.isDeleted = :isDeleted', { isDeleted: false })
                .andWhere('employee.id = :id', { id })
                .getRawOne();
            return (0, commonfunction_1.sucessResponse)('TimeTable list', data);
        }
        catch (error) {
            return (0, commonfunction_1.errorResponse)(error.message, null);
        }
    }
    async findAllTimeTables() {
        try {
            const findAll = timeTable_entity_1.TimeTable.createQueryBuilder('timeTable');
            const data = await findAll
                .leftJoinAndSelect(company_entity_1.Company, 'company', 'timeTable.companyId ::uuid = company.id')
                .leftJoinAndSelect(employee_entity_1.Employee, 'employee', 'timeTable.employeeId ::uuid = employee.id')
                .where('employee.isDeleted = :isDeleted', { isDeleted: false })
                .andWhere('company.isDeleted = :isDeleted', { isDeleted: false })
                .andWhere('timeTable.isDeleted = :isDeleted', { isDeleted: false })
                .getRawMany();
            return (0, commonfunction_1.sucessResponse)('TimeTable list', data);
        }
        catch (error) {
            return (0, commonfunction_1.errorResponse)(error.message, null);
        }
    }
};
exports.TimeTableService = TimeTableService;
exports.TimeTableService = TimeTableService = __decorate([
    (0, common_1.Injectable)()
], TimeTableService);
//# sourceMappingURL=timeTable.service.js.map