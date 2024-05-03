import { ApiResponse } from 'src/utility/types';
import { TimeTableService } from './timeTable.service';
import { TimeTable } from './timeTable.entity';
export declare class TimeTableController {
    private timeTableService;
    constructor(timeTableService: TimeTableService);
    getAllTimeTable(): Promise<ApiResponse>;
    updateTimeTable(timeTable: TimeTable): Promise<ApiResponse>;
    deleteTimeTable(timeTableId: string): Promise<ApiResponse>;
    addTimeTable(timeTable: TimeTable): Promise<ApiResponse>;
}
