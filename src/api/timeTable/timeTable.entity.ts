import {
  BaseEntity,
  Column,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'timeTable' })
export class TimeTable extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  @Generated('uuid')
  id: string;

  @Column({ name: 'companyId', nullable: false })
  companyId: string;

  @Column({ name: 'date', nullable: false })
  date: Date;

  @Column({ name: 'startTime', nullable: false, type: 'time' }) // Change data type to 'time'
  startTime: string;

  @Column({ name: 'endTime', nullable: false, type: 'time' }) // Change data type to 'time'
  endTime: string;

  @Column({ name: 'isDeleted', default: false })
  isDeleted: boolean;

  @Column({ name: 'createdAt', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ name: 'updatedAt', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
