import { Injectable } from '@nestjs/common';
import { User, UserDto } from './user.model';

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

  private generateId() {
    const maxId = this.users.reduce((acc, u) => (u.id > acc ? u.id : acc), 0);
    return maxId + 1;
  }

  find() {
    return Promise.resolve(this.users);
  }

  findById(id: string | number) {
    id = Number(id);
    const contact = this.users.find(c => c.id === id);

    if (!contact) {
      return Promise.resolve(null);
    }

    return Promise.resolve(contact);
  }

  create(data: UserDto) {
    const user: User = {
      ...data,
      id: this.generateId(),
    };

    this.users.push(user);

    return Promise.resolve(user);
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
