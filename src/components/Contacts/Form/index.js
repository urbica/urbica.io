import React, { Component } from 'react';
import axios from 'axios';

import Container from './Container';
import Input from './Input';
import InputText from './InputText';
import Submit from './Submit';
import parseForm from '../../../utils/parseForm';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
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
  }

  render() {
    const { submitted } = this.state;

    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <Input id="name" type="text" placeholder="Name" />
          <Input id="company" type="text" placeholder="Company name" />
          <Input id="email" type="email" placeholder="Email" />
          <Input id="phone" type="text" placeholder="Phone number" />
          <InputText id="text" placeholder="Ask us a question or tell us about your project" />
          {
            submitted ? (
              <Submit type="submit" value="Your message is sucсesfully sent" disable />
            ) : (
              <Submit type="submit" value="Submit" />
            )
          }
        </form>
      </Container>
    );
  }
}

export default Form;
