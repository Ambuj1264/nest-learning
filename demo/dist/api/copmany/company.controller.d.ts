import { ApiResponse } from 'src/utility/types';
import { CompanyService } from './company.service';
import { Company } from './company.entity';
export declare class CompanyController {
    private companyService;
    constructor(companyService: CompanyService);
    getCompanys(id: string): Promise<ApiResponse>;
    getallCompanys(): Promise<ApiResponse>;
    updateCompany(Company: Company): Promise<ApiResponse>;
    deleteCompany(CompanyId: string): Promise<ApiResponse>;
    addCompany(company: Company, password: string): Promise<ApiResponse>;
}
