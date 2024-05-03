import { Injectable } from '@nestjs/common';
import { errorResponse, sucessResponse } from 'src/utility/commonfunction';
import { ApiResponse } from 'src/utility/types';
import { Company } from './company.entity';
import { User } from 'src/api/users/user.entity';
@Injectable()
export class CompanyService {
  public companys: Company[] = [];

  async addCompanyService(
    companys: Company,
    password: string,
  ): Promise<ApiResponse> {
    try {
      const { email, name } = companys;
      if (!email || !name || !password) {
        return errorResponse('name, email, password  are required', null);
      }
      const findCompany = await Company.findOne({
        where: { email, isDeleted: false },
      });

      if (findCompany) {
        return errorResponse('Company already exists', null);
      }
      const createCompany = await Company.create({
        email,
        name,
      });

      await createCompany.save();
      if (!createCompany) {
        return errorResponse('Company not added', null);
      }

      const createAdmin = await User.create({
        email,
        name,
        password,
        role: 'admin',
      });

      const createUser = await createAdmin.save();

      if (!createUser) {
        return errorResponse('user not created', null);
      }
      return sucessResponse('Company added sucessfully', createCompany);
    } catch (error) {
      return errorResponse(error.message, null);
    }
  }

  async updateCompanyServices(companys: Company): Promise<ApiResponse> {
    try {
      const { id, name, email } = companys;

      const updateCompany = await Company.update(
        { id, isDeleted: false },
        {
          name,
          email,
        },
      );

      if (!updateCompany.affected) {
        return errorResponse('Company not updated', null);
      }
      return sucessResponse('Company updated sucessfully', updateCompany);
    } catch (error) {
      return errorResponse(error.message, null);
    }
  }

  async deleteCompanyServices(companyId: string): Promise<ApiResponse> {
    try {
      const id = companyId;
      const deleteCompany = await Company.update(
        { id, isDeleted: false },
        { isDeleted: true },
      );
      if (!deleteCompany.affected) {
        return errorResponse('Company not deleted', null);
      }
      return sucessResponse('Company deleted sucessfully', deleteCompany);
    } catch (error) {
      return errorResponse(error.message, null);
    }
  }

  async findAllCompanys(): Promise<ApiResponse> {
    try {
      const findAll = await Company.find({ where: { isDeleted: false } });
      return sucessResponse('Company list', findAll);
    } catch (error) {
      return errorResponse(error.message, null);
    }
  }
  async findCompanys(id: string): Promise<ApiResponse> {
    try {
      console.log(id, 'id');
      const findAll = await Company.findOne({
        where: { isDeleted: false, id },
      });
      return sucessResponse('Company list', findAll);
    } catch (error) {
      return errorResponse(error.message, null);
    }
  }

}