<a name="1.0.2"></a>
## [1.0.2](https://github.com/psyrendust/githubrelease/compare/v1.0.1...v1.0.2) (2018-12-27)


### Bug Fixes

* **githubrelease:** use --new-version flag for yarn ([1690d92](https://github.com/psyrendust/githubrelease/commit/1690d92))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/psyrendust/githubrelease/compare/v1.0.0...v1.0.1) (2018-12-27)


### Bug Fixes

* **githubrelease:** epic fail on backupPackage ([81f8d2d](https://github.com/psyrendust/githubrelease/commit/81f8d2d))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/psyrendust/githubrelease/compare/v0.5.3...v1.0.0) (2018-12-27)


### Chores

* **package:** update dependencies and set Node requirement to LTS ([f7c9234](https://github.com/psyrendust/githubrelease/commit/f7c9234))


### Features

* **githubrelease:** allow the user to change the npm client ([5964aef](https://github.com/psyrendust/githubrelease/commit/5964aef))


### BREAKING CHANGES

* **package:** Updates the npm packages for conventional-changelog dependencies, which
contains a breaking change that sets the package's minimum required Node
version to be the oldest LTS currently supported by the Node Release
working group. At this time, that is Node 6 (which is in its Maintenance
LTS phase).



<a name="0.5.3"></a>
## [0.5.3](https://github.com/psyrendust/githubrelease/compare/v0.5.2...v0.5.3) (2017-10-16)


### Bug Fixes

* **package-lock.json:** account for package-lock.json during copy/reset process ([2be74e1](https://github.com/psyrendust/githubrelease/commit/2be74e1))



<a name="0.5.2"></a>
## [0.5.2](https://github.com/psyrendust/githubrelease/compare/v0.5.1...v0.5.2) (2017-03-27)


### Bug Fixes

* **helper.js:** conventional-commits-detector: No such file or directory ([4abb343](https://github.com/psyrendust/githubrelease/commit/4abb343))



<a name="0.5.1"></a>
## [0.5.1](https://github.com/psyrendust/githubrelease/compare/v0.5.0...v0.5.1) (2017-02-21)



<a name="0.5.0"></a>
# [0.5.0](https://github.com/psyrendust/githubrelease/compare/v0.4.3...v0.5.0) (2017-02-21)


### Features

* **githubrelease:** add `-f` flag to display the flags used when showing config ([748efdc](https://github.com/psyrendust/githubrelease/commit/748efdc))



<a name="0.4.3"></a>
## [0.4.3](https://github.com/psyrendust/githubrelease/compare/v0.4.2...v0.4.3) (2017-02-21)


### Bug Fixes

* **githubrelease:** `-T: command not found` error when executing `usage` ([0e7e8b2](https://github.com/psyrendust/githubrelease/commit/0e7e8b2))



<a name="0.4.2"></a>
## [0.4.2](https://github.com/psyrendust/githubrelease/compare/v0.4.1...v0.4.2) (2016-07-29)


### Bug Fixes

* **githubrelease:** skip conventionalGithubReleaser if `-T` flag is passed ([2af3671](https://github.com/psyrendust/githubrelease/commit/2af3671))



<a name="0.4.1"></a>
## [0.4.1](https://github.com/psyrendust/githubrelease/compare/v0.4.0...v0.4.1) (2016-07-29)


### Bug Fixes

* **githubrelease:** add `T` option to `getopts` ([f02b9db](https://github.com/psyrendust/githubrelease/commit/f02b9db))



<a name="0.4.0"></a>
# [0.4.0](https://github.com/psyrendust/githubrelease/compare/v0.3.0...v0.4.0) (2016-07-29)


### Features

* **README.md, githubrelease:** do not create a git tag if `-T` flag is passed ([917bb52](https://github.com/psyrendust/githubrelease/commit/917bb52))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/psyrendust/githubrelease/compare/v0.2.2...v0.3.0) (2016-04-13)


### Features

* **githubrelease:** add flag `-t` to not trash the node_modules folder ([7e12bb5](https://github.com/psyrendust/githubrelease/commit/7e12bb5))



<a name="0.2.2"></a>
## [0.2.2](https://github.com/psyrendust/githubrelease/compare/v0.2.1...v0.2.2) (2016-04-13)


### Bug Fixes

* **githubrelease:** `line 343: minor: command not found if missing argument `-b` ([ef8e6a4](https://github.com/psyrendust/githubrelease/commit/ef8e6a4))



<a name="0.2.1"></a>
## [0.2.1](https://github.com/psyrendust/githubrelease/compare/v0.2.0...v0.2.1) (2016-03-30)


### Features

* **githubrelease:** add output for `currVersion` and `nextVersion` to setup info ([b5d3eaa](https://github.com/psyrendust/githubrelease/commit/b5d3eaa))
* **helper.js:** add `semver` package to project ([6060f34](https://github.com/psyrendust/githubrelease/commit/6060f34))
* **helper.js:** add feature to get next semver version suggestion ([cdfc89e](https://github.com/psyrendust/githubrelease/commit/cdfc89e))
* **npmrc:** add `.npmrc` file to project with `save-exact=true` setting ([f21b1e1](https://github.com/psyrendust/githubrelease/commit/f21b1e1))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/psyrendust/githubrelease/compare/v0.1.3...v0.2.0) (2016-03-18)


### Bug Fixes

* **githubrelease:** account for "does not exist" error when there is a preset mismatch ([9a7a3e6](https://github.com/psyrendust/githubrelease/commit/9a7a3e6))

### Features

* **githubrelease:** add `--silent` flag to `npm install` to silence warning output ([9dd91a9](https://github.com/psyrendust/githubrelease/commit/9dd91a9))
* **githubrelease:** add `-n` flag to no display any prompts ([acb7f77](https://github.com/psyrendust/githubrelease/commit/acb7f77))
* **githubrelease:** add better descriptions for `preset` and `bump` in config output ([6107f36](https://github.com/psyrendust/githubrelease/commit/6107f36))
* **githubrelease:** add user prompts after config display and changelog edit ([0038702](https://github.com/psyrendust/githubrelease/commit/0038702))


### BREAKING CHANGES

* githubrelease: A prompt will now display after a changelog edit has occurred. This will allow
the user to review the changelog and make edits before it is commited to git.
You are given 2 options: continue onto the next step; exit out of the program.

A prompt will now display after showing the config. This will allow the user to
review the config settings before continuing onto the first step of the program.

You may bypass the prompts by passing in a new `-n` (*noprompt*) flag. The `-n`
flag will bypass any prompts in the program.

Example:

```
githubrelease -n
```
* githubrelease: If the preset is incorrect when calling `conventional-recommended-bump` `stderr`
will display a message that the *"<preset> does not exits"*. This may be the case
when a preset is not passed in as an argument and `conventional-commits-detector`
returns a different commit message style than what is being used. If this is the
case we reset the `preset` to `angular` and continue on. If the wrong preset is
present during the changelog edit process you will notice that there will be no
entries written for the current release. If this is the case you should enter a
present of your choosing:

```
githubrelease -P ember
```



<a name="0.1.3"></a>
## [0.1.3](https://github.com/psyrendust/githubrelease/compare/v0.1.2...v0.1.3) (2016-03-09)


### Features

* **gitignore:** add `.gitignore` to project ([4882cac](https://github.com/psyrendust/githubrelease/commit/4882cac))



<a name="0.1.2"></a>
## [0.1.2](https://github.com/psyrendust/githubrelease/compare/v0.1.1...v0.1.2) (2016-03-09)


### Bug Fixes

* **githubrelease:** landedMessage not reporting shortsha ([aaed03b](https://github.com/psyrendust/githubrelease/commit/aaed03b))



<a name="0.1.1"></a>
## [0.1.1](https://github.com/psyrendust/githubrelease/compare/v0.1.0...v0.1.1) (2016-03-09)




<a name="0.1.0"></a>
# 0.1.0 (2016-03-09)


### Features

* **githubrelease:** add githubrelease script to project ([a2e5b32](https://github.com/psyrendust/githubrelease/commit/a2e5b32))
* **helper:** add helper.js to project ([08d6b37](https://github.com/psyrendust/githubrelease/commit/08d6b37))
* **package:** add bin key for `githubrelease` and `_githubreleasehelper` ([2206a36](https://github.com/psyrendust/githubrelease/commit/2206a36))
* **package:** add npm dependencies for release script ([0c64b94](https://github.com/psyrendust/githubrelease/commit/0c64b94))



