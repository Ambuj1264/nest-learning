"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventryService = void 0;
const common_1 = require("@nestjs/common");
const commonfunction_1 = require("../../utility/commonfunction");
const inventry_entity_1 = require("./inventry.entity");
const user_entity_1 = require("../users/user.entity");
const book_entity_1 = require("../book/book.entity");
let InventryService = class InventryService {
    async getAllInventry() {
        try {
            const findInventry = inventry_entity_1.Inventry.createQueryBuilder('inventry');
            const data = await findInventry
                .leftJoinAndSelect(user_entity_1.User, 'user', 'inventry.userId ::uuid = user.id')
                .leftJoinAndSelect(book_entity_1.BooksEntity, 'books', 'inventry.bookId ::uuid = books.id')
                .where('books.isDeleted = :isDeleted', { isDeleted: false })
                .andWhere('inventry.isDeleted = :isDeleted', { isDeleted: false })
                .andWhere('user.isDeleted = :isDeleted', { isDeleted: false })
                .orderBy('inventry.createdAt', 'DESC')
                .getRawMany();
            return (0, commonfunction_1.sucessResponse)('inventry list', data);
        }
        catch (error) {
            return (0, commonfunction_1.errorResponse)(error.message, null);
        }
    }
    async createInventry({ bookId, userId, }) {
        try {
            const createInventry = inventry_entity_1.Inventry.create({
                bookId,
                userId,
            });
            await createInventry.save();
            if (!createInventry) {
                return (0, commonfunction_1.errorResponse)('inventry not created', null);
            }
            return (0, commonfunction_1.sucessResponse)('inventry created sucessfully', createInventry);
        }
        catch (error) {
            return (0, commonfunction_1.errorResponse)(error.message, null);
        }
    }
};
exports.InventryService = InventryService;
exports.InventryService = InventryService = __decorate([
    (0, common_1.Injectable)()
], InventryService);
//# sourceMappingURL=inventry.service.js.map