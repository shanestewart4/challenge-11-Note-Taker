// link routes to journal data.
const fs = require('fs');
const journalData = require('../data/journalData');

const router = require('express').Router();



// commence routing


module.exports = function (router) {
    // GET
    router.get('/api/journals', function (req,res) {
        res.json(journalData);
    });
    // POST
    router.post('/api/journals', function (req,res) {
        journalData.push(req.body);
        res.json('saved');
    })
    // DELETE

    router.delete('/api/journals/:index', function (req, res) {
        const elem = parseInt(req.params.index);
        const temporaryJournal = [];
        // for loop through journalData
        for (let i = 0; i < journalData.length; i++) {
            if (i !== elem) {
                temporaryJournal.push(journalData[i]);
            }
        }
        
        journalData = temporaryJournal;

        res.json('delete complete');


    })




}






