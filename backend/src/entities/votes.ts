import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity,
  Index, CreateDateColumn,
} from 'typeorm';

@Entity()
export default class Votes extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // Date of vote creation
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;
}
