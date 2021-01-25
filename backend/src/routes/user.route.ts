/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import express from 'express';
import passport from 'passport';
import * as authController from '../controllers/user.controller';

const router = express.Router();

const {

  getUser,
  voteForSpeaker,
  updateWatchedSpeakersSingle,
  updateWatchedSpeakersAll,
  getAllChannels,
  changeActiveChannel,
  updateSpeakersToWhomContactsWereSent,
  // updateToken,

} = authController;

router.get(
  '/get_user/:userId',
  passport.authenticate('jwt', { session: false }),
  getUser,
);

router.post(
  '/vote_for_speaker',
  passport.authenticate('jwt', { session: false }),
  voteForSpeaker,
);

router.post(
  '/update_watched_speakers',
  passport.authenticate('jwt', { session: false }),
  updateWatchedSpeakersSingle,
);

router.post(
  '/update_watched_speakers_all',
  passport.authenticate('jwt', { session: false }),
  updateWatchedSpeakersAll,
);

router.get(
  '/get_all_channels/:userId',
  passport.authenticate('jwt', { session: false }),
  getAllChannels,
);

router.post(
  '/change_active_channel',
  passport.authenticate('jwt', { session: false }),
  changeActiveChannel,
);

router.post(
  '/update_contacted_speakers',
  passport.authenticate('jwt', { session: false }),
  updateSpeakersToWhomContactsWereSent,
);

export { router };
