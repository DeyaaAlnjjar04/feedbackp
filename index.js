const express = require('express');
const mongoose=require('mongoose')
const cookieSession=require('cookie-session')
const passport=require('passport')
const keys=require('./config/keys')

require('./modils/user')

require('./services/passpot')


mongoose.connect(keys.mongouri)

const app = express();

app.use(
    cookieSession({
        maxAge:30*24*60*60*1000,
        keys:[keys.cookerKey]
    })
)

app.use(passport.initialize())
app.use(passport.session())


require('./routes/authroutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
