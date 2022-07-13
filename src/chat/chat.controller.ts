import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { create } from 'domain';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { GetChatDto } from './dto/get-chat.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  async create(@Body() createChatDto: CreateChatDto) {
    return this.chatService.createChatDB(createChatDto);
  }

  @Post('get-history')
  findAll(@Body() getChatDto: GetChatDto) {
    return this.chatService.findAll(getChatDto);
  }

}
