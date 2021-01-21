/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import express from 'express';
import passport from 'passport';
import * as authController from '../controllers/stats.controller';

const router = express.Router();

const {

  getStats,
  // updateToken,

} = authController;

router.get(
  '/get_stats/:userId',
  passport.authenticate('jwt', { session: false }),
  getStats,
);

export { router };
