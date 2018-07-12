import * as express from 'express';
import User from '../../model/user';

const router = express.Router();

export default () => {
    router.post('/signup', (req, res) => {
        if (!req.body.email || !req.body.password) {
            res.json({success: false, message: 'Please enter email and password.'});
        } else {
            const newUser = new User({
                email: req.body.email,
                password: req.body.password,
                role: req.body.isCompany ? 'Company' : 'Person'
            });

            newUser.save(err => {
                if (err) {
                    return res.json({success: false, message: 'That email address already exists.'});
                }
                res.json({success: true, message: 'Successfully created new user.'});
            });
        }
    });
    return router;
}