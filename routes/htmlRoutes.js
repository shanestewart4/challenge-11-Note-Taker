const path = require('path');
const fs = require('fs');
const router = require('express').Router();

// start routing


// GET
router.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, '../Develop/public/notes.html'));
});

// GET - send home if no route is found
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../Develop/public/index.html'));
});


module.exports = router;