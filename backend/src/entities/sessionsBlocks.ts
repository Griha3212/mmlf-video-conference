/* eslint-disable import/no-cycle */
import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity,
  Index, CreateDateColumn, OneToMany, ManyToMany,
} from 'typeorm';
import Users from './users';
import Votes from './votes';

@Entity()
export default class SessionsBlocks extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column({ nullable: true })
  sequenceNumber: number;

  @Index()
  @Column({ nullable: true })
  sessionsAmount: number;

  // @Index()
  // @Column({ nullable: true })
  // sessions: number;
}
