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
exports.BooksEntity = void 0;
const typeorm_1 = require("typeorm");
let BooksEntity = class BooksEntity extends typeorm_1.BaseEntity {
};
exports.BooksEntity = BooksEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id' }),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], BooksEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'title', nullable: true }),
    __metadata("design:type", String)
], BooksEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'author', nullable: true }),
    __metadata("design:type", String)
], BooksEntity.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'published', nullable: true }),
    __metadata("design:type", String)
], BooksEntity.prototype, "published", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'isDeleted', default: false }),
    __metadata("design:type", Boolean)
], BooksEntity.prototype, "isDeleted", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'createdAt', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], BooksEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'updatedAt', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], BooksEntity.prototype, "updatedAt", void 0);
exports.BooksEntity = BooksEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'books' })
], BooksEntity);
//# sourceMappingURL=book.entity.js.map