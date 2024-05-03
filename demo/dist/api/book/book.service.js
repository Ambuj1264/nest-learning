"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const book_entity_1 = require("./book.entity");
const commonfunction_1 = require("../../utility/commonfunction");
let BookService = class BookService {
    constructor() {
        this.books = [];
    }
    async addBookService(book) {
        try {
            const { title, author, published } = book;
            const createBook = book_entity_1.BooksEntity.create({
                title,
                author,
                published,
            });
            await createBook.save();
            if (!createBook) {
                return (0, commonfunction_1.errorResponse)('book not added', null);
            }
            return (0, commonfunction_1.sucessResponse)('book added sucessfully', createBook);
        }
        catch (error) {
            return (0, commonfunction_1.errorResponse)(error.message, null);
        }
    }
    async updateBookServices(book) {
        try {
            const { id, title, author, published } = book;
            const updateBook = await book_entity_1.BooksEntity.update({ id, isDeleted: false }, {
                title,
                author,
                published,
            });
            if (!updateBook.affected) {
                return (0, commonfunction_1.errorResponse)('book not updated', null);
            }
            return (0, commonfunction_1.sucessResponse)('book updated sucessfully', updateBook);
        }
        catch (error) {
            return (0, commonfunction_1.errorResponse)(error.message, null);
        }
    }
    async deleteBookServices(bookId) {
        try {
            const id = bookId;
            const deleteBook = await book_entity_1.BooksEntity.update({ id, isDeleted: false }, { isDeleted: true });
            if (!deleteBook.affected) {
                return (0, commonfunction_1.errorResponse)('book not deleted', null);
            }
            return (0, commonfunction_1.sucessResponse)('book deleted sucessfully', deleteBook);
        }
        catch (error) {
            return (0, commonfunction_1.errorResponse)(error.message, null);
        }
    }
    async findAllBooks() {
        try {
            const findAll = await book_entity_1.BooksEntity.find({ where: { isDeleted: false } });
            return (0, commonfunction_1.sucessResponse)('book list', findAll);
        }
        catch (error) {
            return (0, commonfunction_1.errorResponse)(error.message, null);
        }
    }
};
exports.BookService = BookService;
exports.BookService = BookService = __decorate([
    (0, common_1.Injectable)()
], BookService);
//# sourceMappingURL=book.service.js.map