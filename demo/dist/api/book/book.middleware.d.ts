import { NestMiddleware } from '@nestjs/common';
import { Response } from 'express';
export declare class BookMiddleware implements NestMiddleware {
    use(req: any, res: Response, next: () => void): Promise<Response<any, Record<string, any>>>;
}
