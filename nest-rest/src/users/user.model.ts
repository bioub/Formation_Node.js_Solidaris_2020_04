import { IsString, MaxLength } from "class-validator";

export class User {
  id: number;

  @IsString({
    message: 'Le prénom est obligatoires'
  })
  @MaxLength(20)
  firstName: string;

  @IsString({
    message: 'Le nom est obligatoires'
  })
  @MaxLength(20)
  lastName: string;
}

export type UserDto = Readonly<Omit<User, 'id'>>;
