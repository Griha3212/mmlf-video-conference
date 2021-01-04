/* eslint-disable import/no-cycle */
import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity,
  Index, CreateDateColumn, OneToMany,
} from 'typeorm';
import Votes from './votes';

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

  // access only for one Free Session
  @Index()
  @Column({ default: false })
  isFreeSessionAccessOnly: boolean;

  // uniq login code
  @Index()
  @Column({ nullable: true })
  loginCode: string;

  @Index()
  @Column({ nullable: true })
  jwtKey: string;

  @Index()
  @Column({ nullable: true })
  jwtRefreshKey: string;

  @Index()
  @Column({ nullable: true })
  jwtKeyValidUntilDate: Date;

  @Index()
  @Column({ nullable: true })
  jwtRefreshKeyValidUntilDate: Date;

  @Index()
  @Column({ default: false })
  isAdmin: boolean;

  @OneToMany(() => Votes, (votes) => votes.user)
  votes: Votes[];
}
