// **** Write your test before your code, thanks :) ****
let chai = require('chai');
let expect = chai.expect;
let app = require('../app.js');

chai.should();
chai.use(require('chai-things'));
chai.use(require('chai-http'));

describe('Person', () => {
  describe('GET /:id', () => {
    it('should be return object with some key', function(done) {
      chai
        .request(app)
        .get('/id_ID')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          const props = ['id', 'avatar', 'firstname', 'lastname', 'username', 'birth', 'height', 'weight', 'age', 'title', 'job', 'jobDesc', 'jobType', 'email', 'phone', 'address'];
          props.forEach(el => {
            res.body.should.all.have.property(el);
            console.log('\x1b[32m\x1b[1m', el, ':');

            if (el === 'age' || el === 'height' || el === 'weight') {
              expect(res.body[0][el]).to.be.a('number');
              console.log('\x1b[33m\x1b[1m', '- Is a number ✓');
            } else {
              expect(res.body[0][el]).to.be.a('string');
              console.log('\x1b[36m\x1b[1m', '- Is a string ✓');
            }
          });
          done();
        });
    });

    it('should be return error if country code invalid', function(done) {
      chai
        .request(app)
        .get('/id_IDS')
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.code).to.equal(400);
          console.log('\x1b[31m\x1b[1m', res.body);
          expect(res.body.message).to.equal('country code invalid!');
          done();
        });
    });

    it('should be return data with limit', function(done) {
      chai
        .request(app)
        .get('/id_ID?page=1')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          expect(res.body).to.have.length(10);
          done();
        });
    });
  });
});