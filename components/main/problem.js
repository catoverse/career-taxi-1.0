import React from "react";
import Image from "next/image";

import ZigZag from "/public/images/main/problem/zigzag.svg";

const Problem = () => {
  return (
    <div className="bg-black px-5 py-20 text-white lg:py-40 2xl:px-44">
      <div className="mx-auto xl:container 2xl:container 3xl:max-w-screen-2xl">
        <div className="flex flex-col justify-between md:flex-row lg:items-start">
          <p className="relative max-w-xs bg-gradient-to-r from-yellow to-orange bg-clip-text pb-10 text-headThree font-bold leading-none text-transparent lg:max-w-lg lg:text-headOne lg:font-black">
            <span className="absolute left-20 -top-6 w-12 lg:-top-16 lg:left-52 lg:w-full">
              <Image src={ZigZag} alt="stroke" />
            </span>
            How not to choose your career
          </p>
          <ul className="md:w-1/2">
            <li className="pb-5 text-bodyOne leading-relaxed opacity-75 lg:text-headFour">
              Choosing a career is not like buying a mobile phone. Yet, most
              people explore only 3 career options
            </li>
            <li className="pb-5 text-bodyOne leading-relaxed opacity-75 lg:text-headFour">
              “College konsa lena hai? Paisa kitna milega?” is not EXPLORATION.
              “Kaam exactly karna kya hoga?” is!
            </li>
            <li className="text-bodyOne leading-relaxed opacity-75 lg:text-headFour">
              Rushing the career decision and regretting it later? Not so smart,
              Adi!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Problem;
