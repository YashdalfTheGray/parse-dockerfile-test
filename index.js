require = require('@std/esm')(module); // eslint-disable-line no-global-assign
const chalk = require('chalk');

console.log(chalk.yellow('From JS -'));
require('./js/tests.js');

console.log(chalk.cyan('\n\nFrom TS -'));
require('./ts/tests.js');
