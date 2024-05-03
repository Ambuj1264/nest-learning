import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiResponse } from 'src/utility/types';
import { TimeTableService } from './timeTable.service';
import { TimeTable } from './timeTable.entity';

@Controller('timeTable')
export class TimeTableController {
  constructor(private timeTableService: TimeTableService) {}

  @Get('/findAll')
  getAllTimeTable(): Promise<ApiResponse> {
    return this.timeTableService.findAllTimeTables();
  }
  @Put('/update')
  updateTimeTable(@Body() timeTable: TimeTable): Promise<ApiResponse> {
    return this.timeTableService.updateTimeTableServices(timeTable);
  }

  @Delete('/delete/:id')
  deleteTimeTable(@Param('id') timeTableId: string): Promise<ApiResponse> {
    return this.timeTableService.deleteTimeTableServices(timeTableId);
  }

  @Post('/add')
  addTimeTable(@Body() timeTable: TimeTable): Promise<ApiResponse> {
    return this.timeTableService.addTimeTableService(timeTable);
  }
}
