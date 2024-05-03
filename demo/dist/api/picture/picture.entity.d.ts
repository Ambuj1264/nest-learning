import { BaseEntity } from 'typeorm';
export declare class Picture extends BaseEntity {
    id: string;
    link: string;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}
