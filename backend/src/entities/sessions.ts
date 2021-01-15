import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity,
  Index, CreateDateColumn, OneToMany, ManyToMany, ManyToOne,
} from 'typeorm';
import Channels from './channels';
import Speakers from './speakers';
import Users from './users';
import Votes from './votes';

@Entity()
export default class Sessions extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column({ nullable: true })
  name: string;

  @Index()
  @Column({ nullable: true })
  letter: string;

  @Index()
  @Column({ nullable: true })
  description: string;

  // @Index()
  // @Column({ nullable: true })
  // sessionsAmount: number;

  // @Index()
  // @Column({ nullable: true })
  // sessions: number;

  @OneToMany(() => Speakers, (speakers) => speakers.sessions)
  speakers: Speakers[];

  @Index()
  @ManyToOne(() => Channels,
    (channelForShowing) => channelForShowing.id, { cascade: true })
  channelForShowing: Channels;
}
