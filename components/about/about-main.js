import React from "react";
import Image from "next/image";

import Star from "/public/images/about/star.svg";

const AboutMain = () => {
  return (
    <div className="px-5 pt-14 lg:pt-24 2xl:px-44">
      <div className="mx-auto xl:container 2xl:container 3xl:max-w-screen-2xl">
        <div className="border-b-2 border-[#eeeeee] pb-12 lg:pb-16">
          <p className="relative w-fit pb-2 text-headFour">
            Our mission
            <span className="absolute bottom-3.5 -right-1 -z-10 h-2 w-16 bg-yellow"></span>
          </p>
          <h1 className="relative w-fit pb-4 text-headThree font-bold leading-tight lg:max-w-4xl lg:text-headTwo lg:leading-[60px]">
            We are on a mission to help people find their passion.
            <span className="absolute -top-10 right-0 w-12 lg:w-[70px]">
              <Image src={Star} alt="star" />
            </span>
          </h1>
          <p className="text-bodyTwo font-normal leading-relaxed lg:max-w-3xl lg:text-headFour lg:leading-normal">
            We&apos;ve seen a lot of our close friends make bad career choices
            and regret them later. It deeply pains us and we very strongly
            intend to stop that from happening to others.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
