import React from "react";
import Image from "next/image";

import Abhishek from "/public/images/main/expert/abhishek.jpeg";
import Prashant from "/public/images/main/expert/prashant.jpeg";
import Circle from "/public/images/main/expert/circle.svg";
import Stroke from "/public/images/main/expert/stroke.svg";

const Expert = () => {
  return (
    <div className="bg-creame px-5 py-20 text-black lg:pb-40">
      <div className="mx-auto xl:container 2xl:container 3xl:max-w-screen-2xl">
        <p className="mb-16 text-center text-headThree font-bold leading-tight lg:mb-36 lg:text-headTwo">
          Expert Sessions
        </p>
        {/* wrapping all experts */}
        <div className="mx-auto max-w-5xl">
          {/* wrapping individual expert */}
          <div className="mb-20 lg:mb-28 lg:flex lg:flex-row lg:items-end lg:justify-center">
            <div className="relative mx-auto mb-8 w-52 lg:mx-0 lg:mb-0 lg:mr-20">
              <div className="absolute -left-[60px] top-[30px]">
                <Image src={Circle} alt="circle" />
              </div>
              <div className="absolute -top-4 -right-5">
                <Image src={Stroke} alt="stroke" />
              </div>
              <div className="drop-shadow-[-26px_0px_25px_rgba(0,0,0,0.25)]">
                <Image src={Abhishek} className="rounded-xl" alt="abhishek" />
              </div>
            </div>
            <div className="text-center lg:text-left">
              <p className="mb-2 text-headFour font-semibold">Abhishek Gupta</p>
              <p className="font-regular text-bodyOne">
                Serial entrepreneur, B.Tech in CS from IITD
              </p>
              <p className="font-regular mb-2 text-bodyOne">
                Founder and CEO of NavGurukul, a non-profit organization
              </p>
              <a
                href="https://www.linkedin.com/in/abhishekgupta92/"
                target="_blank"
                rel="noreferrer"
                className="text-bodyTwo font-semibold italic text-yellow"
              >
                Linkedin
              </a>
            </div>
          </div>
          <div className="lg:flex lg:flex-row lg:items-end lg:justify-center">
            <div className="relative mx-auto mb-8 w-52 lg:mx-0 lg:mb-0 lg:mr-20">
              <div className="absolute -left-[60px] top-[30px]">
                <Image src={Circle} alt="circle" />
              </div>
              <div className="absolute -top-4 -right-5">
                <Image src={Stroke} alt="stroke" />
              </div>
              <div className="drop-shadow-[-26px_0px_25px_rgba(0,0,0,0.25)]">
                <Image src={Prashant} className="rounded-xl" alt="prashant" />
              </div>
            </div>
            <div className="text-center lg:text-left">
              <p className="mb-2 text-headFour font-semibold">Prashant Singh</p>
              <p className="font-regular text-bodyOne">
                Ex-VP, Product at Paytm
              </p>
              <p className="font-regular mb-2 text-bodyOne">
                Prior to that Prashant’s product startup, Shifu got acquired
                <br /> by Paytm within 3 years of founding it for $8M in 2015
              </p>
              <a
                href="https://www.linkedin.com/in/prashantsingh/"
                target="_blank"
                rel="noreferrer"
                className="text-bodyTwo font-semibold italic text-yellow"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expert;
