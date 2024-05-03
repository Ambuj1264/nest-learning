import { CompanyModule } from './api/copmany/company.module';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
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
import { BullModule } from '@nestjs/bull';
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
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    UsersModule,
    BookModule,
    InventryModule,
    CompanyModule,
    EmployeeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
