const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');

const { PORT, DB_URI } = require('./config/environment.js');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(DB_URI);

// Layouts
const expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Static files
app.use(express.static(`${__dirname}/public`));

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride((req) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

// Routes
const router = require('./config/routes');
app.use(router);

app.listen(PORT, () => console.log(`Up and running on PORT ${PORT}`));
