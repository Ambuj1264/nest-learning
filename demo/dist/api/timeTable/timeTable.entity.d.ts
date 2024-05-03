import { BaseEntity } from 'typeorm';
export declare class TimeTable extends BaseEntity {
    id: string;
    companyId: string;
    date: Date;
    startTime: string;
    endTime: string;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}
