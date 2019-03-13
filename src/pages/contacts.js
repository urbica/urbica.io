import React from 'react';
import PropTypes from 'prop-types';
import { withIntl } from '../i18n';

import Layout from '../components/Layout';
import Contacts from '../components/Contacts';

const ContactsPage = ({ location }) => (
  <Layout location={location}>
    <Contacts />
  </Layout>
);

ContactsPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withIntl(ContactsPage);
