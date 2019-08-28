const express       = require('express'),
      app           = express(),
      bodyParser    = require('body-parser'),
      port          = process.env.PORT || 4200;   

const indexRoutes    = require('./routes/index');
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

// TODO
// ERROR HANDLING || DYNAMIC IMAGE RESIZING || DYNAMIC HTML RENDERING || ACTUAL STYLING || BEM REFACTOR PASS

// --------- DYNAMIC HTML RENDERING LOGIC
// IF THE PAGE WE ARE ON IS TRUE, HIDE IN NAV

// ========= ERROR HANDING LOGIC
// view the actual express docs!

// ADD URL PARAMETER WITH SHORT ID