const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('express').Router();
const news = require('./Controllers/news');

const { signup, signin } = require('./Controllers/authcontroller');
const mongoose = require('mongoose');
require("dotenv").config();

const PORT = 4020;
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);
app.use('/news',news)
//routes.use('/news', news);


async function connectToDB() {
mongoose.connect("mongodb://127.0.0.1:27017/local", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Your database operations here
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

}
connectToDB();

routes.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to the News Api");
  });

routes.post('/register', signup);

routes.post('/signin',signin);

  app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running and App is listening on port " + PORT);
    else
        console.log("Error occurred, server can't start", error);
    }
  );

  module.exports =  routes;