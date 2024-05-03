import {
  BaseEntity,
  Column,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'employee' })
export class Employee extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  @Generated('uuid')
  id: string;

  @Column({ name: 'companyId', nullable: false })
  companyId: string;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'email', nullable: false })
  email: string;

  @Column({ name: 'isDeleted', default: false })
  isDeleted: boolean;

  @Column({ name: 'createdAt', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ name: 'updatedAt', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
