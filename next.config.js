const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
          fix: true,
        },
      });
    }
    return config;
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/blog': { page: '/blog' },
      '/projects': { page: '/projects' }
    }
  },
  assetPrefix: !debug ? '/urbica.co/' : ''
};
