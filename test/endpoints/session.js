/* global describe, it, before */

'use strict';

// force the test environment to 'test'
process.env.NODE_ENV = 'test';

var chai = require('chai');
var expect = chai.expect;
// var should = chai.should();

var Nessus = require("../../index");
var testOptions = require('../fixtures/options');

describe("Session", function(){

  var nessus = new Nessus();
  nessus.config(testOptions);

  describe("#create", function() {
    it("should return a valid token upon login", function(done) {
      nessus.session.create(function(err, token){
        expect(err).to.not.be.ok;
        expect(token).to.be.ok;
        done();
      });
    });
  });

  describe("#get", function() {
    it("should return a valid session", function(done) {
      nessus.session.create(function(err, session){
        expect(err).to.not.be.ok;
        expect(session).to.be.ok;
        done();
      });
    });
  });

  describe("#destroy", function() {
    it("should have a token in the current session", function() {
      expect(nessus.config().token).to.exist;
    });

    it("should logout the current session", function(done) {
      nessus.session.destroy(function(err) {
        expect(err).to.be.null;
        done();
      });
    });
  });
});
