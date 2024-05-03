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
import { CompanyService } from './company.service';
import { Company } from './company.entity';

@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Get('/findOne/:id')
  getCompanys(@Param('id') id: string): Promise<ApiResponse> {
    return this.companyService.findCompanys(id);
  }
  @Get('/findAll')
  getallCompanys(): Promise<ApiResponse> {
    return this.companyService.findAllCompanys();
  }
  @Put('/update')
  updateCompany(@Body() Company: Company): Promise<ApiResponse> {
    return this.companyService.updateCompanyServices(Company);
  }

  @Delete('/delete/:id')
  deleteCompany(@Param('id') CompanyId: string): Promise<ApiResponse> {
    return this.companyService.deleteCompanyServices(CompanyId);
  }

  @Post('/add')
  addCompany(
    @Body() company: Company,
    @Body('password') password: string,
  ): Promise<ApiResponse> {
    return this.companyService.addCompanyService(company, password);
  }
}
