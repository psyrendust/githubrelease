#!/usr/bin/env node
var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs');
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

/**
 * Get the location for a node cli command by checking for locally installed
 * `node_modules` (ie npm <= 2.x) and for flattened installed `node_modules`
 * (id npm >= 3.x || yarn).
 * @param  {String[]}  dirs  An array of directories to search.
 * @param  {String}  cmd  The node cli command to search for.
 */
function getCmdLocation(cmd) {
  var counter = -1;
  var permutations = [];
  var paths = [
    __dirname,
    process.cwd()
  ];

  /**
   * Create folder permutations to search for a node cli command.
   * @param  {String}  dir  The directory to create a permutation for.
   */
  function createPermutations(dir) {
    var basename = path.basename(dir);
    var dest;
    if (basename === '.bin') {
      dest = dir + '/' + cmd;
    } else if (basename === 'node_modules') {
      dest = dir + '/.bin/' + cmd;
    } else {
      dest = dir + '/node_modules/.bin/' + cmd;
    }
    permutations.push(path.normalize(dest));
  }

  /**
   * Log out the location for the node cli command.
   * @param  {String}  cmdPath  The path for the node cli command.
   */
  function getCmdLocationComplete(cmdPath) {
    console.log(cmdPath);
  }

  /**
   * Check the next location for the node cli command.
   */
  function next() {
    counter += 1;
    if (counter >= permutations.length) {
      getCmdLocationComplete(undefined);
    } else {
      fs.stat(permutations[counter], statComplete);
    }
  }

  /**
   * Handle fs.stat command and check if the file exists.
   * @param  {Error}  err  The error object returned by fs.stats.
   * @param  {Stats}  stats  The stats object returned by fs.stats.
   */
  function statComplete(err, stats) {
    if (err) {
      next();
    } else if (stats.isFile()) {
      getCmdLocationComplete(permutations[counter]);
    }
  }

  paths.forEach(createPermutations);
  next();
}

if (argv.version) {
  console.log(require('./package.json').version); // eslint-disable-line
} else if (argv.p) {
  getCmdLocation(argv.p);
} else if (argv.inc && argv.release) {
  if (validReleaseTypes.indexOf(argv.release) >= 0) {
    console.log(semver.inc(argv.inc, argv.release)); // eslint-disable-line
  } else {
    console.log(semver.valid(argv.release)); // eslint-disable-line
  }
}
