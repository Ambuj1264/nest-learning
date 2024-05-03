import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiResponse } from 'src/utility/types';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Get('/findAll')
  getAllEmployee(): Promise<ApiResponse> {
    return this.employeeService.findAllemployees();
  }

  @Get('/findOne')
  getEmployee(@Body() employee: Employee): Promise<ApiResponse> {
    return this.employeeService.findEmployees(employee.id);
  }
  @Put('/update')
  updateEmployee(@Body() employee: Employee): Promise<ApiResponse> {
    return this.employeeService.updateemployeeServices(employee);
  }

  @Delete('/delete/:id')
  deleteEmployee(@Param('id') employeeId: string): Promise<ApiResponse> {
    return this.employeeService.deleteemployeeServices(employeeId);
  }

  @Post('/add')
  addEmployee(@Body() employee: Employee): Promise<ApiResponse> {
    return this.employeeService.addemployeeService(employee);
  }
}
