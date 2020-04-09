export interface User {
  id: number;
  firstName: string;
  lastName: string;
}

export type UserDto = Omit<User, 'id'>;
