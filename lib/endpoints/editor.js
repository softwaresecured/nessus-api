'use strict';

module.exports.methods = function(config) {
  var http = require('../http').methods(config);

  return {
    list: function(type, cb) {
      http.get('/editor/' + type + '/templates', [], function(err, body) {
        if (err) { return cb(err); }
        return cb(err, body.templates);
      });
    },

    details: function(type, pid, cb) {
      http.get('/editor/' + type + '/templates/' + pid, [], function(err, body) {
        if (err) { return cb(err); }
        return cb(err, body);
      });
    }
  };
};
