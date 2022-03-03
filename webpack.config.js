const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const log = require("loglevel");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // Customize the config before returning it.
  log.warn("config:", config);
  config.module.rules.push({
    test: /\.wasm$/,
    type: 'javascript/auto',
  });

  // config.module = {
  //   rules: [{
  //     test: /\.wasm$/,
  //     type: 'javascript/auto',
  //   }]
  // }
  return config;
};
