// link routes to journal data.
const notes = require('../Develop/db/db.json')
const fs = require('fs');
const uuid = require('uuidv4')
const router = require('express').Router();

// commence routing

// GET
router.get('/notes', function (req,res) {
    res.json(notes);
});
// POST
router.post('/notes', function (req,res) {
    let noteId = uuid;
    let newNote = {
        id: noteId,
        title: req.body.title,
        text: req.body.text
    };
    console.log('new note', newNote);
    console.log('notes', notes);

    notes.push(newNote);

    res.status(200).json(newNote);

    // fs.readFile('./Develop/db/db.json', "utf8" , (err, data) => {
    //     if (err) throw err;

    //     const allNotes = JSON.parse(data);
    //     allNotes.push(newNote);

    //     // stringfy data
    //     //const dataString = JSON.stringify(dbData);
    //     // write data to file
    //     fs.writeFile('./Develop/db/db.json', JSON.stringify(allNotes, null, 2) , err => {
    //         if (err) throw err;
    //         res.send(db);
    //         console.log('New note generated!')
    //     });
    // });
});
// DELETE

router.delete('/notes/:id', (req, res) => {
    let noteId = req.params.id;
    fs.readFile("../Develop/db/db.json", "utf8" , (err, data) => {
        if (err) throw err;

        const allNotes = JSON.parse(data);
        const newAllNotes = allNotes.filter(note => note.id != noteId);

        fs.writeFile("../Develop/db/db.json", JSON.stringify(newAllNotes, null, 2), err => {
            if (err) throw err;
            res.send(db);
            console.log("Note successfully removed!");
        });
    });
});



module.exports = router;



