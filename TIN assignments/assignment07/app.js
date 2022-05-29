const express = require('express');
const morgan = require('morgan');

const fs = require('fs');

const app = express();

app.listen(3000);

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});


app.get('/', (req, res) => {
  try{
    const jsonString = fs.readFileSync('./data/db.json', 'utf-8');
    const data = JSON.parse(jsonString);
  
    trips = data.trips;

    res.render('index', { title: 'Home', trips });
    }catch (err){
    console.log(err)
    }
  
});

app.get('/trips/create', (req, res) => {
  res.render('create', { title: 'Create a new trip' });
});

app.post('/trips', (req, res) => {
 
  var newTrip ={
    destination: req.body.destination,
    hotel: req.body.hotel,
    city: req.body.city,
    dates: req.body.dates,
  }
  const jsonString = fs.readFileSync('./data/db.json', 'utf-8');
  const data = JSON.parse(jsonString);
  data['trips'].push(newTrip);


  fs.writeFile("./data/db.json", JSON.stringify(data) , (err) => {
    // Error checking
    if (err) throw err;
    console.log("New data added");
  });
   res.redirect('/')
 });

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});