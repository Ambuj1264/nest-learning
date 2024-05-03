import { Injectable, NestMiddleware } from '@nestjs/common';
import {  Response } from 'express';

@Injectable()
export class BookMiddleware implements NestMiddleware {
  async use(req: any, res: Response, next: () => void) {
    const token = req.headers['authorization'];
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: 'there is no token', data: null });
    }
    const decodedToken = token.split(' ')[1];
    console.log(decodedToken);

    //   const verifyToken =await jwt.verify(decodedToken, process.env.JWT_SECRET, "30d");
    //   if (!verifyToken) {
    //     return res.status(401).json({success: false, message: 'Unauthorized', data:null });
    //   }
    //   req.user=verifyToken;
    next();
  }
}
