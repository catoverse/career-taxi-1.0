import React from "react";
import Head from "next/head";

import Header from "../components/commons/header.js";
import AboutMain from "../components/about/about-main.js";
import AboutTeam from "../components/about/about-team.js";
import AboutSupportedBy from "../components/about/about-supportedBy";
import AboutPartner from "../components/about/about-partner.js";
import Footer from "../components/commons/footer.js";

const About = () => {
  return (
    <>
      <Head>
        <title>Career Taxi | About Us</title>
        <meta name="description" content="About Us" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <AboutMain />
      <AboutTeam />
      <AboutSupportedBy />
      <AboutPartner />
      <Footer />
    </>
  );
};

export default About;
