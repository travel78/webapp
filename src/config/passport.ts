import * as passportJwt from 'passport-jwt';

import User from '../model/user';
import config from './main';

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

export default (passport) => {
    const opts = {
        jwtFromRequest: ExtractJwt.fromHeader('authorization'),
        secretOrKey: config.jwtSecret
    };

    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        User.findOne({_id: jwt_payload._id}, (err, user) => {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        });
    }));
};