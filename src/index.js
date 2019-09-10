#!/usr/bin/env node

const argv = require("yargs");

// delegate to scripts directory for command pattern
const normalizedPath = require("path").join(__dirname, "./scripts");
require("fs")
  .readdirSync(normalizedPath)
  .reduce(function(acc, file) {
    const args = require("./scripts/" + file);
    return acc.command(args.default || args);
  }, argv)
  .help().argv;
