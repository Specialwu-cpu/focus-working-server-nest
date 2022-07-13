import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChatDto } from './dto/create-chat.dto';
import { GetChatDto } from './dto/get-chat.dto';
import { Messages } from './entities/chat.entity';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Messages)
    private readonly chatRepository: Repository<Messages>,
  ) {  }

  createChatDB(createChatDto: CreateChatDto) {
    const message = this.chatRepository.create(createChatDto);
    return this.chatRepository.save(message);
  }

  async findAll(getChatDto: GetChatDto) {
    const msg = await this.chatRepository.find();
    var messageList = [];
    for (let i  = 0; i < msg.length; i++) {
      if(getChatDto.username == msg[i].username && getChatDto.friendName == msg[i].friendName) {
        var megs = { "username": msg[i].username, "message": msg[i].message}
        messageList.push(megs);
      }
      if(getChatDto.friendName == msg[i].username && getChatDto.username == msg[i].friendName) {
        var megs = { "username": msg[i].username, "message": msg[i].message}
        messageList.push(megs);
      }
    }
    return messageList;
  }

}
