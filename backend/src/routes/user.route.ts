/* eslint-disable import/prefer-default-export */
import express from 'express';
import passport from 'passport';
import * as authController from '../controllers/user.controller';

const router = express.Router();

const {

  getUser,
  // updateToken,

} = authController;

router.get(
  '/get_user/:userId',
  passport.authenticate('jwt', { session: false }),
  getUser,
);

export { router };
