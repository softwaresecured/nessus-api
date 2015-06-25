'use strict';

var request = require('request');

module.exports.methods = function(config) {
  return {
    get: function(uri, params, cb) {

      var options = config;

      options.method = 'GET';
      options.url = config.host + uri + '?' + params.join('&');

      if (config.token) {
        options.headers['X-Cookie'] = 'token=' + config.token;
      }

      request(options, function(err, response, body) {
        if (err) { return cb(err); }
        return cb(err, body);
      });

    },
    post: function(uri, params, data, cb) {
      var options = config;

      options.method = 'POST';
      options.url = config.host + uri + '?' + params.join('&');
      options.body = data;

      if (config.token) {
        options.headers['X-Cookie'] = 'token=' + config.token;
      }

      request(options, function(err, response, body) {
        if (err) { return cb(err); }
        return cb(err, body);
      });
    },
    put: function(uri, params, data, cb) {
      var options = config;

      options.method = 'PUT';
      options.url = config.host + uri + '?' + params.join('&');
      options.body = data;

      if (config.token) {
        options.headers['X-Cookie'] = 'token=' + config.token;
      }

      request(options, function(err, response, body) {
        if (err) { return cb(err); }
        return cb(err, body);
      });
    },
    del: function(uri, cb) {
      var options = config;

      options.method = 'DELETE';
      options.url = config.host + uri;

      if (config.token) {
        options.headers['X-Cookie'] = 'token=' + config.token;
      }

      request(options, function(err, response, body) {
        if (err) { return cb(err); }
        return cb(err, body);
      });
    }
  };
};
