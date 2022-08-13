import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {seq} from "./utils/db.config";
async function bootstrap() {
  await seq.authenticate();
  seq.sync();
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin:"*"
  })
  await app.listen(8080);
}
bootstrap();
