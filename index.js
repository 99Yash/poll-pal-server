const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./models/User');
require('./services/passport');

const app = express();
app.set('trust proxy', 1); // trust first proxy

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

app.listen(5000, async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017', {
    dbName: 'poll-pal',
  });
  console.log('Server is running on port 5000');
});
