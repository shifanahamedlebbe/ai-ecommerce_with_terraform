import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // This set a global prefix for all routes so we can access them under /api/*
  app.useGlobalPipes(new ValidationPipe({ transform: true })); // this validates all the requests based on the DTOs we define later
  app.enableCors({ origin: 'http://localhost:5173' });
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
