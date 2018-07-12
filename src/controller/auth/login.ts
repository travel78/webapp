import * as express from 'express';
import User from '../../model/user';
import config from '../../config/main';
import * as jwt from 'jsonwebtoken';

const router = express.Router();

export default () => {
    router.post('/login', (req, res) => {
        User.findOne({
            email: req.body.email
        }, (userErr, user) => {
            if (userErr) throw userErr;

            if (!user) {
                res.send({success: false, message: 'Authentication failed. User not found.'});
            } else {
                user.comparePassword(req.body.password, (err, isMatch) => {
                    if (isMatch && !err) {
                        const token = jwt.sign({
                            _id: user._id,
                            email: user.email,
                            role: user.role
                        }, config.jwtSecret, {expiresIn: '2h'});
                        res.json({success: true, token: token, role: user.role});
                    } else {
                        res.status(401).send({message: 'Authentication failed. Passwords did not match.'});
                    }
                });
            }
        });
    });

    router.get('/isAuthorized', (req, res) => {
        if (!req.headers.authorization) {
            return res.json({role: 'none'});
        }
        jwt.verify(req.headers.authorization, config.jwtSecret, (err) => {
            if (err) {
                return res.json({role: 'none'});
            }
            res.json({role: jwt.decode(req.headers.authorization).role});
        });
    });

    return router;
}