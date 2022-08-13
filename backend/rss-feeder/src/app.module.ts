import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RSSModule } from './modules/rss.module';

@Module({
  imports: [RSSModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
