const axios = require('axios');
test('Should make successful GET request to API', done => {
  return axios.get('http://localhost:3001/api/small-wooden-pizza')
    .then(result => {
      return result.data
    })
    .then(data => {
      expect(data.images).toHaveLength(9);
    })
    .then(() => {
      done();
    })
});

