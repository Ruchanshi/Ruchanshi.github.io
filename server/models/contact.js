//Name: Ruchanshi Desai
//File name:app.js
//ID: 100729822
//date: 7 April 2020


let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    contactNumber: String
},
{
    collection: 'contacts'
});

module.exports = mongoose.model('contact', contactSchema);