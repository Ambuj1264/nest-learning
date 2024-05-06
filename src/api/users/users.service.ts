import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { ApiResponse } from 'src/utility/types';
import { errorResponse, sucessResponse } from 'src/utility/commonfunction';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
// import jwt from 'jsonwebtoken';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<ApiResponse> {
    try {
      const findUser = await User.find({ where: { isDeleted: false } });
      return sucessResponse('user list', findUser);
    } catch (error) {
      return errorResponse(error.message, null);
    }
  }

  async findOne(id: string): Promise<ApiResponse> {
    try {
      const findUser = await User.findOne({ where: { id, isDeleted: false } });
      return sucessResponse('user list', findUser);
    } catch (error) {
      return errorResponse(error.message, null);
    }
  }

  async create(user: Partial<User>): Promise<ApiResponse> {
    try {
      const { name, email, password, role } = user;

      if (!name || !email || !password) {
        return errorResponse('name, email, password  are required', null);
      }

      const findUser = await User.findOne({
        where: { email, isDeleted: false },
      });
      if (findUser) {
        return errorResponse('user already exists', null);
      }
      console.log(password, 'password');
      const hashedPassword = await bcrypt.hash(password, 10);

      console.log(hashedPassword, 'hassedPassword');
      const createUser = User.create({
        name,
        email,
        password: hashedPassword,
      });
      await createUser.save();
      if (!createUser) {
        return errorResponse('user not created', null);
      }
      return sucessResponse('user created sucessfully', createUser);
    } catch (error) {
      return errorResponse(error.message, null);
    }
  }

  async update(id: string, user: Partial<User>): Promise<ApiResponse> {
    try {
      const { name, email } = user;
      const updateUser = await User.update(
        { id, isDeleted: false },
        { name, email },
      );
      if (!updateUser.affected) {
        return errorResponse('user not updated', null);
      }
      return sucessResponse('user updated sucessfully', updateUser);
    } catch (error) {
      return errorResponse(error.message, null);
    }
  }

  async delete(id: string): Promise<ApiResponse> {
    try {
      const deleteBook = await User.update(
        { id, isDeleted: false },
        { isDeleted: true },
      );
      if (!deleteBook.affected) {
        return errorResponse('user not deleted', null);
      }
      return sucessResponse('user deleted sucessfully', deleteBook);
    } catch (error) {
      return errorResponse(error.message, null);
    }
  }

  async login(email: string, password: string): Promise<ApiResponse> {
    try {
      const findUser = await User.findOne({
        where: { email, isDeleted: false },
      });
      if (!findUser) {
        return errorResponse('user not found', null);
      }

      const isMatch = await bcrypt.compare(password, findUser.password);
      if (!isMatch) {
        return errorResponse('password not match', null);
      }
      console.log(findUser, 'findUser');

      const createToken = await jwt.sign(
        { user: findUser },
        process.env.JWT_SECRET,
        {
          expiresIn: '30d',
        },
      );

      const loginUser = {
        userData: findUser,
        token: createToken,
      };
      return sucessResponse('user found', loginUser);
    } catch (error) {
      return errorResponse(error.message, null);
    }
  }
}
