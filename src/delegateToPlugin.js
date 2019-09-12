import { utils } from "@any-cloud/core";

export const delegateToPlugin = config => {
  return {
    ...config,
    handler: async argv => {
      return (await utils.requireCLIHandler(config.command))(argv);
    }
  };
};
