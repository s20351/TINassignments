const Trip = require('../models/trip');

const trip_index = (req, res) => {
  
  Trip.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { trips: result, title: 'All trips' });
    })
    .catch(err => {
      console.log(err);
    });
}

const trip_details = (req, res) => {
  const id = req.params.id;
  Trip.findById(id)
    .then(result => {
      res.render('detailsTrip', { trip: result, title: 'trip Details' });
    })
    .catch(err => {
      console.log(err);
      res.render('404', { title: 'trip not found' });
    });
}

const trip_create_get = (req, res) => {
  res.render('create', { title: 'Create a new trip' });
}

const trip_create_post = (req, res) => {
  const trip = new Trip(req.body);
  console.log(trip)
  trip.save()
    .then(result => {
      res.redirect('/trips');
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = {
  trip_index, 
  trip_details, 
  trip_create_get, 
  trip_create_post, 
}