const express = require('express'),
      app     = express(),
      axios   = require('axios'),
      bodyParser    = require('body-parser'),
      port    = 4200;   

const indexRoutes = require('./routes/index');
const animalRoutes   = require('./routes/animal');
   
//setting view engine
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

app.use('/', indexRoutes);
app.use('/animal', animalRoutes);

app.listen(port, () => {
    console.log(`now listening on ${port}`);
});