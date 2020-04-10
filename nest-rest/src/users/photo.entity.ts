import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { UserDto } from './user.model';
import { UserEntity } from './user.entity';

@Entity({
  name: 'photo'
})
export class PhotoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  src: string;

  @OneToOne(type => UserEntity, (user) => user.photo)
  @JoinColumn()
  user: UserEntity;
}
