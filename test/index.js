'use strict';

var async = require('async');
var wmi = require('../lib/node-wmi');

async.auto({
  contructor: function(cb) {
    wmi.Query({
      class: 'Win32_LogicalDisk'
    }, cb);
  },
  chainWithExec: wmi.Query().class('Win32_LogicalDisk').exec,
  chainWithFn: function(cb) {
    wmi.Query().class('Win32_LogicalDisk', cb);
  }
}, function(err, result) {
  if (err) {
    console.error(err);
  } else {
    console.dir(result, { colors: true });
  }
});
