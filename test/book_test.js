var request = require('supertest');
var app = require('../app');
// Tests if the books route responds successfully
describe('GET /books', function () {
  it('should return a 200 status for the /books route', function (done) {
    request(app)
      .get('/books') // Simulates a GET request to books route
      .expect(200) // Checks if the response status is 200, 200 means it is successful
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});