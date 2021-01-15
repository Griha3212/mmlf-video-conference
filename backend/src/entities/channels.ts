/* eslint-disable import/no-cycle */
import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity,
  Index, CreateDateColumn, OneToMany, ManyToMany, OneToOne,
} from 'typeorm';
import Sessions from './sessions';
import Speakers from './speakers';
import Users from './users';

@Entity()
export default class Channels extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Sessions, (sessions) => sessions.id) // specify inverse side as a second parameter
  activeSession: Sessions;

  @Index()
  @Column({ nullable: true })
  sessionsAmount: number;

  @Column({ default: false })
  break: boolean;

  // @Index()
  // @Column({ nullable: true })
  // sessions: number;

  @OneToOne(() => Speakers, (speakers) => speakers.id)
  activeSpeaker: Speakers;
}
