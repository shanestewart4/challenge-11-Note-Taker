// require express.js
const express = require('express');

const morgan = require('morgan');
// peg express server to app variable
const app = express();
const path = require('path');
const fs = require('fs');
// api routes
const apiRoutes = require('./routes/apiRoutes');

// html routes
const htmlRoutes = require('./routes/htmlRoutes');


// set port value to 3000
const PORT = process.env.PORT || 3000;

// const {notes} = require('./Develop/db/db.json')

//setting up morgan
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(__dirname, '/public'));
app.use(express.static('./Develop/public'));

// link server to the route files

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// Listener

app.listen(PORT, function(){
    console.log(`Listening on port: ${PORT}`);
})