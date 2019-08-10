const express    = require('express');
const router     = express.Router();
const axios      = require('axios');
const { catAPI } = require('./../config.json');

// Main route
router.get('/', (req, res) => {
    // const token = catAPI;
    //         headers: [{
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //             Authorization: 'Bearer ' + token
    //         }]
    axios.all([
        axios.get("https://api.thecatapi.com/v1/images/search"),
        axios.get("https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc"), //Will need to manually add headers to every request if i want to use the apis voting funcctionality!
        axios.get("https://catfact.ninja/fact")
    ])
    .then(axios.spread((randCatImages, descCatImages, catFacts) =>{
        res.render('landing',{randCatImages: randCatImages.data, descCatImages:descCatImages.data, catFacts:catFacts.data.fact});
    })); 
});

router.get('/about', (req, res) => {
    // TODO - display a random cat (or dog((maybe))) image as the background image, add an about me and link to a reputable animal and suicide charity.
    res.render('about');
});

module.exports = router;