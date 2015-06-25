'use strict';

module.exports.methods = function(config) {
  var http = require('../http').methods(config);

  return {
    create: function(cb) {

      var data = {
        username: config.username,
        password: config.password,
      };

      http.post('/session', [], data, function(err, body) {
        if (err) { return cb(err); }
        config.token = body.token;
        return cb(err, config.token);
      });
    },

    destroy: function(cb) {
       http.del('/session', function(err) {
        if (err) { return cb(err); }
        delete config.token;
        return cb(err);
      });
    },

    get: function(cb) {
       http.get('/session', function(err, body) {
        if (err) { return cb(err); }
        return cb(err, body);
      });
    }
  };
};
