import { utils } from "@any-cloud/core";
import path from "path";
const { spawn } = require("child_process");
export default {
  command: "test",
  aliases: ["t"],
  desc: "test the current plugin's api compliance",
  builder: yargs => {},
  handler: async argv => {
    console.log(`testing '${await utils.currentPlugin()}' for api compliance`);
    const child = spawn("yarn", ["test", ...process.argv.slice(3)], {
      cwd: path.join(__dirname, "../../"),
      env: process.env
    });

    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);

    child.on("close", code => {
      process.exit(0);
    });
  }
};
