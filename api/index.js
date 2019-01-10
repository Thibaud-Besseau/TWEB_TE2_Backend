require('dotenv/config');
const express = require('express');
const passport = require('passport');
const { port } = require('./config');
const api = require('./routes/api');
const auth = require('./routes/auth');
var mongoose = require('mongoose');

const app = express();
const { mongoURI: db } = process.env;



// Connect to MongoDB with Mongoose.
mongoose
    .connect(
        db,
        {
          useCreateIndex: true,
          useNewUrlParser: true
        }
    )
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.use(express.json());
app.use(passport.initialize());

app.use('/api', api);
app.use('/auth', auth);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Magic happens at http://localhost:${port}`);
});
