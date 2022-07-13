import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    return await this.userRepository.findOne({
      where: { username },
    });
  }

  async create(createUserDto: CreateUserDto) {
    const { username } = createUserDto;
    if (await this.findOne(username)) {
      throw new ConflictException(
        `User with username ${username} already exists`,
      );
    }
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }
}
