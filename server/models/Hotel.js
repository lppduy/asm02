const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['Hotel', 'Apartments', 'Resorts', 'Villas', 'Cabins'],
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  distance: {
    type: Number,
    required: true,
  },
  photos: [{
    type: String,
  }],
  desc: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rooms: [{
    type: Schema.Types.ObjectId,
    ref: 'Room',
  }],
});

module.exports = mongoose.model('Hotel', hotelSchema);