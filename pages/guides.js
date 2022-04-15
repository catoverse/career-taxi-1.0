import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import GuideImg from "/public/images/guide/guideimg.png";

import useLocalStorage from "use-local-storage";

import Header from "../components/commons/header.js";
import Footer from "../components/commons/footer.js";

const Guides = () => {
  const [item, setItem] = useLocalStorage("name", "");
  const [paymentCaptured, setPaymentCaptured] = useState(false);

  useEffect(() => {
    if (item) {
      setPaymentCaptured(true);
    }
  }, []);

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
        if (response) {
          console.log(response);
          setPaymentCaptured(true);
          setItem("paid");
        }
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
    <div>
      <Header />
      <div className="px-5 2xl:px-44">
        <div className="mx-auto mt-2 mb-20 xl:container 2xl:container 3xl:max-w-screen-2xl">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="max-w-lg xl:max-w-xl">
              <Image src={GuideImg} alt="guide" />
            </div>
            <div className="mt-6 text-center lg:text-left">
              <p className="mb-1 text-headThree font-bold lg:text-headTwo">
                20 Curated Guides
              </p>
              <p className="max-w-2xl text-bodyTwo font-normal leading-6 lg:text-bodyOne lg:leading-7">
                Velit malesuada turpis pretium quisque a libero, morbi. Sagittis
                purus nisl pharetra, adipiscing scelerisque metus. Mi in
                pulvinar adipiscing sed magna tellus. Tristique rhoncus duis
                cursus morbi quam arcu ut.{" "}
              </p>
              {!paymentCaptured ? (
                <button
                  onClick={makePayment}
                  className="mt-10 mr-4 rounded-xl bg-yellow bg-gradient-to-r from-yellow to-orange px-6 py-3 text-bodyTwo font-medium text-black duration-300 hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(255,192,51,0.5)]"
                >
                  Buy Now
                </button>
              ) : (
                <a href="https://career.taxi/" target="_blank" rel="noreferrer">
                  <button className="mt-10 mr-4 rounded-xl bg-yellow bg-gradient-to-r from-yellow to-orange px-6 py-3 text-bodyTwo font-medium text-black duration-300 hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(255,192,51,0.5)]">
                    View Guides
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Guides;
