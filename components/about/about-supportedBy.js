import React from "react";
import Image from "next/image";
import Link from "next/link";

import Aniruddha from "/public/images/about/advisors/aniruddha.png";
import Abhishek from "/public/images/about/advisors/abhishek.png";
import Jay from "/public/images/about/advisors/jay.png";
import Rahul from "/public/images/about/advisors/rahul.png";

const AboutSupportedBy = () => {
  return (
    <div>
      <div className="mb-14 px-5 pt-14 lg:pt-16 2xl:px-44">
        <div className="mx-auto xl:container 2xl:container 3xl:max-w-screen-2xl">
          <div>
            <p className="relative w-fit pb-2 text-headFour">
              Supported by
              <span className="absolute bottom-3.5 -right-1 -z-10 h-2 w-14 bg-yellow"></span>
            </p>
          </div>
        </div>
      </div>
      <div className="xl:pl-5 2xl:px-44">
        <div className="mx-auto flex flex-row items-start overflow-x-auto pb-7 xl:container 2xl:container 2xl:mx-0 2xl:max-w-screen-md 2xl:justify-between 3xl:mx-auto 3xl:max-w-screen-2xl 3xl:justify-start">
          <div className="flex flex-col items-center justify-center pl-5 pr-7 xl:mr-16 xl:pr-0 xl:pl-0 2xl:pr-0">
            <div className="mb-5 w-32">
              <Image src={Aniruddha} alt="Aniruddha" />
            </div>
            <p className="mb-1 text-center text-bodyThree font-medium">
              Dr. Aniruddha Malpani
            </p>
            <a
              href="https://twitter.com/malpani"
              target="_blank"
              rel="noreferrer"
              className="text-bodyThree font-normal opacity-50"
            >
              Twitter
            </a>
          </div>
          <div className="flex flex-col items-center justify-center pr-7 xl:mr-16 xl:pr-0 2xl:pr-0">
            <div className="mb-5 w-32">
              <Image src={Abhishek} alt="Abhishek" />
            </div>
            <p className="mb-1 text-bodyThree font-medium">Abhishek Gupta</p>
            <a
              href="https://www.linkedin.com/in/abhishekgupta92/"
              target="_blank"
              rel="noreferrer"
              className="text-bodyThree font-normal opacity-50"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex flex-col items-center justify-center pr-7 xl:mr-16 xl:pr-0 2xl:pr-0">
            <div className="mb-5 w-32">
              <Image src={Jay} alt="Jay" />
            </div>
            <p className="mb-1 text-bodyThree font-medium">Jay Kapoor</p>
            <a
              href="https://twitter.com/Jaykapoor24"
              target="_blank"
              rel="noreferrer"
              className="text-bodyThree font-normal opacity-50"
            >
              Twitter
            </a>
          </div>
          <div className="flex flex-col items-center justify-center pr-7 xl:mr-16 xl:pr-0 2xl:pr-0">
            <div className="mb-5 w-32">
              <Image src={Rahul} alt="Rahul" />
            </div>
            <p className="mb-1 text-bodyThree font-medium">Rahul Garg</p>
            <a
              href="https://twitter.com/rgxai"
              target="_blank"
              rel="noreferrer"
              className="text-bodyThree font-normal opacity-50"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
      <div className="px-5">
        <div className="mx-auto border-b-2 border-[#eeeeee] pb-12 lg:pb-14 xl:container 2xl:container  2xl:px-44 3xl:max-w-screen-2xl"></div>
      </div>
    </div>
  );
};

export default AboutSupportedBy;
