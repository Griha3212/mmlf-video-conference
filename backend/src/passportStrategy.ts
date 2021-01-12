/* eslint-disable import/prefer-default-export */
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import { getRepository } from 'typeorm';
import allErrors from './utils/errors';
import Users from './entities/users';

export const localSignInStrategy = passport.use('localSignIn', new LocalStrategy({
  usernameField: 'loginCode',
  passwordField: 'loginCode',
  passReqToCallback: true,
}, async (req: any, email: any, password: any, done: any) => {
  try {
    const { loginCode } = req.body;

    const user = await getRepository(Users).findOne({ where: { loginCode } });

    if (!user) {
      return done(null, {
        status: false,
        message: allErrors.wrongLoginCode,
      });
    }

    if (loginCode === user?.loginCode) {
      return done(null, user);
    }
  } catch (error) {
    return done(error);
  }
}));

export const jwtStrategy = passport.use(new JWTStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
  },
  async (jwtPayload, done) => {
    try {
      if (Date.now() > jwtPayload.expires) {
        return done(null, false, { message: 'jwt expired' });
      }
      const user = await getRepository(Users).findOne(jwtPayload.userId || jwtPayload.id);
      if (user) {
        return done(null, jwtPayload);
      }
      return done(null, false, { message: 'jwt invalid' });
    } catch (error) {
      return done(error);
    }
  },
));

export const jwtStrategyIsAdmin = passport.use('isAdmin', new JWTStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
  },
  async (jwtPayload, done) => {
    try {
      if (Date.now() > jwtPayload.expires) {
        return done(null, false, { message: 'jwt expired' });
      }
      const user = await getRepository(Users).findOne(jwtPayload.userId || jwtPayload.id);
      if (user?.isAdmin) {
        return done(null, jwtPayload);
      }
      return done(null, false, { message: 'jwt invalid' });
    } catch (error) {
      return done(error);
    }
  },
));