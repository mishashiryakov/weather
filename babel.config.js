module.exports = function (api) {
  api.cache(true);
  api.assertVersion("^7.4.5");

  const presets = [
    [
      "@babel/preset-env",
      {
        targets: {
          esmodules: true,
          node: true,
        },
      },
    ],
    ["@babel/preset-react", { targets: { node: "current" } }],
    ["@babel/preset-typescript"],
  ];
  const plugins = [];

  return {
    presets,
    plugins,
  };
};
