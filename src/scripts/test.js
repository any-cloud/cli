import { utils } from "@any-cloud/core";
import path from "path";
const { spawn, spawnSync } = require("child_process");
export default {
  command: "test",
  aliases: ["t"],
  desc: "test the current plugin's api compliance",
  builder: yargs => {},
  handler: async argv => {
    const currentPlugin = await utils.currentPlugin();
    console.log(`testing '${currentPlugin}' for api compliance`);
    const spawnOpts = {
      cwd: path.join(__dirname, "../../"),
      env: process.env
    };
    spawnSync(
      "yarn",
      ["exec", "any-cloud", "use", currentPlugin.split("@any-cloud/")[1]],
      spawnOpts
    );
    const child = spawn("yarn", ["test", ...process.argv.slice(3)], spawnOpts);

    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);

    child.on("close", code => {
      process.exit(0);
    });
  }
};
