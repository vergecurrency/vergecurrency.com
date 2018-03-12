const path = require('path');
const glob = require('glob-all');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
      '/faq': { page: '/faq' },
      '/faq/privacy': { page: '/faq/privacy' },
      '/faq/wallets': { page: '/faq/wallets' },
      '/faq/mining': { page: '/faq/mining' },
      '/faq/legal': { page: '/faq/legal' },
      '/p2p': { page: '/p2p' },
      '/p2p/twitter-bot': { page: '/p2p/twitter-bot' },
      '/p2p/discord-bot': { page: '/p2p/discord-bot' },
      '/guides/introduction': { page: '/guides/introduction' },
      '/guides/getting-started': { page: '/guides/getting-started' },
      '/guides/how-to-buy-verge': { page: '/guides/how-to-buy-verge' },
      '/developers': { page: '/developers' },
      '/developers/github-desktop': { page: '/developers/github-desktop' },
      '/developers/verge-vendor-integration': { page: '/developers/verge-vendor-integration' },
      '/developers/wallet-setup-instructions': { page: '/developers/wallet-setup-instructions' },
      '/developers/vergecurrency-repositories': { page: '/developers/vergecurrency-repositories' },
    };
  },

  webpack: (config, { dev }) => {
    if (!dev) {
      const oldEntry = config.entry;
      config.entry = () => oldEntry().then((entry) => {
        entry['main.js'].push(path.resolve('./offline'));
        return entry;
      });

      config.plugins.push(new SWPrecacheWebpackPlugin({
        cacheId: 'VergePWA',
        filepath: path.resolve('./static/sw.js'),
        staticFileGlobs: [
          'static/**/ *',
        ],
        minify: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [{
          handler: 'fastest',
          urlPattern: /[.](png|jpg|css)/,
        }, {
          handler: 'networkFirst',
          urlPattern: /^http.*/,
        }],
      }));
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
    config.plugins.push(new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }));
    config.plugins = config.plugins.filter(plugin => (plugin.constructor.name !== 'UglifyJsPlugin'));
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
      mangle: true,
      sourcemap: false,
      debug: false,
      minimize: true,
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
    }));
    // config.plugins.push(new BundleAnalyzerPlugin());
    config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));
    config.plugins.push(new webpack.optimize.AggressiveMergingPlugin());

    return config;
  },
};
