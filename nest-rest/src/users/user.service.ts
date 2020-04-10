import { Injectable } from '@nestjs/common';
import { User, UserDto } from './user.model';
import { Connection } from 'typeorm';
import {UserEntity} from './user.entity'
import { PhotoEntity } from './photo.entity';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      firstName: 'Romain',
      lastName: 'Bohdanowicz',
      id: 123,
    },
    {
      firstName: 'Jean',
      lastName: 'Dupont',
      id: 54,
    },
    {
      firstName: 'Paul',
      lastName: 'Martin',
      id: 312,
    },
  ];

  constructor(private readonly connection: Connection) {}

  private generateId() {
    const maxId = this.users.reduce((acc, u) => (u.id > acc ? u.id : acc), 0);
    // acc: 0, u: { firstName: 'Romain', lastName: 'Bohdanowicz', id: 123 }, => 123
    // acc: 123, u: {id: 54} => 123
    // acc: 123: u: {id: 312} => 312
    // => 312
    return maxId + 1;
  }

  find() {
    return this.connection.getRepository(UserEntity).find();
  }

  findById(id: string | number) {
    return this.connection.getRepository(UserEntity).findOne(id, {
      relations: ['photo']
    });
  }

  async create(data: UserDto) {
    const photo = new PhotoEntity();
    photo.src = 'img/maphoto.jpg';
    await this.connection.getRepository(PhotoEntity).save(photo);

    const user = new UserEntity(data);
    user.photo = photo;

    return await this.connection.getRepository(UserEntity).save(user);
  }

  findByIdAndDelete(id: string | number) {
    id = Number(id);
    const user = this.users.find(c => c.id === id);

    if (!user) {
      return Promise.resolve(null);
    }

    const index = this.users.indexOf(user);
    this.users.splice(index, 1);

    return Promise.resolve(user);
  }

  findByIdAndUpdate(id: string | number, data: UserDto) {
    id = Number(id);
    const oldUser = this.users.find(c => c.id === id);

    if (!oldUser) {
      return Promise.resolve(null);
    }

    const newUser = {
      ...data,
      id,
    };
    const index = this.users.indexOf(oldUser);
    this.users[index] = newUser;

    return Promise.resolve(oldUser);
  }
}
