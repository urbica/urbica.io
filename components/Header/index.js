import React from 'react';
import Link from 'next/link';
import Container from './Container';

const prefix = process.env.NODE_ENV === 'production' ? '/urbica.co' : '';

export default () => (
    <Container>
      <Link href={`${prefix}/`}>
        <a>
          Logo
        </a>
      </Link>
      <Link href={`${prefix}/blog`}>
        <a>
          blog
        </a>
      </Link>
      <Link href={`${prefix}/projects`}>
        <a>
          projects
        </a>
      </Link>
    </Container>
  );
