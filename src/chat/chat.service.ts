import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChatDto } from './dto/create-chat.dto';
import { Messages } from './entities/chat.entity';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Messages)
    private readonly chatRepository: Repository<Messages>,
  ) {}

  createChatDB(createChatDto: CreateChatDto) {
    const message = this.chatRepository.create(createChatDto);
    return this.chatRepository.save(message);
  }
}
