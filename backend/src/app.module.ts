import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: path.resolve(import.meta.dirname, '../../.env'),
      isGlobal: true, // this makes the configuration available globally throughout the application to any module without importing config module again
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
