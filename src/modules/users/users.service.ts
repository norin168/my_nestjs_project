import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'User1',
      email: 'testing1@gmail.com',
    },
    {
      id: 2,
      name: 'User2',
      email: 'testing2@gmail.com',
    },
  ];

  findAll() {
    return this.users;
  }
}
