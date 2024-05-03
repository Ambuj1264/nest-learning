import { Module } from '@nestjs/common';
import { InventryService } from './inventry.service';
import { InventryController } from './inventry.controller';

@Module({
  imports: [],
  providers: [InventryService],
  controllers: [InventryController],
  exports: [],
})
export class InventryModule {}
