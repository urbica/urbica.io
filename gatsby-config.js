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
  ],
  siteMetadata: {
    title: 'Urbica',
    description: 'description',
  },
  pathPrefix: '/',
};
