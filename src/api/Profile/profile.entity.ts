import {
  BaseEntity,
  Column,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'profile' })
export class Profile extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  @Generated('uuid')
  id: string;

  @Column({ name: 'gender', nullable: true, enum: ['male', 'female', 'other'] })
  gender: string;

  @Column({ name: 'photo', nullable: true })
  photo: string;

  @Column({ name: 'isDeleted', default: false })
  isDeleted: boolean;

  @Column({ name: 'createdAt', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ name: 'updatedAt', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
