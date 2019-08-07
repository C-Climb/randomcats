const express = require('express');
const router = express.Router();
const axios = require('axios');
const { catAPI } = require('./../config.json');

// Main route
router.get('/', (req, res) => {
    const token = catAPI;
    axios.get("https://api.thecatapi.com/v1/images/search?limit=1&page=0&order=Desc", ({
            headers: [{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            }]
        }))
        .then((response) => {
            res.render('landing',{catImages: response.data});
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;