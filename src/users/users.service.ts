import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      userId: 1,
      username: 'xiaofan',
      password: 'xiaofanshizhu',
    },
    {
      userId: 2,
      username: 'ruangou',
      password: 'ruangoushigou',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
