import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
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

  async create(createUserDto: CreateUserDto) {
    const { username, password } = createUserDto;
    if (await this.findOne(username)) {
      throw new ConflictException(
        `User with username ${username} already exists`,
      );
    }
    const user = new User();
    user.username = username;
    user.password = password;
    this.users.push(user);
  }
}
