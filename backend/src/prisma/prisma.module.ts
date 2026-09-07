import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service.js';

@Global() // use this to make this module available globally for all the other module
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
