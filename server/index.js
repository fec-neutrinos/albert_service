const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const db = require('../database/index');
const Images = require('../database/schema/carousel.js');
let app = express();
app.use('*', cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, '/../public')));


app.get('/:productName', (req, res) => {
  res.sendFile((path.join(__dirname + '/../public/index.html')))
})


app.get('/api/:productName', (req,res) => {
  // console.log(req.params.productName);
  Images.find({
    productName : req.params.productName
  }, (err, results) => {
    if (err) {
      console.log('err', err);
    } else {
      // console.log(results[0]);
      res.json(results[0]);
    }
  });
});


app.listen(port, function () {
  console.log(`listening on port ${port}`);
});