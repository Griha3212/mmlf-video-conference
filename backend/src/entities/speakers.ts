/* eslint-disable import/no-cycle */
import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity,
  Index, CreateDateColumn, OneToMany,
} from 'typeorm';
import Votes from './votes';

@Entity()
export default class Speakers extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // Date of speaker creation
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

  @OneToMany(() => Votes, (votes) => votes.user)
  votes: Votes[];
}
