import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity,
  Index, CreateDateColumn,
} from 'typeorm';

@Entity()
export default class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // Date of user creation
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @Index()
  @Column({ nullable: true })
  firstName: string;

  @Index()
  @Column({ nullable: true })
  lastName: string;

  @Index()
  @Column({ nullable: true })
  company: string;
}
