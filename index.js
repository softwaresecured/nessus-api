'use strict';

var Nessus = require('./lib/nessus');
var pkg = require('./package');

module.exports = function() {
  var nessus = Nessus.getNessus();
  nessus.version = pkg.version;
  return nessus;
};
