import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  ParseIntPipe,
  Patch,
  Query,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update_user.dto';
import { CustomValidationPipe } from './pipes/custom_validation_pipe';
import { CreateUserDto } from './dto/create_user.dto';

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
    @Body(new CustomValidationPipe(CreateUserDto))
    createUserDto: CreateUserDto,
  ) {
    return this.usersService.create(createUserDto);
  }

  @Patch('update/:id')
  update(@Param('id', ParseIntPipe) id, @Body() body: UpdateUserDto) {
    return this.usersService.update(id, body);
  }

  @Delete('delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}
