import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { UserDto } from './user.model';
import { PhotoEntity } from './photo.entity';

@Entity({
  name: 'user'
})
export class UserEntity {
  constructor(dto: UserDto) {
    Object.assign(this, dto);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToOne(type => PhotoEntity, (photo) => photo.user)
  @JoinColumn()
  photo: PhotoEntity;
}
