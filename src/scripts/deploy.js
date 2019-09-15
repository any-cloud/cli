import { delegateToPlugin } from "../delegateToPlugin";

export default delegateToPlugin({
  command: "deploy",
  aliases: [],
  desc: "deploy your application with the selected plugin",
  builder: yargs => {}
});
