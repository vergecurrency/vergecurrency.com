const path = require('path');
const glob = require('glob-all');
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
