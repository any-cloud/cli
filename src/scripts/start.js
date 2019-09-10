import { delegateToPlugin } from "../delegateToPlugin";

export default delegateToPlugin({
  command: "start",
  aliases: [],
  desc: "start the any cloud service with the selected runtime plugin",
  builder: yargs => {}
});
