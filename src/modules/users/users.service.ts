import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserZodDto } from './dto/create_user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepo: Repository<UserEntity>,
  ) {}

  findAll() {
    return 'all users';
  }

  findUserID() {
    return 'id';
  }

  create(dto: CreateUserZodDto) {
    return this.usersRepo.save(dto);
  }

  update() {
    return 'update user';
  }
}
