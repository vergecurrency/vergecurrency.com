const path = require('path');
const glob = require('glob-all');

module.exports = {
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/wallets': { page: '/wallets' },
      '/roadmap': { page: '/roadmap' },
      '/business': { page: '/business' },
      '/presskit': { page: '/presskit' },
      '/pressrelease': { page: '/pressrelease' },
      '/pressreleases': { page: '/pressreleases' },
      '/get-verge': { page: '/get-verge' },
      '/key-tech': { page: '/key-tech' },
      '/vendors': { page: '/vendors' },
      '/developers/vendor-integration': { page: '/developers/vendor-integration' },
    };
  },

  webpack: (config) => {
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
    return config;
  },
};
