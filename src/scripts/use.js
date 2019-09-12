import { utils } from "@any-cloud/core";

export default {
  command: "use plugin",
  aliases: ["u"],
  desc: "change which plugin is selected",
  builder: yargs => {},
  handler: async argv => {
    await utils.setCurrentPlugin(argv.plugin);
    console.log("set plugin to: ", utils.toPluginName(argv.plugin));
    process.exit(0);
  }
};
