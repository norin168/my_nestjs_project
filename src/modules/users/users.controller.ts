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
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUser.dto';
import { ParseIdPipe } from './pipes/parseId.pipes';

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
    console.log(typeof id);

    console.log(typeof sort);

    return id;
  }

  @Post('create')
  create(@Body() body: CreateUserDto) {
    return body;
  }

  @Patch('update/:id')
  update(@Param('id', ParseIdPipe) id, @Body() body: CreateUserDto) {
    return body;
  }
}
