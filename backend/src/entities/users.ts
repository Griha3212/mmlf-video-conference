/* eslint-disable import/no-cycle */
import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity,
  Index, OneToMany, ManyToMany, JoinTable, OneToOne,
} from 'typeorm';
import Channels from './channels';
import Speakers from './speakers';
import Votes from './votes';

@Entity()
export default class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

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

  @Index()
  @Column({ nullable: true })
  adminOfTheSessionName: string;

  @Index()
  @Column({ default: false })
  hasAccessToStatisticPage: boolean;

  @ManyToMany(() => Speakers,
    (watchedSpeakers) => watchedSpeakers.usersWhoWatchedSpeaker, { cascade: true })
  @JoinTable()
  watchedSpeakers: Speakers[];

  // @Index()
  // @Column({ default: false })
  // currentSessionBlock

  // @Index()
  // @Column({ default: false })
  // currentSession

  @OneToMany(() => Votes, (votes) => votes.user)
  votes: Votes[];

  @Index()
  @Column({ nullable: true })
  activeChannel: number;

  @Index()
  @Column({ default: false })
  showOtherChannelsBlock: boolean;
}
