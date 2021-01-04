import express from 'express';
import * as authController from '../controllers/auth.controller';

const router = express.Router();

const {

  userLogin,
  // updateToken,

} = authController;

router.post('/login', userLogin);
// router.post('/updateToken', updateToken);

export { router };
