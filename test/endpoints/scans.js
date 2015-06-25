/* global describe, it, before, after */

'use strict';

// force the test environment to 'test'
process.env.NODE_ENV = 'test';

var chai = require('chai');
var expect = chai.expect;
// var should = chai.should();

var Nessus = require("../../index");
var testOptions = require('../fixtures/options');

describe("Scans", function(){

  var nessus = new Nessus();
  nessus.config(testOptions);

  before(function(done) {
    nessus.session.create(function(err) {
      if (err) { return done(err); }
      done();
    });
  });

  after(function(done) {
    nessus.session.destroy(function(err) {
      if (err) { return done(err); }
      done();
    });
  });

  describe("#list", function() {
    it("should return a list of scans", function(done) {
      nessus.scans.list(function(err, scans) {
        expect(err).to.not.be.ok;
        expect(scans).to.be.ok;
        done();
      });
    });
  });

  // describe("#details", function() {
  //   it("should return details for a policy", function(done) {
  //     nessus.policies.details('', function(err) {
  //       expect(err).to.not.be.ok;
  //       // expect(details).to.be.ok;
  //       done();
  //     });
  //   });
  // });
});
