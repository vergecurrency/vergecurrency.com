module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  exportPathMap(defaultPathMap) {
    const exportMap = { ...defaultPathMap };

    delete exportMap['/blog'];
    delete exportMap['/post'];

    return {
      ...exportMap,
      '/about-us': { page: '/about' },
      '/community/donate': { page: '/donate' },
    };
  },

  webpack: (config, { dev, webpack }) => {
    if (!dev) {
      config.plugins.push(new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      }));
    }
    config.module.rules.push({
      test: /locales/,
      loader: '@alienfast/i18next-loader',
      options: {
        include: ['**/*.json', '!**/*.missing.json'],
        basenameAsNamespace: true,
      },
    });
    if (dev) {
      config.plugins.push(new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      }));
    }

    return config;
  },
};
