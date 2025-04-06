var assert = require('assert');
var request = require('supertest');
var app = require('../app');

describe('GET /books', function () {
  it('should return a 200 status for the /books route', function (done) {
    request(app)
      .get('/books') // Test if the books route works
      .expect(200) // HTTP status 200 means it works
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});

