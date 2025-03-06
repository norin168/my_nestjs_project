import { Injectable, NotFoundException } from '@nestjs/common';
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

  findAll(): Promise<UserEntity[]> {
    const allUsers = this.usersRepo.find({ order: { id: 'ASC' } });
    return allUsers;
  }

  async findUserID(id: number) {
    const user = await this.usersRepo.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async create(createUserDto: CreateUserZodDto): Promise<UserEntity> {
    const newUser = this.usersRepo.create(createUserDto);
    return this.usersRepo.save(newUser);
  }

  async update(id: number, updateUserDto: CreateUserZodDto) {
    const userUpdate = await this.usersRepo.update({ id }, updateUserDto);

    return userUpdate;
  }

  async delete(id: number) {
    const userDelete = await this.usersRepo.delete({ id });
    return userDelete;
  }
}
