import { utils } from "@any-cloud/core";

export const delegateToPlugin = config => {
  return {
    ...config,
    handler: argv => {
      return utils.requireCLIHandler(config.command)(argv);
    }
  };
};
