const swcDefaultConfig =
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('@nestjs/cli/lib/compiler/defaults/swc-defaults').swcDefaultsFactory()
    .swcOptions;

module.exports = function (options) {
  return {
    ...options,
    module: {
      ...options.module,
      rules: [
        ...options.module.rules.filter((rule) => rule.test !== /\.ts$/),
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: {
            loader: 'swc-loader',
            options: {
              ...swcDefaultConfig,
              minify: true,
            },
          },
        },
      ],
    },
  };
};
