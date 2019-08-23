import path from "path"
const { http } = require(process.cwd());

export default {
  command: 'http',
  aliases: [],
  desc: 'start the http service with currently selected plugin',
  builder: (yargs) => { yargs.option('port');},
  handler : (argv) => {
    // TODO: get currently selected plugin
    const currentPlugin = '@any-cloud/local';
    const handler = require(`${process.cwd()}/node_modules/${currentPlugin}/scripts/http`).default.handler;
    return handler(argv);
  }
}
