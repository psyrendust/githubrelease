# githubrelease

CLI tool for GitHub release management.

### What does this do?
1. pull from remote origin for master and develop branches
2. rebase master onto develop
3. rebase develop onto master
4. grabs the short SHA of master
5. updates changelog
6. bumps version number
7. commits changes
8. creates a version tag
9. pushes master and tag to remote
10. rebase master onto develop
11. pushes develop to remote
12. creates a release on github
13. output message "Landed in <shortsha>"

## Setup

### Install

To install from npm:

```shell
npm install -g githubrelease
```

To install from GitHub:

```shell
npm install -g psyrendust/githubrelease
```


### Prerequisites
The [githubrelease][githubrelease] cli uses [conventional-github-releaser][conventional-github-releaser] under the hood, which needs the following in order to work:

1. Setup a new [GitHub app token][newtoken]
2. Set your environment variable `CONVENTIONAL_GITHUB_RELEASER_TOKEN` to the token you just created

You can find more details here: [Setup token for cli][setup-token-for-cli].

## Usage

### Flag options
* `-h`: Show this message.
* `-v`: Display the version of this script.
* `-f`: Display the flags used when showing config.
* `-l`: Generate a changelog entry and save it to `<changelog>`.
* `-p`: Push `<master>`, `<develop>`, and tags to `<remote>`.
* `-u`: Update `<master>` and `<develop>` branches from `<remote>` using rebase.
* `-n`: Do not display any prompts.
* `-t`: Do not trash the `node_modules` folder before running npm run test.
* `-T`: Do not create a git tag and do no run conventionalGithubReleaser.

### Argument options
* `-c`: Location of the `<changelog>`. Defaults to `CHANGELOG.md`.
* `-m`: The `<master>` branch. Defaults to `master`.
* `-d`: The `<develop>` branch. Defaults to `develop`.
* `-r`: The `<remote>` push and pull from. Defaults to `origin`.
* `-P`: The preset style used to generate the changelog. Examples include [`angular` | `jquery` ...]. Defaults to [conventional-recommended-bump][conventional-recommended-bump].
* `-s`: Allows you to start at a specific step. Useful for when the script fails before completing all steps. See [Available steps](#available-steps) below.
* `-b`: The semver you would like to use for the release (default: patch). Can be: [ major | minor | patch | v0.0.0 ]

### Available steps
1. Update `<master>` and `<develop>` branches from `<remote>` using rebase.
2. Push `<master>`, `<develop>`, and tags to `<remote>`.
3. Run `npm test`
4. Rebase `<develop>` onto `<master>`.
5. Make a copy of `package.json` to `_package.json` (also copy `package-lock.json` to `_package-lock.json` if it exists).
6. Temporarily bump the semver of `package.json`.
7. Save a changelog entry to `<changelog>`.
8. Commit `<changelog>` update to Git.
9. Reset `package.json` by moving `_package.json` to `package.json` (also reset `_package-lock.json` to `package-lock.json` if it exists).
10. Run `npm version` command, which bumps `package.json` and creates a tag. No git tag will be created if `-T` is passed.
11. Rebase `<master>` onto `<develop>`.
12. Push `<master>`, `<develop>`, and tags to `<remote>`.
13. Run [conventional-github-releaser][conventional-github-releaser] to create a release in GitHub.
14. Output landed message which contains the short sha of HEAD.

### Examples:
1. Update all branches
2. Push changes from all branches
3. Cut a release

```shell
githubrelease -u
githubrelease -p
githubrelease -b patch
githubrelease -tTb minor
```

Or just do it all in one command.

```shell
githubrelease -b patch
```

[conventional-github-releaser]: https://github.com/stevemao/conventional-github-releaser
[conventional-recommended-bump]: https://github.com/stevemao/conventional-recommended-bump
[githubrelease]: https://github.com/psyrendust/githubrelease
[newtoken]: https://github.com/settings/tokens/new
[setup-token-for-cli]: https://github.com/stevemao/conventional-github-releaser#setup-token-for-cli
