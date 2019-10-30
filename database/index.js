const mongoose = require('mongoose');
let mongoUri = 'mongodb://mongo:27017/fec';

let connection = mongoose.connect( process.env.MONGODB_URI || mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = connection;