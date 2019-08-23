"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  http
} = require(process.cwd());

var _default = {
  command: 'http',
  aliases: [],
  desc: 'start the http service with currently selected plugin',
  builder: yargs => {
    yargs.option('port');
  },
  handler: argv => {
    // TODO: get currently selected plugin
    const currentPlugin = '@any-cloud/local';

    const handler = require(`${process.cwd()}/node_modules/${currentPlugin}/scripts/http`).default.handler;

    return handler(argv);
  }
};
exports.default = _default;