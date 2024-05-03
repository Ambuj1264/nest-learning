import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class BookGuard implements CanActivate {
    key: string;
    canActivate(context: ExecutionContext): boolean;
}
