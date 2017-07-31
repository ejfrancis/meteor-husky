# husky [![](http://img.shields.io/npm/dm/meteor-husky.svg?style=flat)](https://www.npmjs.org/package/husky) [![npm version](https://badge.fury.io/js/meteor-husky.svg)

> Git hooks made easy

The [husky](https://github.com/typicode/husky) package for the [Meteor](https://github.com/meteor/meteor) framework. See Husky documentation for installation and usage instructions.

## Why Does Meteor Require a Fork of Husky?
Husky automatically sets up git hooks that call `npm run precommit`, `npm run prepush` etc. so that git hooks call the scripts you've defined in your `package.json` scripts. The Meteor framework maintains its own internal version of `node` and `npm`, so Husky needs to use the `meteor npm` binary instead of the system's `npm` binary so that it can find the required dependencies.