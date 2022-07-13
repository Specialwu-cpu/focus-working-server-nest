import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      username: 'xiaofan',
      password: 'xiaofanshizhu',
    },
    {
      id: 2,
      username: 'ruangou',
      password: 'ruangoushigou',
    },
  ];

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

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
