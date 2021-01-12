/* eslint-disable import/no-cycle */
import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity,
  Index, CreateDateColumn, OneToMany, ManyToOne, ManyToMany, JoinTable,
} from 'typeorm';
import Sessions from './sessions';
import Speakers from './speakers';
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
  loginCode?: string;

  @Index()
  @Column({ nullable: true })
  jwtToken: string;

  @Index()
  @Column({ nullable: true })
  jwtRefreshToken: string;

  @Index()
  @Column({ nullable: true })
  jwtTokenValidUntilDate: Date;

  @Index()
  @Column({ nullable: true })
  jwtRefreshTokenValidUntilDate: Date;

  @Index()
  @Column({ default: false })
  isAdmin: boolean;

  // @Index()
  // @Column({ default: false })
  // adminOfTheSession

  @Index()
  @Column({ default: false })
  hasAccessToStatisticPage: boolean;

  @Index()
  @ManyToMany(() => Speakers,
    (speakers) => speakers.usersWhoWatchedSpeaker, { cascade: true })
  @JoinTable()
  watchedSpeakers: Speakers;

  // @Index()
  // @Column({ default: false })
  // currentSessionBlock

  // @Index()
  // @Column({ default: false })
  // currentSession

  @OneToMany(() => Votes, (votes) => votes.user)
  votes: Votes[];
}
