import { ApiResponse } from 'src/utility/types';
import { TimeTable } from './timeTable.entity';
export declare class TimeTableService {
    timeTable: TimeTable[];
    addTimeTableService(timeTable: TimeTable): Promise<ApiResponse>;
    updateTimeTableServices(timeTable: TimeTable): Promise<ApiResponse>;
    deleteTimeTableServices(timeTableId: string): Promise<ApiResponse>;
    findTimeTables(id: string): Promise<ApiResponse>;
    findAllTimeTables(): Promise<ApiResponse>;
}
