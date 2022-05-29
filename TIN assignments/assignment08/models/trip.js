const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  destination: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  hotel: {
    type: String,
    required: true
  },
  dates: {
    type: String,
    required: true
  },
}, { timestamps: true });

const trip = mongoose.model('trip', tripSchema);
module.exports = trip;