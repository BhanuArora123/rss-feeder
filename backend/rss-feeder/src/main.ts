import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {seq} from "./utils/db.config";
async function bootstrap() {
  await seq.authenticate();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
