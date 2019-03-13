const path = require('path');
const { languages } = require('./src/i18n/locales');

const redirects = [
  ['/bikes', 'https://urbica.github.io/bikes/'],
  ['/citibike', 'https://urbica.github.io/citibike/'],
  ['/hills', 'https://urbica.github.io/hills/'],
  ['/velo', 'https://urbica.github.io/velo/'],
];

exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;

  redirects.forEach(([fromPath, toPath]) => {
    createRedirect({
      fromPath,
      toPath,
      isPermanent: true,
    });
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  if (page.path.includes('404')) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    const redirect = path.resolve('src/i18n/redirect.js');
    const redirectPage = {
      ...page,
      component: redirect,
      context: {
        languages,
        locale: '',
        routed: false,
        redirectPage: page.path,
      },
    };
    deletePage(page);
    createPage(redirectPage);

    languages.forEach(({ value }) => {
      const localePage = {
        ...page,
        originalPath: page.path,
        path: `/${value}${page.path}`,
        context: {
          languages,
          locale: value,
          routed: true,
          originalPath: page.path,
        },
      };

      createPage(localePage);
    });

    resolve();
  });
};
