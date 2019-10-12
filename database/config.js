const mongoose = require('mongoose')
let connection = mongoose.connect('mongodb://localhost/fec', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = connection;