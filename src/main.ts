require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import rateLimit from 'express-rate-limit';
import { ValidationPipe } from '@nestjs/common';
const port: number = 3000;

// function globalMiddelware(req : Request, res: Response, next: NextFunction) {
//   console.log('global middleware');
//   next();
// }
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(globalMiddelware);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.use(
    rateLimit({
      windowMs: 5 * 60 * 1000, // 10 minutes
      max: 200, // limit each IP to 100 requests per windowMs
      message: 'Rate limit exceeded. Please try again later.',
    }),
  );
  await app.listen(port);
}

bootstrap();
