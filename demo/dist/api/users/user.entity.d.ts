import { BaseEntity } from 'typeorm';
export declare class User extends BaseEntity {
    id: string;
    name: string;
    email: string;
    password: string;
    role: string;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}
