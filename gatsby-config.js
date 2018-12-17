module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-yandex-metrika',
      options: {
        trackingId: 31411338,
        clickmap: true,
        webvisor: true,
        trackHash: true,
      },
    },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://31e9629af41844b98ed5398a7295ef53@sentry.io/1355395',
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() => ['production', 'stage'].indexOf(process.env.NODE_ENV) !== -1)()
      },
    },
  ],
  siteMetadata: {
    title: 'Urbica',
    description: 'description',
  },
  pathPrefix: '/',
};
