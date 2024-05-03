import { ApiResponse } from 'src/utility/types';
import { Employee } from './employee.entity';
export declare class EmployeeService {
    employee: Employee[];
    addemployeeService(employee: Employee): Promise<ApiResponse>;
    updateemployeeServices(employee: Employee): Promise<ApiResponse>;
    deleteemployeeServices(employeeId: string): Promise<ApiResponse>;
    findAllemployees(): Promise<ApiResponse>;
    findEmployees(id: string): Promise<ApiResponse>;
}
