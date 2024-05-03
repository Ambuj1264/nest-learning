import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { InventryService } from './inventry.service';
import { ApiResponse } from 'src/utility/types';
import { AuthModule } from 'src/auth/auth.module';

@Controller('inventry')
export class InventryController {
  constructor(private inventryService: InventryService) {}

  @Get('/findAll')
  @UseGuards(AuthModule)

  getAllInventry(): Promise<ApiResponse> {
    return this.inventryService.getAllInventry();
  }

  @Get(':id')
  getInventryById() {
    return 'Inventry Details';
  }

  @Post('/add')
  createInventry(@Body() body: Intentry): Promise<ApiResponse> {
    return this.inventryService.createInventry(body);
  }
}

interface Intentry {
  bookId: string;
  userId: string;
}
