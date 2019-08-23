import { delegateToPlugin } from "./delegateToPlugin";

export default delegateToPlugin({
  command: "workers",
  aliases: [],
  desc: "start the workers service with currently selected plugin",
  builder: yargs => {
    yargs.option("num");
  }
});
