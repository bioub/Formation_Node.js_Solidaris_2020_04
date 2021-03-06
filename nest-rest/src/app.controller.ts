import { Controller, Get, Request, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Request as IRequest } from 'express';
import { UserService } from './users/user.service';

@Controller('/api/app')
export class AppController {
  // Injection de dépendance
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get('/hello/:name')
  hello(@Request() req: IRequest) {
    return { msg: 'Coucou ' + req.params.name };
  }

  @Get('/coucou/:name')
  coucou(@Param('name') name: any) {
    return { msg: 'Coucou ' + name };
  }
}
