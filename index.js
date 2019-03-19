import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import itemRoutes from './src/routes/itemRoutes';
import customerRoutes from './src/routes/customerRoutes';
import orderRoutes from  './src/routes/orderRoutes';

var app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restaurant', {
  useNewUrlParser: true
});

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

//bodyparser setup
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

itemRoutes(app);
customerRoutes(app);
orderRoutes(app);

app.get('/', (req, res) => {
  res.send(`Server is running at ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your server is running at ${PORT}`);
});