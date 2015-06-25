'use strict';

var path = require('path');
var fs = require('fs');

var endpoints = fs.readdirSync(path.join(__dirname, "endpoints"));

module.exports.getNessus = function() {

  var nessus = {};

  nessus.options = {
    strictSSL: false,
    json: true,
    headers: {}
  };

  nessus.config = function(options) {
    if (!options) {
      return nessus.options;
    }

    var requiredAttrs = ['host', 'username', 'password'];
    var optionalAttrs = Object.keys(nessus.options);

    requiredAttrs.forEach(function(attr) {
      if (options[attr]) {
        delete nessus.options[attr];
        nessus.options[attr] = options[attr];
      } else {
        throw Error('A ' + attr + ' option is required.');
      }
    });

    optionalAttrs.forEach(function(attr) {
      if (options[attr]) {
        delete nessus.options[attr];
        nessus.options[attr] = options[attr];
      }
    });

    return nessus.options;
  };

  endpoints.forEach(function(file) {
    if(/\.js$/.test(file)) {
      var namespace = file.split('.')[0];
      var methods = require(path.join(__dirname, 'endpoints', file)).methods(nessus.options);

      var methodNames = Object.keys(methods);

      if (methodNames.length > 0) {
        nessus[namespace] = {};

        methodNames.forEach(function(methodName) {
          nessus[namespace][methodName] = methods[methodName];
        });
      }
    }
  });

  return nessus;
};
