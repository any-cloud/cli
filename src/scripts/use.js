import { utils } from "@any-cloud/core";

export default {
  command: "use plugin",
  aliases: ["u"],
  desc: "change which plugin is selected",
  builder: yargs => {},
  handler: async argv => {
    utils.setCurrentPlugin(argv.plugin);
    console.log("set plugin to: ", await utils.currentPlugin());
    process.exit(0);
  }
};
