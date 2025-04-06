const express = require('express');
const router = express.Router();
const db = require('../firebase'); // Import Firestore

// Add book
router.post('/add', async (req, res) => {
  const { name, author, year } = req.body;
  try {
    await db.collection('books').add({ name, author, year });
    res.redirect('/');
  } catch (error) {
    console.error("Error adding book:", error);
    res.render('error', { message: "Error adding book", error });
  }
});

// Edit a book
router.post('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const { name, author, year } = req.body;
  try {
    await db.collection('books').doc(id).update({ name, author, year });
    res.redirect('/');
  } catch (error) {
    console.error("Error editing book:", error);
    res.render('error', { message: "Error editing book", error });
  }
});

// Delete a book
router.post('/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.collection('books').doc(id).delete();
    res.redirect('/');
  } catch (error) {
    console.error("Error deleting book:", error);
    res.render('error', { message: "Error deleting book", error });
  }
});

module.exports = router;