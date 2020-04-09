import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users.controller';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController],
  providers: [{
    provide: AppService,
    useValue: {
      getHello() {
        return 'Hello from provide'
      }
    }
  }, UserService],
})
export class AppModule {}
