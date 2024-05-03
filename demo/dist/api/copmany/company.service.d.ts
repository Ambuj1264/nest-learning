import { ApiResponse } from 'src/utility/types';
import { Company } from './company.entity';
export declare class CompanyService {
    companys: Company[];
    addCompanyService(companys: Company, password: string): Promise<ApiResponse>;
    updateCompanyServices(companys: Company): Promise<ApiResponse>;
    deleteCompanyServices(companyId: string): Promise<ApiResponse>;
    findAllCompanys(): Promise<ApiResponse>;
    findCompanys(id: string): Promise<ApiResponse>;
}
