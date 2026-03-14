const path = require('path');
const glob = require('glob-all');
const webpack = require('webpack');

module.exports = {
  exportPathMap() {
    return {
      '/about-us': { page: '/about' },
      '/community/donate': { page: '/donate' },
    };
  },

  webpack: (config, { dev }) => {
    if (!dev) {
      config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));
    }
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]',
        },
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader'],
      },
      {
        test: /\.s(a|c)ss$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['styles', 'node_modules']
                .map(d => path.join(__dirname, d))
                .map(g => glob.sync(g))
                .reduce((a, c) => a.concat(c), []),
            },
          },
        ],
      },
      {
        test: /locales/,
        loader: '@alienfast/i18next-loader',
        options: {
          include: ['**/*.json', '!**/*.missing.json'],
          basenameAsNamespace: true,
        },
      },
    );
    if (dev) {
      config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));
    }

    return config;
  },
};
