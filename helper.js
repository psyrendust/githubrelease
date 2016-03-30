#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var path = require('path');
var semver = require('semver');
var validReleaseTypes = [
  'major',
  'premajor',
  'minor',
  'preminor',
  'patch',
  'prepatch',
  'prerelease'
];

if (argv.version) {
  console.log(require('./package.json').version); // eslint-disable-line
} else if (argv.p) {
  console.log(path.resolve(__dirname)); // eslint-disable-line
} else if (argv.inc && argv.release) {
  if (validReleaseTypes.indexOf(argv.release) >= 0) {
    console.log(semver.inc(argv.inc, argv.release)); // eslint-disable-line
  } else {
    console.log(semver.valid(argv.release)); // eslint-disable-line
  }
}
