export default (config, env, helpers) => {
  const critters = helpers.getPluginsByName(config, 'Critters')[0];
  if (critters) {
    critters.plugin.options.mergeStylesheets = false;
  }
}
