import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  ParseIntPipe,
  Query,
  ParseBoolPipe,
  Patch,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserSchema, CreateUserZodDto } from './dto/create_user.dto';
import { ZodValidationPipe } from './pipes/zod_validation_pipes';
import { HeaderDto } from './dto/header.dto';
import { HeaderRequest } from './pipes/header_request';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findUserID(
    @Param('id', ParseIntPipe) id,
    @Query('sort', ParseBoolPipe) sort,
  ) {
    return this.usersService.findUserID();
  }

  @Post('create')
  create(@Body(new ZodValidationPipe(createUserSchema)) dto: CreateUserZodDto) {
    return this.usersService.create(dto);
  }

  @Patch('update/:id')
  update(
    @Param('id') id,
    @Body(new ZodValidationPipe(createUserSchema)) body: CreateUserZodDto,
    @HeaderRequest(
      new ValidationPipe({
        validateCustomDecorators: true,
      }),
    )
    header: HeaderDto,
  ) {
    return this.usersService.update();
  }
}
