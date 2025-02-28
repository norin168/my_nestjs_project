import { Module, ValidationPipe } from '@nestjs/common';
import { UsersController } from './users.controller';
import { APP_PIPE } from '@nestjs/core';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: { enableImplicitConversion: true },
      }),
    },
  ],
})
export class UsersModule {}
