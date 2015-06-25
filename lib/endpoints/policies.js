'use strict';

module.exports.methods = function(config) {
  var http = require('../http').methods(config);

  return {
    list: function(cb) {
      http.get('/policies', [], function(err, body) {
        if (err) { return cb(err); }
        return cb(err, body.policies);
      });
    },

    details: function(pid, cb) {
      http.get('/policies/' + pid, [], function(err, body) {
        if (err) { return cb(err); }
        return cb(err, body);
      });
    }
  };
};
