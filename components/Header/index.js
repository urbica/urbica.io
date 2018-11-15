import React from 'react';
import Link from 'next/link';
import Container from './Container';

export default () => (
  <Container>
    <Link href="/">
      <a>
        Logo
      </a>
    </Link>
    <Link href="/blog">
      <a>
        blog
      </a>
    </Link>
    <Link href="/projects">
      <a>
        projects
      </a>
    </Link>
  </Container>
);
