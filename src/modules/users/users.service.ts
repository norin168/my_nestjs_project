import { Injectable } from '@nestjs/common';
import e from 'express';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'User One', email: 'testing@gmail.com' },
    { id: 2, name: 'User Two', email: 'testing1@gmail.com' },
  ];

  findAll() {
    return this.users;
  }

  findAny(id: number) {
    return this.users.find((user) => user.id === id);
  }

  create(user: { name: string; email: string }) {
    const newUser = { id: this.users.length + 1, ...user };
    this.users.push(newUser);
    return newUser;
  }
}
