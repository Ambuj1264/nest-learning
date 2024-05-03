import { BaseEntity } from 'typeorm';
export declare class Company extends BaseEntity {
    id: string;
    name: string;
    email: string;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}
