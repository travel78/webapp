import * as express from 'express';
import * as mongoose from 'mongoose';

import  config  from './config/main';
import { Middleware } from './middleware';

// db connection
mongoose.connect(config.db.url,()=>{
    console.log('connected to mongo db');
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// start server
const app = express();

new Middleware(app).initMiddlewares();

app.listen(config.port, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`server is listening on ${config.port}`)
});

