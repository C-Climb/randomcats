const express    = require('express');
const router     = express.Router();
const axios      = require('axios');

router.get('/cat', (req, res) => {
    axios.all([
        axios.get("https://api.thecatapi.com/v1/images/search"),
        axios.get("https://api.thecatapi.com/v1/images/search?limit=1&page=10&order=Desc"), //Will need to manually add headers to every request if i want to use the apis voting funcctionality!
        axios.get("https://catfact.ninja/fact")
    ])
    .then(axios.spread((randCatImages, descCatImages, catFacts) =>{
        res.render('cat',{randCatImages: randCatImages.data, descCatImages:descCatImages.data, catFacts:catFacts.data.fact});
    })); 
});

router.get('/dog', (req, res) =>{
    axios.all([
        axios.get("https://api.thedogapi.com/v1/images/search"),
        axios.get("https://api.thedogapi.com/v1/images/search?limit=1&page=10&order=Desc"),
        axios.get("https://dog-api.kinduff.com/api/facts")
    ])
    .then(axios.spread((randDogImages,nextDogImage,dogFacts) =>{
        res.render('dog', {randDogImages:randDogImages.data,nextDogImage:nextDogImage.data,dogFacts:dogFacts.data.facts});
    })); 
});

module.exports = router;