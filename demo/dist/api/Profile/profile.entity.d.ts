import { BaseEntity } from 'typeorm';
export declare class Profile extends BaseEntity {
    id: string;
    gender: string;
    photo: string;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}
