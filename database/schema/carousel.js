const mongoose = require('mongoose');
const Promise = require('bluebird');
mongoose.Promise = Promise;

const imageCarousel = mongoose.Schema({
  // id : Number,
  productName: String,
  images: []
});

const Images = mongoose.model('carousel', imageCarousel);
module.exports = Images;