export default (url) => {
  const parts = url.split('/');
  const imgThumb = `thumb.${parts.pop()}`;
  return [...parts, imgThumb].join('/');
};
