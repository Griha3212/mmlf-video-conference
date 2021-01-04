import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import Users from '../entities/users';
// import allErrors from '../utils/errors';

/* eslint-disable import/prefer-default-export */
export const userLogin = async (req: Request, res: Response) => {
  const usersRepository = await getRepository(Users);

  const foundUserByEmailInDatabase = await usersRepository
    .findOne({ where: { loginCode: req.body && req.body.loginCode } });

  if (foundUserByEmailInDatabase) {
    res.status(200).send(`hello ${foundUserByEmailInDatabase.firstName}`);
  } else res.status(400).send('error 111');
};

// if (foundUserByEmailInDatabase) {
//   // if (foundUserByEmailInDatabase.emailConfirmationToken === 'email activated') {
//   passport.authenticate(
//     'local',
//     { session: false },
//     (error, user) => {
//       if (error || !user) {
//         return res.status(400).send({ error: allErrors.incorrectUsernamePassword });
//       }
//       req.login(user, { session: false }, async (err: any) => {
//         if (err) {
//           res.status(400).send({ error });
//         }

//         const userAuthData = {
//           id: user.id,
//           isAdmin: user.isAdmin,
//           isBroker: user.isBroker,
//           isSeller: user.isSeller,
//           isBuyer: user.isBuyer,
//           isConfirmed: user.isConfirmed,
//         };
//         const token = jwt.sign({ ...userAuthData }, constants.JWTSecret, { expiresIn: '1m' });
//         const refreshToken = jwt.sign({ id: user.id }, constants.JWTSecret, { expiresIn: '7d' });
//         // const token = jwt.sign({ ...user }, constants.JWTSecret, { expiresIn: '1m' });
//         // const refreshToken = jwt.sign({ id: user.id }, constants.JWTSecret, { expiresIn: '2m' });

//         // save JWT refresh token in dataBase
//         // create ne Token exemplar
//         const refreshJWTTokenExpiredDate = new Date();
//         refreshJWTTokenExpiredDate.setDate(refreshJWTTokenExpiredDate.getDate() + 7);
//         // refreshJWTTokenExpiredDate.setMinutes(refreshJWTTokenExpiredDate.getMinutes() + 2)

//         const newRefreshJWTToken = new Token();
//         newRefreshJWTToken.refreshJWTToken = refreshToken;
//         newRefreshJWTToken.refreshJWTTokenExpiredDate = refreshJWTTokenExpiredDate;
//         newRefreshJWTToken.user = foundUserByEmailInDatabase;

//         await tokenRepository.save(newRefreshJWTToken);
//         await userRepository.save(foundUserByEmailInDatabase);

//         res.status(200).send({ token, refreshToken });
//       });
//     },
//   )(req, res);
// } else res.status(400).send({ error: allErrors.activateYourAccountFirst });
// } else res.status(400).send({ 'error' })
