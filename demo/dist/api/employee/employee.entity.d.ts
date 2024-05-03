import { BaseEntity } from 'typeorm';
export declare class Employee extends BaseEntity {
    id: string;
    companyId: string;
    name: string;
    email: string;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}
