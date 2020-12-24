const path = require('path');

const router = require('express').Router();

// start routing

module.exports = function(router) {
    // GET

    router.get('/notes', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    // GET - link to the CSS
    router.get('/styles', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/assets/css/styles.css'));
    });

    // GET - send home if no route is found
    router.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

};