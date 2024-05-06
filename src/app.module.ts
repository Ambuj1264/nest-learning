import { CompanyModule } from './api/copmany/company.module';
import {  Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './api/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './api/book/book.module';
import { InventryModule } from './api/inventryDetails/inventry.module';
import { EmployeeModule } from './api/employee/employee.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeorm from './api/config/typeorm';
import { PassportModule } from '@nestjs/passport';
import { SongsController } from './api/songs/songs.controller';
import { SongsModule } from './api/songs/songs.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get('typeorm'),
    }),

    UsersModule,
    BookModule,
    InventryModule,
    CompanyModule,
    EmployeeModule,
    SongsModule,
  ],
  controllers: [AppController, SongsController],
  providers: [AppService],
})
export class AppModule {
}
