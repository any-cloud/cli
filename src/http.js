import { delegateToPlugin } from "./delegateToPlugin";

export default delegateToPlugin({
  command: "http",
  aliases: [],
  desc: "start the http service with currently selected plugin",
  builder: yargs => {
    yargs.option("port");
  }
});
