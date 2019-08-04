const express = require('express');
const router = express.Router();
const Note = require('../models/notes.js');

// New
router.get('/new', (req, res) => {
  res.render('app/new.ejs');
});

// Delete
router.delete('/:id', (req, res) => {
  Note.findByIdAndRemove(req.params.id, (err, deletedNote) => {
    res.redirect('/app');
  });
});

// Edit
router.get('/:id/edit', (req, res) => {
  Note.findById(req.params.id, (err, foundNote) => {
    res.render('app/edit.ejs', {
      note: foundNote
    });
  });
});

// Update
router.put('/:id', (req, res) => {
  Note.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedNote) => {
    res.redirect('/app');
  });
});

// Index
router.get('/', (req, res) => {
  Note.find({}, (error, allNotes) => {
    res.render('app/index.ejs', {
      notes: allNotes
    });
  });
});

// Show
router.get('/:id', (req, res) => {
  Note.findById(req.params.id, (err, foundNote) => {
    res.render('app/show.ejs', {
      note: foundNote
    });
  });
});

// Create
router.post('/', (req, res) => {
  Note.create(req.body, (err, createdNote) => {
    res.redirect('/app');
  });
});

module.exports = router;
