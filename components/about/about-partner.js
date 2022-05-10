import React from "react";
import Image from "next/image";

import Cato from "/public/images/about/cato-logo.png";
import Navgurukul from "/public/images/about/navgurukul-logo.png";

const AboutPartner = () => {
  return (
    <div className="mb-24 px-5 pt-14 lg:pt-16 2xl:px-44">
      <div className="mx-auto xl:container 2xl:container 3xl:max-w-screen-2xl">
        <div className="mb-10">
          <p className="relative w-fit pb-2 text-headFour">
            Partnered with
            <span className="absolute bottom-3.5 -right-1 -z-10 h-2 w-14 bg-yellow"></span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-36 md:mr-10">
            <Image src={Cato} alt="cato logo" />
          </div>
          <div className="w-80">
            <Image src={Navgurukul} alt="navgurukul logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPartner;
