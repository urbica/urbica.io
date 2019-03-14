import React from 'react';
import Media from 'react-media';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import Title from '../../Title';
import Container from './Container';
import Content from './Content';
import Block from './Block';
import Link from './Link';

const Footer = ({ intl }) => (
  <Container>
    <Title>{intl.messages.contacts['address.title']}</Title>
    <Content>
      <Media query={{ maxWidth: 850 }}>
        {
          matches => (
            <>
              <Block address>
                {intl.messages.contacts.address}
              </Block>
              {matches && (
                <Block>
                  <div>
                    <Link href="tel:+79166271646" disableArrow>
                      +7 916 627 16 46
                    </Link>
                  </div>
                  <div>
                    <Link href="mailto:hello@urbica.co">hello@urbica.co</Link>
                  </div>
                </Block>
              )}
            </>
          )
        }
      </Media>
      <Block>
        <div>
          <Link href="https://twitter.com/UrbicaDesign" target="_blank">twitter</Link>
        </div>
        <div>
          <Link href="https://medium.com/@urbica.co" target="_blank">medium</Link>
        </div>
      </Block>
      <Block>
        <div>
          <Link href="https://www.facebook.com/urbica.co/" target="_blank">facebook</Link>
        </div>
        <div>
          <Link href="https://www.instagram.com/urbica_design/" target="_blank">instagram</Link>
        </div>
      </Block>
      <Media query={{ minWidth: 850 }}>
        {matches => (
          <>
            {
              matches && (
                <Block>
                  <div>
                    <Link href="mailto:hello@urbica.co">hello@urbica.co</Link>
                  </div>
                  <div>
                    <Link href="tel:+79166271646" disableArrow>
                      +7 916 627 16 46
                    </Link>
                  </div>
                </Block>
              )
            }
          </>
        )}
      </Media>
    </Content>
  </Container>
);

Footer.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Footer);
