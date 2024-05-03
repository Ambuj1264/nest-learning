import { Injectable } from '@nestjs/common';
import { errorResponse, sucessResponse } from 'src/utility/commonfunction';
import { ApiResponse } from 'src/utility/types';
import { Employee } from './employee.entity';
import { Company } from 'src/api/copmany/company.entity';
@Injectable()
export class EmployeeService {
  public employee: Employee[] = [];

  async addemployeeService(employee: Employee): Promise<ApiResponse> {
    try {
      const { name, companyId, email } = employee;

      const findEmail = await Employee.findOne({
        where: { email, isDeleted: false },
      });

      if (findEmail) {
        return errorResponse('employee already exists', null);
      }
      const createEmployee = Employee.create({
        name,
        companyId,
        email,
      });

      await createEmployee.save();
      if (!createEmployee) {
        return errorResponse('employee not added', null);
      }
      return sucessResponse('employee added sucessfully', createEmployee);
    } catch (error) {
      return errorResponse(error.message, null);
    }
  }

  async updateemployeeServices(employee: Employee): Promise<ApiResponse> {
    try {
      const { id, name, companyId } = employee;

      const updateemployee = await Employee.update(
        { id, isDeleted: false },
        {
          name,
          companyId,
        },
      );

      if (!updateemployee.affected) {
        return errorResponse('employee not updated', null);
      }
      return sucessResponse('employee updated sucessfully', updateemployee);
    } catch (error) {
      return errorResponse(error.message, null);
    }
  }

  async deleteemployeeServices(employeeId: string): Promise<ApiResponse> {
    try {
      const id = employeeId;
      const deleteemployee = await Employee.update(
        { id, isDeleted: false },
        { isDeleted: true },
      );
      if (!deleteemployee.affected) {
        return errorResponse('employee not deleted', null);
      }
      return sucessResponse('employee deleted sucessfully', deleteemployee);
    } catch (error) {
      return errorResponse(error.message, null);
    }
  }

  async findAllemployees(): Promise<ApiResponse> {
    try {
      const findAll = Employee.createQueryBuilder('employee');

      const data = await findAll
        .leftJoinAndSelect(
          Company,
          'company',
          'employee.companyId ::uuid = company.id',
        )
        .where('employee.isDeleted = :isDeleted', { isDeleted: false })
        .andWhere('company.isDeleted = :isDeleted', { isDeleted: false })
        .getRawMany();

      return sucessResponse('employee list', data);
    } catch (error) {
      return errorResponse(error.message, null);
    }
  }
  async findEmployees(id: string): Promise<ApiResponse> {
    try {
      const findAll = Employee.createQueryBuilder('employee');

      const data = await findAll
        .leftJoinAndSelect(
          Company,
          'company',
          'employee.companyId ::uuid = company.id',
        )
        .where('employee.isDeleted = :isDeleted', { isDeleted: false })
        .andWhere('company.isDeleted = :isDeleted', { isDeleted: false })
        .andWhere('employee.id = :id', { id })
        .getRawOne();

      return sucessResponse('employee list', data);
    } catch (error) {
      return errorResponse(error.message, null);
    }
  }
}
