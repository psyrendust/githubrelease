#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var path = require('path');
var semver = require('semver');

if (argv.version) {
  console.log(require('./package.json').version); // eslint-disable-line
} else if (argv.p) {
  console.log(path.resolve(__dirname)); // eslint-disable-line
}
