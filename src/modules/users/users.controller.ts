import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findAny(@Param('id') id: string) {
    return this.usersService.findAny(+id);
  }

  @Post()
  create(@Body() createUserDto: { name: string; email: string }) {
    return this.usersService.create(createUserDto);
  }
}
