import { utils } from "@any-cloud/core";
import { spawn } from "child_process";
import path from "path";

export default {
  command: "test",
  aliases: ["t"],
  desc: "test the current plugin's api compliance",
  builder: yargs => {},
  handler: async argv => {
    const spawnOpts = {
      cwd: path.join(__dirname, "../../"),
      env: { ...process.env, ANY_CLOUD_PATH: utils.chokeUpPath() }
    };
    const child = spawn("yarn", ["test", ...process.argv.slice(3)], spawnOpts);

    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);

    child.on("close", code => {
      process.exit(0);
    });
  }
};
