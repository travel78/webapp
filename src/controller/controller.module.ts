import login from './auth/login';
import signup from './auth/signup';
import person from './person/person';
import admin from './admin/admin';
import company from './company/company';

export class ControllerModule {

    constructor(private app) {
    }

    public initRoutes() {
        this.app.use(login());
        this.app.use(signup());
        this.app.use('/person',person());
        this.app.use('/admin',admin());
        this.app.use('/company',company());
    }
}