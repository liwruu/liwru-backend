import session from 'express-session';

const sessionConfig = session({
    secret: 'mz3842m5a7',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
});

export default sessionConfig;
