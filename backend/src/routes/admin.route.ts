/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import express from 'express';
import passport from 'passport';
import * as authController from '../controllers/admin.contorller';

const router = express.Router();

const {

  changeActiveSpeakerInChannel,
  setBreakBetweenSessions,

} = authController;

router.post('/change_active_speaker_in_channel',
  passport.authenticate('jwt', { session: false }),
  changeActiveSpeakerInChannel);

router.post('/set_brake_in_cahnnel',
  passport.authenticate('jwt', { session: false }),
  setBreakBetweenSessions);

export { router };
