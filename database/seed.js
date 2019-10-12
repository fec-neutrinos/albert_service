const db = require('./config.js');
const mongoose = require('mongoose');
const Images = require('./schema/carousel.js');
const faker = require('faker');
var AWS = require('aws-sdk');

const s3 = require('./awsconfig.js');

let bucketParams = {
  Bucket: 'fec-albert',
};

s3.listObjects(bucketParams, (err, data) => {
  if (err) {
    throw new Error(`S3 error: ${err}`);
  } else {
    console.log('Successfully received data from S3', data.Contents);

    for (let i = 0; i < 100; i++) {
      let imageArray = [];
      // create a random length for each image array - creates a random number 8 - 11
      let randomLength = Math.floor(Math.random() * (11 - 8 + 1)) + 8;
      // concatenate base url
      let bucketUrl = 'https://fec-albert.s3.us-west-1.amazonaws.com/';

      while (randomLength) {
        let randomIndex = Math.floor(Math.random() * data.Contents.length);
        imageArray.push(`${bucketUrl}${data.Contents[randomIndex].Key}`);
        randomLength--;
      };

      Images.create({
        productName: faker.fake("{{commerce.productName}}"), //fix me here
        images: imageArray
      }, (error, results) => {
        if (error) {
          throw new Error(`DB error: ${error}`);
        } else {
          console.log(results);
          mongoose.disconnect();
        }
      })
    }
  }
});