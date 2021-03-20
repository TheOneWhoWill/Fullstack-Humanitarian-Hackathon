import charityRouter from './routes/foundations.js'
import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config()

//Connecting to moongodb
var dbURL = String(process.env.MONGO);
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log('Connected to db')
  })
  .catch((error) => console.log(error));


app.use(express.json())
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use('/', charityRouter)
app.listen(2000, () => console.log('Server Started on port 2000'))