"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const commonfunction_1 = require("../../utility/commonfunction");
const company_entity_1 = require("./company.entity");
const user_entity_1 = require("../users/user.entity");
let CompanyService = class CompanyService {
    constructor() {
        this.companys = [];
    }
    async addCompanyService(companys, password) {
        try {
            const { email, name } = companys;
            if (!email || !name || !password) {
                return (0, commonfunction_1.errorResponse)('name, email, password  are required', null);
            }
            const findCompany = await company_entity_1.Company.findOne({
                where: { email, isDeleted: false },
            });
            if (findCompany) {
                return (0, commonfunction_1.errorResponse)('Company already exists', null);
            }
            const createCompany = await company_entity_1.Company.create({
                email,
                name,
            });
            await createCompany.save();
            if (!createCompany) {
                return (0, commonfunction_1.errorResponse)('Company not added', null);
            }
            const createAdmin = await user_entity_1.User.create({
                email,
                name,
                password,
                role: 'admin',
            });
            const createUser = await createAdmin.save();
            if (!createUser) {
                return (0, commonfunction_1.errorResponse)('user not created', null);
            }
            return (0, commonfunction_1.sucessResponse)('Company added sucessfully', createCompany);
        }
        catch (error) {
            return (0, commonfunction_1.errorResponse)(error.message, null);
        }
    }
    async updateCompanyServices(companys) {
        try {
            const { id, name, email } = companys;
            const updateCompany = await company_entity_1.Company.update({ id, isDeleted: false }, {
                name,
                email,
            });
            if (!updateCompany.affected) {
                return (0, commonfunction_1.errorResponse)('Company not updated', null);
            }
            return (0, commonfunction_1.sucessResponse)('Company updated sucessfully', updateCompany);
        }
        catch (error) {
            return (0, commonfunction_1.errorResponse)(error.message, null);
        }
    }
    async deleteCompanyServices(companyId) {
        try {
            const id = companyId;
            const deleteCompany = await company_entity_1.Company.update({ id, isDeleted: false }, { isDeleted: true });
            if (!deleteCompany.affected) {
                return (0, commonfunction_1.errorResponse)('Company not deleted', null);
            }
            return (0, commonfunction_1.sucessResponse)('Company deleted sucessfully', deleteCompany);
        }
        catch (error) {
            return (0, commonfunction_1.errorResponse)(error.message, null);
        }
    }
    async findAllCompanys() {
        try {
            const findAll = await company_entity_1.Company.find({ where: { isDeleted: false } });
            return (0, commonfunction_1.sucessResponse)('Company list', findAll);
        }
        catch (error) {
            return (0, commonfunction_1.errorResponse)(error.message, null);
        }
    }
    async findCompanys(id) {
        try {
            console.log(id, 'id');
            const findAll = await company_entity_1.Company.findOne({
                where: { isDeleted: false, id },
            });
            return (0, commonfunction_1.sucessResponse)('Company list', findAll);
        }
        catch (error) {
            return (0, commonfunction_1.errorResponse)(error.message, null);
        }
    }
};
exports.CompanyService = CompanyService;
exports.CompanyService = CompanyService = __decorate([
    (0, common_1.Injectable)()
], CompanyService);
//# sourceMappingURL=company.service.js.map