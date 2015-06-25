/* global describe, it */

'use strict';

// force the test environment to 'test'
process.env.NODE_ENV = 'test';

var chai = require('chai');
var expect = chai.expect;
// var should = chai.should();


var http = require("../lib/http");
var testOptions = require('./fixtures/options');

describe("HTTP", function(){
  describe("initialize", function(){
    it("should load the required methods", function(){
      expect(Object.keys(http.methods(testOptions)).sort()).to.deep.equal(['get', 'put', 'post', 'del'].sort());
    });
  });
});
