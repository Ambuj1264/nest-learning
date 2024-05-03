import {
  BaseEntity,
  Column,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'picture' })
export class Picture extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  @Generated('uuid')
  id: string;

  @Column({ name: 'link' })
  link: string;

  @Column({ name: 'isDeleted', default: false })
  isDeleted: boolean;

  @Column({ name: 'createdAt', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ name: 'updatedAt', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
