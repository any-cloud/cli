#!/usr/bin/env node

const yargs0 = require("yargs");
const fs = require("fs");
const path = require("path");
const {
  utils: { currentPluginCLIHandlerPath }
} = require("@any-cloud/core");

// delegate to scripts directory for command pattern
const pluginCliScriptsPath = currentPluginCLIHandlerPath();
const yargs1 = fs.readdirSync(pluginCliScriptsPath).reduce(function(acc, file) {
  const args = require(path.join(pluginCliScriptsPath, file));
  return acc.command(args.default || args);
}, yargs0);
const cliScriptsPath = path.join(__dirname, "./scripts");
const yargs2 = fs.readdirSync(cliScriptsPath).reduce(function(acc, file) {
  const args = require(path.join(cliScriptsPath, file));
  return acc.command(args.default || args);
}, yargs1);
yargs2.help().argv;
