import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const Index = () => (
  <div>
    <Layout>
      <Head title="Home" />
      <h1>Hi, I'm Kay!</h1>
      <p>Full Stack-ish software developer from Nigeria</p>
      <p>
        Find out more about me <Link to="/about">here</Link>
      </p>
    </Layout>
  </div>
);

export default Index;
