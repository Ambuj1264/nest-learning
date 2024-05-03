import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
@Injectable()
export class BookGuard implements CanActivate {
  // constructor() {}
  public key: string = 'xjalsjfdalsfdjasfdjaslfdjasfd';

  canActivate(context: ExecutionContext): boolean {
    console.log('this is book gaurd');
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();

    if (request.headers['token'] === this.key) {
      return true;
    }
    return false;
  }
}
