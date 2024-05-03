import { Request } from 'express';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class BookInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('this is inceptor');
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    request.body.name = 'this is my name from interceptor';
    return next.handle();
  }
}
