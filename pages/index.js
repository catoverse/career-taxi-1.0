import { useState, useEffect } from "react";
import Head from "next/head";

import Header from "../components/commons/header.js";
import Hero from "../components/main/hero.js";
import Video from "../components/main/video.js";
import Problem from "../components/main/problem.js";
import Solution from "../components/main/solution.js";
import Expert from "../components/main/expert.js";
import Pricing from "../components/main/pricing.js";
import Faq from "../components/main/faq.js";
import Testimonial from "../components/main/testimonial.js";
import Footer from "../components/commons/footer.js";

export default function Home() {
  const [enableJoin, setEnableJoin] = useState(true);
  const [paymentCaptured, setPaymentCaptured] = useState(false);

  // const [windowWidth, setWindowWidth] = useState("");
  // useEffect(() => {
  //   window.onresize = function (e) {
  //     setWindowWidth(window.innerWidth);
  //   };
  // }, []);

  // let size = "sm";

  // if (windowWidth > "480" && windowWidth < "768") {
  //   size = "md - 480";
  // } else if (windowWidth >= "768" && windowWidth < "1024") {
  //   size = "lg - 768";
  // } else if (windowWidth >= "1024" && windowWidth < "1280") {
  //   size = "xl - 1024";
  // } else if (windowWidth >= "1280" && windowWidth < "1536") {
  //   size = "2xl - 1280";
  // } else if (windowWidth >= "1536" && windowWidth < "1880") {
  //   size = "3xl - 1536";
  // } else if (windowWidth >= "1880") {
  //   size = "4xl - >1536";
  // }

  const makePayment = async () => {
    const res = await initializeRazorPay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
      t.json()
    );
    console.log(data);
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the key ID genereated from the Dashboard
      name: "Career Taxi",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thank you for your test donation",
      image: "https://cdn.razorpay.com/logos/IwG1SmDFGznPEq_original.png",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      theme: {
        color: "#FFC033",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const initializeRazorPay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  return (
    <>
      <Head>
        <title>Career Taxi</title>
        <meta
          name="description"
          content="Career Taxi - Career Exploration Program. Explore one career option every week to find your passion"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Hero enableJoin={enableJoin} onClick={makePayment} />
      <Video setEnableJoin={setEnableJoin} />
      <Problem />
      <Solution />
      <Expert />
      <Testimonial enableJoin={enableJoin} onClick={makePayment} />
      <Pricing enableJoin={enableJoin} onClick={makePayment} />
      <Faq />
      <Footer />
      {/* <p className="fixed top-0 left-0 bg-yellow text-headThree">
        Size: {size}
      </p> */}
    </>
  );
}
