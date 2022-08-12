import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

//apis -> subscribe to rss
// unsubscribe to rss,
// display rss data
