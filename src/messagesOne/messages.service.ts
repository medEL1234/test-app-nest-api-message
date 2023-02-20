import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

//add this class to dai container

@Injectable()
export class MessagesService {
  messagesRepository: MessagesRepository;

  constructor(messagesRepository: MessagesRepository) {
    //Injection of depandance for class of messageRep
    this.messagesRepository = messagesRepository;
  }

  findOne(id: string) {
    return this.messagesRepository.findOne(id);
  }

  findAll() {
    return this.messagesRepository.findAll();
  }

  createMessage(content: string) {
    return this.messagesRepository.createMessage(content);
  }
}
