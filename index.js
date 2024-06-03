require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const userRoute = require('./routes/user');
const connectToDB = require('./config/dbConnection');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Chat!');
});

app.use('/api', userRoute);

const errorHandler = require("./middlewares/errorHandler");

connectToDB().then(() => {
  app.listen(port, () => {
    console.log(`listening for requests on port: ${port}`);
  });
});