"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const commonfunction_1 = require("../../utility/commonfunction");
const employee_entity_1 = require("./employee.entity");
const company_entity_1 = require("../copmany/company.entity");
let EmployeeService = class EmployeeService {
    constructor() {
        this.employee = [];
    }
    async addemployeeService(employee) {
        try {
            const { name, companyId, email } = employee;
            const findEmail = await employee_entity_1.Employee.findOne({
                where: { email, isDeleted: false },
            });
            if (findEmail) {
                return (0, commonfunction_1.errorResponse)('employee already exists', null);
            }
            const createEmployee = employee_entity_1.Employee.create({
                name,
                companyId,
                email,
            });
            await createEmployee.save();
            if (!createEmployee) {
                return (0, commonfunction_1.errorResponse)('employee not added', null);
            }
            return (0, commonfunction_1.sucessResponse)('employee added sucessfully', createEmployee);
        }
        catch (error) {
            return (0, commonfunction_1.errorResponse)(error.message, null);
        }
    }
    async updateemployeeServices(employee) {
        try {
            const { id, name, companyId } = employee;
            const updateemployee = await employee_entity_1.Employee.update({ id, isDeleted: false }, {
                name,
                companyId,
            });
            if (!updateemployee.affected) {
                return (0, commonfunction_1.errorResponse)('employee not updated', null);
            }
            return (0, commonfunction_1.sucessResponse)('employee updated sucessfully', updateemployee);
        }
        catch (error) {
            return (0, commonfunction_1.errorResponse)(error.message, null);
        }
    }
    async deleteemployeeServices(employeeId) {
        try {
            const id = employeeId;
            const deleteemployee = await employee_entity_1.Employee.update({ id, isDeleted: false }, { isDeleted: true });
            if (!deleteemployee.affected) {
                return (0, commonfunction_1.errorResponse)('employee not deleted', null);
            }
            return (0, commonfunction_1.sucessResponse)('employee deleted sucessfully', deleteemployee);
        }
        catch (error) {
            return (0, commonfunction_1.errorResponse)(error.message, null);
        }
    }
    async findAllemployees() {
        try {
            const findAll = employee_entity_1.Employee.createQueryBuilder('employee');
            const data = await findAll
                .leftJoinAndSelect(company_entity_1.Company, 'company', 'employee.companyId ::uuid = company.id')
                .where('employee.isDeleted = :isDeleted', { isDeleted: false })
                .andWhere('company.isDeleted = :isDeleted', { isDeleted: false })
                .getRawMany();
            return (0, commonfunction_1.sucessResponse)('employee list', data);
        }
        catch (error) {
            return (0, commonfunction_1.errorResponse)(error.message, null);
        }
    }
    async findEmployees(id) {
        try {
            const findAll = employee_entity_1.Employee.createQueryBuilder('employee');
            const data = await findAll
                .leftJoinAndSelect(company_entity_1.Company, 'company', 'employee.companyId ::uuid = company.id')
                .where('employee.isDeleted = :isDeleted', { isDeleted: false })
                .andWhere('company.isDeleted = :isDeleted', { isDeleted: false })
                .andWhere('employee.id = :id', { id })
                .getRawOne();
            return (0, commonfunction_1.sucessResponse)('employee list', data);
        }
        catch (error) {
            return (0, commonfunction_1.errorResponse)(error.message, null);
        }
    }
};
exports.EmployeeService = EmployeeService;
exports.EmployeeService = EmployeeService = __decorate([
    (0, common_1.Injectable)()
], EmployeeService);
//# sourceMappingURL=employee.service.js.map