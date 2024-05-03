import { BaseEntity } from 'typeorm';
export declare class Inventry extends BaseEntity {
    id: string;
    userId: string;
    bookId: string;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}
