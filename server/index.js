const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const db = require('../database/config');
const Images = require('../database/schema/carousel.js');
let app = express();
app.use('*', cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, '/../client/dist')));


app.get('/:productName', (req, res) => {
  res.sendFile((path.join(__dirname + '/../client/dist/index.html')))
})

// app.get('/buy/*', (req,res) => {
//   res.sendFile(path.join(__dirname, '/../client/dist/index.html'))
// });






// app.get('/api/getAllProducts', (req,res) => {
//   Images.find((err,results) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(results);
//       res.json(results);
//     }
//   })
// })

app.get('/api/:productName', (req,res) => {
  console.log(req.params.productName);
  Images.find({
    productName : req.params.productName
  }, (err, results) => {
    if (err) {
      console.log('err', err);
    } else {
      res.json(results);
    }
  });
});


app.listen(port, function () {
  console.log(`listening on port ${port}`);
});