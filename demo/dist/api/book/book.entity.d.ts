import { BaseEntity } from 'typeorm';
export declare class BooksEntity extends BaseEntity {
    id: string;
    title: string;
    author: string;
    published: string;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}
