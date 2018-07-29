const express = require('express');
const app = express();

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

// Routes
const router = require('./config/routes');
app.use(router);

app.listen(PORT, () => console.log(`Up and running on PORT ${PORT}`));
