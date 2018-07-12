import * as express from 'express';
import * as passport from 'passport';
import * as jwt from 'jsonwebtoken';

const router = express.Router();

export default () => {
    router.use(passport.authenticate('jwt', {session: false}));
    router.use((req, res, next) => {
        if (jwt.decode(req.headers.authorization).role === 'Person') {
            next();
        } else {
            res.status('403').json({message: 'Only fore role Person'});
        }

    });
    router.get('/info', (req, res) => {
        console.log('works');
        res.json({success: true, message: 'Successfully protected.'});
    });
    return router;
}