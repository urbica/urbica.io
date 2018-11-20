import React from 'react';
import axios from 'axios';

import Container from './Container';
import Input from './Input';
import InputText from './InputText';
import Submit from './Submit';
import parseForm from '../../../utils/parseForm';

const handleSubmit = (e) => {
  e.preventDefault();
  const values = { fields: parseForm(e.target) };
  const auth = {
    headers: { Authorization: 'Bearer ---' },
  };

  axios.post('https://api.airtable.com/v0/app4VuYkBklQRr1Or/mail', values, auth)
    .then((response) => {
      console.log(response);
    });
};

export default () => (
  <Container>
    <form onSubmit={handleSubmit}>
      <Input id="name" type="text" placeholder="Name" />
      <Input id="company" type="text" placeholder="Company name" />
      <Input id="email" type="email" placeholder="Email" />
      <Input id="phone" type="text" placeholder="Phone number" />
      <InputText id="text" placeholder="Ask us a question or tell us about your project" />
      <Submit type="submit" />
    </form>
  </Container>
);
