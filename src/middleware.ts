import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as passport from 'passport';
import passportConf from './config/passport';

import { ControllerModule } from './controller/controller.module';


export class Middleware {
    private controllerModule: ControllerModule;

    constructor(private app) {
        this.controllerModule = new ControllerModule(this.app);
    }

    public initMiddlewares() {
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
        this.app.use(passport.initialize());
        passportConf(passport);
        this.app.get('/', (request, response) => {
            response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
        });
        this.app.use(express.static(path.resolve(__dirname, 'public')));

        this.controllerModule.initRoutes();

    }
}