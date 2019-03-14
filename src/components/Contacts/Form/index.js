import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';
import { injectIntl } from 'react-intl';

import Container from './Container';
import Input from './Input';
import InputText from './InputText';
import Submit from './Submit';
import parseForm from '../../../utils/parseForm';

class Form extends Component {
  state = {
    submitted: false,
  };

  handleSubmit = (e) => {
    const { submitted } = this.state;
    e.preventDefault();
    const values = { fields: parseForm(e.target) };
    const auth = {
      headers: { Authorization: `Bearer ${process.env.AIR_TABLE_KEY}` },
    };

    if (!submitted) {
      axios.post('https://api.airtable.com/v0/app4VuYkBklQRr1Or/mail', values, auth)
        .then((response) => {
          if (response.statusText === 'OK') {
            this.setState({ submitted: true });
          }
        });
    }
  };

  render() {
    const { intl } = this.props;
    const { submitted } = this.state;

    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <Input id="name" type="text" placeholder={intl.messages.form.name} />
          <Input id="phone" type="text" placeholder={intl.messages.form.email} />
          <InputText id="text" placeholder={intl.messages.form.text} />
          {
            submitted ? (
              <div>{intl.messages.form.submited}</div>
            ) : (
              <Submit type="submit" value={intl.messages.form.submit} />
            )
          }
        </form>
      </Container>
    );
  }
}

Form.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Form);
