import { createGlobalStyle } from 'styled-components';
import DecimaMonoProOtf from '../assets/fonts/DecimaMonoPro.otf';
import DecimaMonoProWoff from '../assets/fonts/DecimaMonoPro.woff';
import DecimaMonoProWoff2 from '../assets/fonts/DecimaMonoPro.woff2';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono');

  @font-face {
    font-family: 'DecimaMonoPro';
    font-display: auto;
    font-style: normal;
    font-weight: normal;
    src: url(${DecimaMonoProOtf}) format('opentype'),
    url(${DecimaMonoProWoff}) format('woff'),
    url(${DecimaMonoProWoff2}) format('woff2');
  }

  html {
    font-family: 'DecimaMonoPro', monospace;
    background: rgb(23,31,42);
  }
`;
