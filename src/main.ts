import { NestFactory } from '@nestjs/core';

import { MessagesModule } from './messagesOne/messages.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);

  //create validation pipe for check the req
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
