import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './user.service';
import { createConnection, Connection } from 'typeorm';

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: Connection,
      useFactory: () =>
        createConnection({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '',
          database: 'formation_nodejs',
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true,
        }),
    },
    // Registry / Registry -> clé / valeur objet
    // Dependency Injection Container DIC -> clé / valeur comment créer objet
    // {
    //   provide: UserService,
    //   useClass: UserService, // new UserService() - new UserService(depInjectable)
    // }
    // en version courte :
    UserService,
    // {
    //   provide: UserService,
    //   useValue: {
    //     find() {
    //       return Promise.resolve([{id: 123, firstName:'Toto'}]);
    //     }
    //   }
    // }
    // {
    //   provide: UserService,
    //   useFactory: function(depInjectable: DepInjectable) {
    //     return new UserService(depInjectable, 'users');
    //   }
    // }
    // alias
    // UserDevService,
    // {
    //   provide: UserService,
    //   useExisting: UserDevService,
    // }
  ],
  exports: [UserService],
})
export class UsersModule {}
