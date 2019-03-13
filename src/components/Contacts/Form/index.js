import React, { Component } from 'react';
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
          <Input id="phone" type="text" placeholder="Email or phone number" />
          <InputText id="text" placeholder="Ask us a question or tell us about your project" />
          {
            submitted ? (
              <div>Your message is sucсesfully sent</div>
            ) : (
              <Submit type="submit" value="Submit" />
            )
          }
        </form>
      </Container>
    );
  }
}

export default injectIntl(Form);
