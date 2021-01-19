/* eslint-disable import/prefer-default-export */
import express from 'express';
import passport from 'passport';
import * as authController from '../controllers/user.controller';

const router = express.Router();

const {

  getUser,
  voteForSpeaker,
  updateWatchedSpeakers,
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
  updateWatchedSpeakers,
);

export { router };
