const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Book = require('../models/Book.js')

// Get all books
router.get('/', (req, res, next) => {
  Book.find((err, products) => {
    if (err) return next(err);
    res.json(products)
  });
});

// Get single book by Id
router.get('/:id', (req, res, next) => {
  Book.findById(req.params.id, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

// Save Book
router.post('/', (req, res, next) => {
  Book.create(req.body, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

// Update Book
router.put('/:id', (req, res, next) => {
  Book.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

// Delete Book

router.delete('/:id', (req, res) => {
    Book.findById(req.params.id)
      .then(book => book.remove().then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false }))
  })

/*  The below code with findBYIdAndRemove was not able to delete the book from database.
Hence changed to above with only findById and the remove()

router.delete('/:id', (req, res, next) => {
  Book.findByIdAndRemove(req.params.id, req.body, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
}); */

module.exports = router;