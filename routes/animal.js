const express    = require('express');
const router     = express.Router();
const axios      = require('axios');

router.get('/cat', (req, res) => {
    function errorHandler(err){
        res.render('404',{err:err.message});
    }

    axios.all([
        axios.get("https://api.thecatapi.com/v1/images/search").catch(errorHandler),
        axios.get("https://api.thecatapi.com/v1/images/search?limit=1&page=10&order=Desc").catch(errorHandler),
        axios.get("https://catfact.ninja/fact").catch(errorHandler)
    ])
    .then(axios.spread((randCatImages, nextCatImages, catFacts) =>{
        res.render('cat',{randCatImages: randCatImages.data, nextCatImages:nextCatImages.data, catFacts:catFacts.data.fact});
    })); 
});

router.get('/dog', (req, res) =>{
    function errorHandler(err){
        res.render('404',{err:err.message});
    }

    axios.all([
        axios.get("https://dog.ceo/api/breeds/image/random").catch(errorHandler),
        axios.get("https://dog.ceo/api/breeds/image/random").catch(errorHandler)
    ])
    .then(axios.spread((randDogImages,nextDogImage) =>{
        res.render('dog', {randDogImages:randDogImages.data, nextDogImage:nextDogImage.data});
    }));
});

module.exports = router;