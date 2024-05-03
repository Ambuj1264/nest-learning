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
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get('/findall')
  findAll(): Promise<ApiResponse> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ApiResponse> {
    return this.usersService.findOne(id);
  }

  @Post('/login')
  login(@Body() user: Partial<User>): Promise<ApiResponse> {
    return this.usersService.login(user.email, user.password);
  }

  @Post('/add')
  create(@Body() user: Partial<User>): Promise<ApiResponse> {
    return this.usersService.create(user);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() user: Partial<User>,
  ): Promise<ApiResponse> {
    return this.usersService.update(id, user);
  }

  @Delete('/delete/:id')
  delete(@Param('id') id: string): Promise<ApiResponse> {
    return this.usersService.delete(id);
  }
}
