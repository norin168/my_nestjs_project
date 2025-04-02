import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserEntity } from 'src/entities/user.entity';
import { CreateUserDto } from './dto/create_user.dto';
import { UpdateUserDto } from './dto/update_user.dto';
import { UserRepository } from 'src/repository/users_repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async findAll(): Promise<UserEntity[]> {
    const allUsers = await this.userRepository.find({ order: { id: 'ASC' } });
    return allUsers;
  }

  async findUserID(id: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async findUserByUsername(username: string) {
    const user = await this.userRepository.findOne({ where: { username } });

    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    try {
      const newUser = this.userRepository.create(createUserDto);

      // Hash the password before saving
      const salt = await bcrypt.genSalt(10);

      const passwordHashed = await bcrypt.hash(createUserDto.password, salt);

      if (!passwordHashed) {
        throw new BadRequestException('Password not hashed');
      }

      const user = await this.userRepository.save({
        ...newUser,
        password: passwordHashed,
      });

      return user;
    } catch (error) {
      console.log('Error =>', error);

      throw new BadRequestException('User not created');
    }
  }

  // compare hashed password
  async comparePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    try {
      const isMatch = await bcrypt.compare(password, hashedPassword);
      return isMatch;
    } catch (error) {
      throw new BadRequestException('Password not matched');
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    const userUpdate = await this.userRepository.save({
      ...user,
      ...updateUserDto,
    });

    if (!userUpdate) {
      throw new BadRequestException('User not updated');
    }

    return userUpdate;
  }

  async delete(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    const userDelete = await this.userRepository.delete({ id });

    if (!userDelete) {
      throw new BadRequestException('User not deleted');
    }

    return {
      message: `User with ID ${id} deleted successfully`,
    };
  }
}
