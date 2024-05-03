import { errorResponse, sucessResponse } from 'src/utility/commonfunction';
import { ApiResponse } from 'src/utility/types';
import { TimeTable } from './timeTable.entity';
import { Injectable } from '@nestjs/common';
import { Company } from 'src/api/copmany/company.entity';
import { Employee } from 'src/api/employee/employee.entity';
import { Between } from 'typeorm';
@Injectable()
export class TimeTableService {
  public timeTable: TimeTable[] = [];

  async addTimeTableService(timeTable: TimeTable): Promise<ApiResponse> {
    try {
      const { companyId, startTime, endTime, date } = timeTable;
      const findTime = await TimeTable.findOne({
        where: {
          companyId,
          startTime: Between(startTime, endTime),
          date,
          isDeleted: false,
        },
      });

      if (findTime) {
        return errorResponse('Already occupied', null);
      }
      const createTimeTable = TimeTable.create({
        companyId,
        startTime,
        endTime,
        date,
      });

      await createTimeTable.save();
      if (!createTimeTable) {
        return errorResponse('TimeTable not added', null);
      }
      return sucessResponse('TimeTable added sucessfully', createTimeTable);
    } catch (error) {
      return errorResponse(error.message, null);
    }
  }

  async updateTimeTableServices(timeTable: TimeTable): Promise<ApiResponse> {
    try {
      const { id, companyId, startTime, endTime, date } = timeTable;

      const updateTimeTable = await TimeTable.update(
        { id, isDeleted: false },
        {
          companyId,
          startTime,
          endTime,
          date,
        },
      );

      if (!updateTimeTable.affected) {
        return errorResponse('TimeTable not updated', null);
      }
      return sucessResponse('TimeTable updated sucessfully', updateTimeTable);
    } catch (error) {
      return errorResponse(error.message, null);
    }
  }

  async deleteTimeTableServices(timeTableId: string): Promise<ApiResponse> {
    try {
      const id = timeTableId;
      const deleteTimeTable = await TimeTable.update(
        { id, isDeleted: false },
        { isDeleted: true },
      );
      if (!deleteTimeTable.affected) {
        return errorResponse('TimeTable not deleted', null);
      }
      return sucessResponse('TimeTable deleted sucessfully', deleteTimeTable);
    } catch (error) {
      return errorResponse(error.message, null);
    }
  }

  async findTimeTables(id: string): Promise<ApiResponse> {
    try {
      const findAll = TimeTable.createQueryBuilder('timeTable');

      const data = await findAll
        .leftJoinAndSelect(
          Company,
          'company',
          'timeTable.companyId ::uuid = company.id',
        )
        .leftJoinAndSelect(
          Employee,
          'employee',
          'timeTable.employeeId ::uuid = employee.id',
        )
        .where('employee.isDeleted = :isDeleted', { isDeleted: false })
        .andWhere('company.isDeleted = :isDeleted', { isDeleted: false })
        .andWhere('timeTable.isDeleted = :isDeleted', { isDeleted: false })
        .andWhere('employee.id = :id', { id })
        .getRawOne();

      return sucessResponse('TimeTable list', data);
    } catch (error) {
      return errorResponse(error.message, null);
    }
  }
  async findAllTimeTables(): Promise<ApiResponse> {
    try {
      const findAll = TimeTable.createQueryBuilder('timeTable');

      const data = await findAll
        .leftJoinAndSelect(
          Company,
          'company',
          'timeTable.companyId ::uuid = company.id',
        )
        .leftJoinAndSelect(
          Employee,
          'employee',
          'timeTable.employeeId ::uuid = employee.id',
        )
        .where('employee.isDeleted = :isDeleted', { isDeleted: false })
        .andWhere('company.isDeleted = :isDeleted', { isDeleted: false })
        .andWhere('timeTable.isDeleted = :isDeleted', { isDeleted: false })
        .getRawMany();

      return sucessResponse('TimeTable list', data);
    } catch (error) {
      return errorResponse(error.message, null);
    }
  }
}
