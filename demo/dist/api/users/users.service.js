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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
const commonfunction_1 = require("../../utility/commonfunction");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findAll() {
        try {
            const findUser = await user_entity_1.User.find({ where: { isDeleted: false } });
            return (0, commonfunction_1.sucessResponse)('user list', findUser);
        }
        catch (error) {
            return (0, commonfunction_1.errorResponse)(error.message, null);
        }
    }
    async findOne(id) {
        try {
            const findUser = await user_entity_1.User.findOne({ where: { id, isDeleted: false } });
            return (0, commonfunction_1.sucessResponse)('user list', findUser);
        }
        catch (error) {
            return (0, commonfunction_1.errorResponse)(error.message, null);
        }
    }
    async create(user) {
        try {
            const { name, email, password, role } = user;
            if (!name || !email || !password) {
                return (0, commonfunction_1.errorResponse)('name, email, password  are required', null);
            }
            const findUser = await user_entity_1.User.findOne({
                where: { email, isDeleted: false },
            });
            if (findUser) {
                return (0, commonfunction_1.errorResponse)('user already exists', null);
            }
            console.log(password, 'password');
            const hashedPassword = await bcrypt.hash(password, 10);
            console.log(hashedPassword, 'hassedPassword');
            const createUser = user_entity_1.User.create({
                name,
                email,
                password: hashedPassword,
            });
            await createUser.save();
            if (!createUser) {
                return (0, commonfunction_1.errorResponse)('user not created', null);
            }
            return (0, commonfunction_1.sucessResponse)('user created sucessfully', createUser);
        }
        catch (error) {
            return (0, commonfunction_1.errorResponse)(error.message, null);
        }
    }
    async update(id, user) {
        try {
            const { name, email } = user;
            const updateUser = await user_entity_1.User.update({ id, isDeleted: false }, { name, email });
            if (!updateUser.affected) {
                return (0, commonfunction_1.errorResponse)('user not updated', null);
            }
            return (0, commonfunction_1.sucessResponse)('user updated sucessfully', updateUser);
        }
        catch (error) {
            return (0, commonfunction_1.errorResponse)(error.message, null);
        }
    }
    async delete(id) {
        try {
            const deleteBook = await user_entity_1.User.update({ id, isDeleted: false }, { isDeleted: true });
            if (!deleteBook.affected) {
                return (0, commonfunction_1.errorResponse)('user not deleted', null);
            }
            return (0, commonfunction_1.sucessResponse)('user deleted sucessfully', deleteBook);
        }
        catch (error) {
            return (0, commonfunction_1.errorResponse)(error.message, null);
        }
    }
    async login(email, password) {
        try {
            const findUser = await user_entity_1.User.findOne({
                where: { email, isDeleted: false },
            });
            if (!findUser) {
                return (0, commonfunction_1.errorResponse)('user not found', null);
            }
            const isMatch = await bcrypt.compare(password, findUser.password);
            if (!isMatch) {
                return (0, commonfunction_1.errorResponse)('password not match', null);
            }
            console.log(findUser, 'findUser');
            const createToken = await jwt.sign({ user: findUser }, process.env.JWT_SECRET, {
                expiresIn: '30d',
            });
            const loginUser = {
                userData: findUser,
                token: createToken,
            };
            return (0, commonfunction_1.sucessResponse)('user found', loginUser);
        }
        catch (error) {
            return (0, commonfunction_1.errorResponse)(error.message, null);
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map