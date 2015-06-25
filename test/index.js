/* global describe, it, beforeEach */

'use strict';

// force the test environment to 'test'
process.env.NODE_ENV = 'test';

var chai = require('chai');
var expect = chai.expect;
// var should = chai.should();

var Nessus = require("../index");

var testOptions = require('./fixtures/options');

describe("Nessus", function(){

  describe("initialization", function(){
    it("should load the module successfully", function(){
      expect(Nessus).to.exist;
    });
  });

  describe("#config", function(){

    var nessus;

    beforeEach(function() {
      nessus = new Nessus();
    });

    it("should accept a config object", function(){
      expect(nessus.config(testOptions)).to.be.ok;
    });

    it("should return the current config object", function(){
      expect(nessus.config()).to.exist;
    });

    it("should accept optional config options", function(){
      testOptions.strictSSL = false;
      expect(nessus.config()).to.be.ok;
    });

    it("should throw an error if a required attr is missing", function(){
      delete testOptions.username;
      expect(nessus.config.bind(null, testOptions)).to.throw(Error);
    });
  });
});
