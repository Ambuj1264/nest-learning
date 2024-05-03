import { ApiResponse } from 'src/utility/types';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';
export declare class EmployeeController {
    private employeeService;
    constructor(employeeService: EmployeeService);
    getAllEmployee(): Promise<ApiResponse>;
    getEmployee(employee: Employee): Promise<ApiResponse>;
    updateEmployee(employee: Employee): Promise<ApiResponse>;
    deleteEmployee(employeeId: string): Promise<ApiResponse>;
    addEmployee(employee: Employee): Promise<ApiResponse>;
}
