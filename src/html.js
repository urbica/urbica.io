/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
      <head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.7, shrink-to-fit=no"
        />
        <meta property="og:url" content="http://urbica.co" />
        <meta property="og:title" content="Urbica" />
        <meta property="og:description" content="We design data tools for getting is insights and making decisions" />
        <meta property="og:image" content="http://urbica.co/urbica.jpg" />

        <title>Urbica</title>
        <meta name="description" content="We design data tools for getting is insights and making decisions" />
        {this.props.headComponents}
      </head>
      <body {...this.props.bodyAttributes}>
      {this.props.preBodyComponents}
      <div
        key={`body`}
        id="___gatsby"
        dangerouslySetInnerHTML={{__html: this.props.body}}
      />
      {this.props.postBodyComponents}
      </body>
    </html>
  )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
