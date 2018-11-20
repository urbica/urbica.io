import React from 'react';

import Container from './Container';
import Input from './Input';
import InputText from './InputText';
import Submit from './Submit';


export default () => (
  <Container>
    <form>
      <Input type="text" placeholder="Name" />
      <Input type="text" placeholder="Company name" />
      <Input type="email" placeholder="Email" />
      <Input type="text" placeholder="Phone number" />
      <InputText placeholder="Ask us a question or tell us about your project" />
      <Submit type="submit" />
    </form>
  </Container>
);
