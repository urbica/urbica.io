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
