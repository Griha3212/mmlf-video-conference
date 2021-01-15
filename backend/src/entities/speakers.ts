/* eslint-disable import/no-cycle */
import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity,
  Index, CreateDateColumn, OneToMany, ManyToMany, ManyToOne,
} from 'typeorm';
import Sessions from './sessions';
import Users from './users';
import Votes from './votes';

@Entity()
export default class Speakers extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @Index()
  // @Column({ nullable: true })
  // sessionName: string;

  @Index()
  @Column({ nullable: true })
  firstName: string;

  @Index()
  @Column({ nullable: true })
  lastName: string;

  @Index()
  @Column({ nullable: true })
  company: string;

  @Index()
  @Column({ nullable: true })
  linkToZoom: string;

  @Index()
  @Column({ nullable: true })
  linkToImg: string;

  @Index()
  @Column({ nullable: true })
  linkToPresentation: string;

  @ManyToMany(() => Users, (users) => users.watchedSpeakers)
  usersWhoWatchedSpeaker: Users[];

  @OneToMany(() => Votes, (votes) => votes.user)
  votes: Votes[];

  @Index()
  @ManyToOne(() => Sessions,
    (session) => session.speakers, { cascade: true })
  session: Sessions;

  @Index()
  @Column({ nullable: true })
  topicName: string;

  @Index()
  @Column({ nullable: true })
  innerSystemName: string;

  @Index()
  @Column({ default: false })
  isModerator: boolean;
}
