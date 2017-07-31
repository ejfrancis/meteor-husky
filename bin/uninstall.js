'use strict'

// Run when package is uninstalled
const path = require('path')
const uninstallFrom = require('../src/uninstall')

console.log('meteor-husky')
console.log('uninstalling Git hooks')

const huskyDir = path.join(__dirname, '..')
uninstallFrom(huskyDir)
