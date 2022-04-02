import React, { useState } from "react";
import Head from "next/head";

import Header from "../../components/commons/header.js";
import Footer from "../../components/commons/footer.js";
import AssessmentCareerForm from "../../components/assessment/assessment-career-form.js";
import AssessmentDetails from "../../components/assessment/assessment-details.js";

// context passed to _app
// check for career state in case user types test url
const AssessmentInitials = () => {
  const [reportData, setReportData] = useState({ career: "" });

  const handleStartTest = (value) => {
    setReportData({ ...reportData, career: value });
  };

  return (
    <>
      <Head>
        <title>Career Taxi | IM Test</title>
        <meta name="description" content="Intrinsic Motivation Test" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <AssessmentCareerForm onSubmit={handleStartTest} />
      <AssessmentDetails />
      <Footer />
    </>
  );
};

export default AssessmentInitials;
