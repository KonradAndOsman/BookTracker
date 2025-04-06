const express = require('express');
const router = express.Router();
const { collection, addDoc, doc, updateDoc, deleteDoc } = require('firebase/firestore');
const db = require('../firebase'); // Import Firestore instance from firebase.js

// Add new book
router.post('/add', async (req, res) => {
  const { name, author, year, note } = req.body;
  try {
    // Use the modular API to add a document to the "books" collection
    await addDoc(collection(db, 'books'), { name, author, year, note }); // Save the note
    res.redirect('/');
  } catch (error) {
    console.error("Error adding book:", error);
    res.render('error', { message: "Error adding book", error });
  }
});

// Edit an existing book
router.post('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const { name, author, year } = req.body;
  try {
    // Use the modular API to get a reference to the document and update it
    const bookRef = doc(db, 'books', id);
    await updateDoc(bookRef, { name, author, year });
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
    // Use the modular API to get a reference to the document and delete it
    const bookRef = doc(db, 'books', id);
    await deleteDoc(bookRef);
    res.redirect('/');
  } catch (error) {
    console.error("Error deleting book:", error);
    res.render('error', { message: "Error deleting book", error });
  }
});

module.exports = router;