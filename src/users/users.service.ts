import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findOne(username: string) {
    const user = await this.userRepository.findOne({ where: { username } });
    if (!user) {
      throw new NotFoundException(`User with username ${username} not found`);
    }
    return user;
  }

  async create(createUserDto: CreateUserDto) {
    const { username } = createUserDto;
    try {
      await this.findOne(username);
    } catch (error) {
      if (error instanceof NotFoundException) {
        const user = this.userRepository.create(createUserDto);
        return this.userRepository.save(user);
      } else {
        throw error;
      }
    }
    throw new ConflictException(
      `User with username ${username} already exists`,
    );
  }

  async remove(username: string) {
    const user = await this.findOne(username);
    return this.userRepository.remove(user);
  }

  async update(username: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.preload({
      username: username,
      ...updateUserDto,
    });
    if (!user) {
      throw new NotFoundException(`User with username ${username} not found`);
    }
    return this.userRepository.save(user);
  }
}
