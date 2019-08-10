const express    = require('express');
const router     = express.Router();
const axios      = require('axios');
const { catAPI } = require('./../config.json');

// Main route
router.get('/', (req, res) => {
    res.render('landing');
});

router.get('/about', (req, res) => {
    // TODO - display a random cat (or dog((maybe))) image as the background image, add an about me and link to a reputable animal and suicide charity.
    res.render('about');
});

module.exports = router;