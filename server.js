// require express.js
const express = require('express');

const fs = require('fs');

// peg express server to app variable

const app = express();

// set port value to 3000

const PORT = process.env.PORT || 3000;

// set express app to handle data

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/assets', express.static('./assets'));

// link server to the route files

// api routes
require('./routes/apiRoutes')(app);

// html routes
require('./routes/htmlRoutes')(app);

// Listener

app.listen(PORT, function(){
    console.log(`listening on port: ${PORT}`);
})