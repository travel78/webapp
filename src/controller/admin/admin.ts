import * as express from 'express';
import * as passport from 'passport';
import * as jwt from 'jsonwebtoken';
import User from '../../model/user';
import Group from '../../model/group';
import Skill from '../../model/skill';


const router = express.Router();

export default () => {
    router.use(passport.authenticate('jwt', {session: false}));
    router.use((req, res, next) => {
        if (jwt.decode(req.headers.authorization).role === 'Admin') {
            next();
        } else {
            res.status('403').json({message: 'Only fore role Admin'});
        }

    });
    router.get('/users', (req, res) => {
        User.find({}, 'email role', (err, data) => {
            res.json(data);
        });
    });

    router.post('/group', (req, res) => {
        Group.findOneAndUpdate({name: req.body.group}, {$addToSet: {subgroups: req.body.subgroup}}, {upsert: true}, (err) => {
            if (err) {
                return res.status('500').json({message: 'Some problems with database'});
            }
            res.json('Created group');
        });
    });


    router.get('/groups', (req, res) => {
        Group.find({}, (err, data) => {
            if (err) {
                return res.status('500').json({message: 'Some problems with database'});
            }
            res.json(data);
        });
    });

    router.get('/skills', (req, res) => {
        Skill.find({}, (err, data) => {
            if (err) {
                return res.status('500').json({message: 'Some problems with database'});
            }
            res.json(data);
        });
    });
    return router;
}