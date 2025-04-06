var express = require('express');
var router = express.Router();
const { collection, getDocs } = require('firebase/firestore');
const db = require('../firebase'); // Import Firestore

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    // Fetch books from Firestore
    const booksSnapshot = await getDocs(collection(db, 'books'));
    const books = booksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Page with Firestore data
    res.render('index', { title: "BookTracker", books });
  } catch (error) {
    console.error("Error fetching books:", error);
    res.render('error', { message: "Error fetching books", error });
  }
});

module.exports = router;
