'use strict';

module.exports.methods = function(config) {
  var http = require('../http').methods(config);

  return {
    create: function(data, cb) {

      data = data || {};
      data.settings = data.settings || {};

      if (!data.uuid) { return cb(new Error('Specifiy a template to create a scan')); }
      if (!data.settings.name) { return cb(new Error('Specifiy a name for the new scan')); }
      if (!data.settings.enabled) { return cb(new Error('Enable the scan')); }
      if (!data.settings.text_targets) { return cb(new Error('Specifiy a list of targets')); }

      http.post('/scans', [], data, function(err, body) {
        if (err) { return cb(err); }
        return cb(err, body.scan);
      });
    },

    delete: function(sid, cb) {
      http.delete('/scans/' + sid, function(err) {
        if (err) { return cb(err); }
        return cb(err);
      });
    },

    list: function(cb) {
      http.get('/scans', [], function(err, body) {
        if (err) { return cb(err); }
        return cb(err, body);
      });
    },

    details: function(sid, cb) {
      http.get('/scans/' + sid, [], function(err, body) {
        if (err) { return cb(err); }
        return cb(err, body);
      });
    },

    launch: function(sid, data, cb) {
      http.post('/scans/' + sid + '/launch', [], data, function(err, body) {
        if (err) { return cb(err); }
        return cb(err, body.scan_uuid);
      });
    },

    export: function(sid, data, cb) {

      if (!sid) { return cb(new Error('Need a scan id to export')); }

      data.format = data.format || 'Nessus';

      http.post('/scans/' + sid + '/export', [], data, function(err, body) {
        if (err) { return cb(err); }
        return cb(err, body.file);
      });
    },

    download: function(sid, fid, cb) {
      http.get('/scans/' + sid + '/export/' + fid + '/download', [], function(err, body) {
        if (err) { return cb(err); }
        return cb(err, body);
      });
    }
  };
};
