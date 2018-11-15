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
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://urbica.github.io/urbica.co' : ''
};
