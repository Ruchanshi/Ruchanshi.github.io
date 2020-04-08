//Name: Ruchanshi Desai
//File name:app.js
//ID: 100729822
//date: 7 April 2020


let express = require('express');
let router = express.Router();

// connect the contactsController
let contactController = require('../controllers/contact');

/* GET Contact List page - READ Operation */
router.get('/', contactController.displayContactList);

/* GET request to perform the delete action */
router.get('/delete/:id', contactController.performDelete);

module.exports = router;