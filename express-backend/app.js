const express = require('express');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const methodOverride = require('method-override');
const session = require('express-session');
const cors = require('cors');
require('dotenv').config({ path: './config/config.env' });
const dbConnect = require('./config/db');
const userRouter = require('./routes/userRoutes');
const taskRouter = require('./routes/taskRoutes');
const formRouter = require('./routes/formRoutes');
const errorHandler = require('./middleware/errorHandler');

const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(methodOverride('_method'));
app.use(cors());

app.use(session({
    secret: 'shhhhhh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 },
    store: MongoStore.create({
        mongoUrl: `${process.env.DB_SERVER}/${process.env.database}`,
        collection: 'sessions'
    })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/tasks', taskRouter);
app.use('/user', userRouter);
app.use('/', formRouter);

// app.use(errorHandler);

dbConnect();

app.listen({ path: HOSTNAME, port: PORT }, (error) => {
    if (error) return console.log(error);
    console.log(`Server is running on port ${PORT}...`);
}); 
