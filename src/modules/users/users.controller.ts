import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  ParseIntPipe,
  Patch,
  ValidationPipe,
  Query,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ZodValidationPipe } from './pipes/zod_validation_pipes';
import { HeaderDto } from './dto/header.dto';
import { HeaderRequest } from './pipes/header_request';
import { createUserSchema, CreateUserZodDto } from './dto/create_user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('find')
  findUserID(@Query('id', ParseIntPipe) id: number) {
    return this.usersService.findUserID(id);
  }

  @Post('create')
  async create(
    @Body(new ZodValidationPipe(createUserSchema))
    createUserDto: CreateUserZodDto,
  ) {
    const user = await this.usersService.create(createUserDto);

    return {
      success: true,
      data: user,
    };
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
    return this.usersService.update(id, body);
  }

  @Delete('delete/:id')
  delete(@Param('id') id) {
    return this.usersService.delete(id);
  }
}
