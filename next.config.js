const path = require('path');
const glob = require('glob-all');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/about-us': { page: '/about' },
      '/benefits': { page: '/benefits' },
      '/donate': { page: '/donate' },
      '/community/donate': { page: '/donate' },
      '/community/get-involved': { page: '/community/get-involved' },
      '/community/mining': { page: '/community/mining' },
      '/community/xvg-mining-pools': { page: '/community/xvg-mining-pools' },
      '/developers': { page: '/developers' },
      '/developers/github-desktop': { page: '/developers/github-desktop' },
      '/developers/vergecurrency-repositories': { page: '/developers/vergecurrency-repositories' },
      '/developers/wallet-setup-instructions': { page: '/developers/wallet-setup-instructions' },
      '/faq': { page: '/faq' },
      '/faq/legal': { page: '/faq/legal' },
      '/faq/mining': { page: '/faq/mining' },
      '/faq/privacy': { page: '/faq/privacy' },
      '/faq/wallets': { page: '/faq/wallets' },
      '/fueled-by-verge': { page: '/fueled-by-verge' },
      '/get-verge': { page: '/get-verge' },
      '/guides/getting-started': { page: '/guides/getting-started' },
      '/guides/how-to-buy-verge': { page: '/guides/how-to-buy-verge' },
      '/guides/introduction': { page: '/guides/introduction' },
      '/key-tech': { page: '/key-tech' },
      '/p2p': { page: '/p2p' },
      '/p2p/discord-bot': { page: '/p2p/discord-bot' },
      '/p2p/twitter-bot': { page: '/p2p/twitter-bot' },
      '/presskit': { page: '/presskit' },
      '/milestones': { page: '/milestones' },
      '/vendors': { page: '/vendors' },
      '/verge-team': { page: '/verge-team' },
      '/wallets/terms': { page: '/wallets/terms' },
      '/wallets': { page: '/wallets' },
      '/donationrewards': { page: '/donationrewards' },
      //'/get-started': { page: '/get-started' },
      '/getstarted': { page: '/getstarted' },
      // '/pressreleases': { page: '/pressreleases' },
      '/meetup-2018': { page: '/meetup-2018' },
      '/meetup-2019': { page: '/meetup-2019' },
      '/meetup': { page: '/meetup' },
      '/partnership-donation-rewards': { page: '/partnership-donation-rewards' },
      '/partnership-donation-mentions': { page: '/partnership-donation-mentions' },
      '/find-us': { page: '/find-us' },
    };
  },

  webpack: (config, { dev }) => {
    if (!dev) {
      //  const oldEntry = config.entry;
      //  config.entry = () => oldEntry().then((entry) => {
      //    entry['main.js'].push(path.resolve('./offline'));
      //    return entry;
      //  });

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
      config.plugins = config.plugins.filter(plugin => (plugin.constructor.name !== 'UglifyJsPlugin'));
      config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false,
          },
          exclude: [/\.min\.js$/gi], // skip pre-minified libs
          compress: {
            arrows: false,
            booleans: false,
            cascade: false,
            collapse_vars: false,
            comparisons: false,
            computed_props: false,
            hoist_funs: false,
            hoist_props: false,
            hoist_vars: false,
            if_return: false,
            inline: false,
            join_vars: false,
            keep_infinity: true,
            loops: false,
            negate_iife: false,
            properties: false,
            reduce_funcs: false,
            reduce_vars: false,
            sequences: false,
            side_effects: false,
            switches: false,
            top_retain: false,
            toplevel: false,
            typeofs: false,
            unused: false,
            warnings: false, // Suppress uglification warnings
            pure_getters: true,
            unsafe: true,
            unsafe_comps: true,
            screw_ie8: true,

            // Switch off all types of compression except those needed to convince
            // react-devtools that we're using a production build
            conditionals: true,
            dead_code: true,
            evaluate: true,
          },
          mangle: true,
        },
      }));
      // config.plugins.push(new BundleAnalyzerPlugin()); <-- use to analyze the bundle size
      config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));
      config.plugins.push(new webpack.optimize.AggressiveMergingPlugin());
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
      uglifyOptions: {
        output: {
          comments: false,
        },
        exclude: [/\.min\.js$/gi], // skip pre-minified libs
        compress: {
          arrows: false,
          booleans: false,
          cascade: false,
          collapse_vars: false,
          comparisons: false,
          computed_props: false,
          hoist_funs: false,
          hoist_props: false,
          hoist_vars: false,
          if_return: false,
          inline: false,
          join_vars: false,
          keep_infinity: true,
          loops: false,
          negate_iife: false,
          properties: false,
          reduce_funcs: false,
          reduce_vars: false,
          sequences: false,
          side_effects: false,
          switches: false,
          top_retain: false,
          toplevel: false,
          typeofs: false,
          unused: false,
          warnings: false, // Suppress uglification warnings
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          screw_ie8: true,

          // Switch off all types of compression except those needed to convince
          // react-devtools that we're using a production build
          conditionals: true,
          dead_code: true,
          evaluate: true,
        },
        mangle: true,
      },
    }));
    // config.plugins.push(new BundleAnalyzerPlugin());
    config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));
    config.plugins.push(new webpack.optimize.AggressiveMergingPlugin());

    return config;
  },
};
