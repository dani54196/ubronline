import React from 'react';

import Layout from '../components/Layout';

import requisitos1 from "../assets/images/requisitos1.jpeg"
import requisitos2 from "../assets/images/requisitos2.jpeg"

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
      <section>
        <img src={requisitos1} width="100%" />
      </section>
      <section>
        <img src={requisitos2} width="100%" />
      </section>
      </header>
    </section>
  </Layout>
);

export default IndexPage;
