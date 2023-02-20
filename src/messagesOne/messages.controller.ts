import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
} from '@nestjs/common';
import { createMessageDto } from './Dtos/create-message.Dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messageSer: MessagesService;

  constructor(messageSer: MessagesService) {
    this.messageSer = messageSer;
  }
  @Get('')
  getMessage() {
    return this.messageSer.findAll();
  }
  //for extract the body of request on use @body deco is argument deco
  @Post('')
  postMessage(@Body() Body: createMessageDto) {
    return this.messageSer.createMessage(Body.content);
    //console.log(Body);
  }

  //for extract the param of id on use @param deco is an argument deco
  @Get('/:id')
  async getMessageById(@Param('id') Param: string) {
    const errorMessage = await this.messageSer.findOne(Param);

    if (!errorMessage) {
      throw new NotFoundException('This message not Found');
    }

    return errorMessage;
    //console.log(Param);
  }
}
