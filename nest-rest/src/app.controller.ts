import { Controller, Get, Request, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api/app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  // @Get('/coucou/:name')
  // coucou(@Request() req) {
  //   return { msg: 'Coucou ' + req.params.name };
  // }

  @Get('/coucou/:name')
  coucou(@Param('name') name) {
    return { msg: 'Coucou ' + name };
  }
}
