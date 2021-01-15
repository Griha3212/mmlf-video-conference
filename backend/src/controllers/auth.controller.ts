import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import Users from '../entities/users';
import allErrors from '../utils/errors';
import { io } from '../server';
// import allErrors from '../utils/errors';

/* eslint-disable import/prefer-default-export */
export const userLogin = async (req: Request, res: Response) => {
  const usersRepository = await getRepository(Users);

  const foundUserByLoginCodeInDatabase = await usersRepository
    .createQueryBuilder('user')
    .where('user.loginCode = :loginCode', { loginCode: req.body && req.body.loginCode })
    .getOne();

  // const foundUserByLoginCodeInDatabase = await usersRepository
  //   .findOne({ where: { loginCode: req.body && req.body.loginCode } });

  if (foundUserByLoginCodeInDatabase) {
    // if (foundUserByLoginCodeInDatabase.emailConfirmationToken === 'email activated') {
    passport.authenticate(
      'localSignIn',
      { session: false },
      (error: any, user: any) => {
        if (error || !user) {
          console.log('error :>> ', error);
          return res.status(500).send(allErrors.wrongLoginCode);
        }
        req.login(user, { session: false }, async (err: any) => {
          if (err) {
            res.status(400).send({ error });
          }

          // const userAuthData = {
          //   id: user.id,
          //   isAdmin: user.isAdmin,
          //   isBroker: user.isBroker,
          //   isSeller: user.isSeller,
          //   isBuyer: user.isBuyer,
          //   isConfirmed: user.isConfirmed,
          // };

          delete foundUserByLoginCodeInDatabase.loginCode;
          // TO DO, maybe make true token system later
          const token = jwt.sign({ ...foundUserByLoginCodeInDatabase }, process.env.JWT_SECRET as string, { expiresIn: '7d' });
          const refreshToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: '7d' });

          // save JWT refresh token in dataBase
          // create ne Token exemplar
          const refreshJWTTokenExpiredDate = new Date();
          refreshJWTTokenExpiredDate.setDate(refreshJWTTokenExpiredDate.getDate() + 7);
          // refreshJWTTokenExpiredDate.setMinutes(refreshJWTTokenExpiredDate.getMinutes() + 2)

          // save refresh token info
          foundUserByLoginCodeInDatabase.jwtRefreshToken = refreshToken;
          foundUserByLoginCodeInDatabase.jwtRefreshTokenValidUntilDate = refreshJWTTokenExpiredDate;

          await usersRepository.save(foundUserByLoginCodeInDatabase);

          // TO DO disconnect via socket previous user

          const room = foundUserByLoginCodeInDatabase.id;

          const data = { message: 'disconnect current user' };

          await io.to(String(room)).emit('connectToPersonalRoom', data);
          // await global.socketServer.sockets.in(String(room)).emit('connectToPersonalRoom', data);
          console.log('here :>> ');
          console.log('data :>> ', data);
          console.log('room :>> ', room);

          res.status(200).send({ token, refreshToken });
        });
      },
    )(req, res);
    // } else res.status(400).send({ error: allErrors.activateYourAccountFirst });
  } else res.status(500).send(allErrors.wrongLoginCode);
};
