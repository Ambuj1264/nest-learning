import { Profile } from 'src/api/Profile/profile.entity';
import { Inventry } from 'src/api/inventryDetails/inventry.entity';
import { Picture } from 'src/api/picture/picture.entity';
import {
  BaseEntity,
  Column,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  @Generated('uuid')
  id: string;
  @Column({ name: 'name', nullable: true })
  name: string;

  @Column({ name: 'email', nullable: true })
  email: string;

  @Column({ name: 'password', nullable: true })
  password: string;

  @Column({
    name: 'role',
    nullable: true,
    enum: ['company', 'employee'],
    default: 'employee',
  })
  role: string;
  @Column({ name: 'isDeleted', default: false })
  isDeleted: boolean;

  @Column({ name: 'createdAt', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ name: 'updatedAt', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
