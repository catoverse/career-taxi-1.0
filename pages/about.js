import React from "react";
import Head from "next/head";

import Header from "../components/commons/Header.js";
import AboutMain from "../components/about/about-main.js";
import AboutTeam from "../components/about/about-team.js";
import AboutAdvisors from "../components/about/about-advisors.js";
import AboutSupported from "../components/about/about-supported.js";
import Footer from "../components/commons/Footer.js";

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
      <AboutAdvisors />
      <AboutSupported />
      <Footer />
    </>
  );
};

export default About;
