import { Body, Controller, Post } from '@nestjs/common';
import { create } from 'domain';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  async create(@Body() createChatDto: CreateChatDto) {
    return this.chatService.createChatDB(createChatDto);
  }
}
