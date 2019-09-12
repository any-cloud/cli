import { utils } from "@any-cloud/core";

export default {
  command: "status",
  aliases: ["s"],
  desc: "get the currently selected plugin and other info",
  builder: yargs => {},
  handler: async argv => {
    console.log("current plugin is set to: ", await utils.currentPlugin());
    process.exit(0);
  }
};
