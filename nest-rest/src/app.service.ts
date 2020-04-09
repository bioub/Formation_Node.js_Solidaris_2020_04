import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(name = '') {
    return 'Hello World!';
  }
}
