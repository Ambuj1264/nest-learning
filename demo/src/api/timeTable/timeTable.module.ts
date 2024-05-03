import { Module } from '@nestjs/common';
import { TimeTableController } from './timeTable.controller';
import { TimeTableService } from './timeTable.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimeTable } from './timeTable.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TimeTable])],
  controllers: [TimeTableController],
  providers: [TimeTableService],
})
export class EmployeeModule {}
