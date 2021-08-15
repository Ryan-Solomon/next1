import type { NextPage } from 'next';
import React from 'react';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href='/events'>Events</Link>
        </li>
        <li>
          <Link href='/events/id'>Event</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
