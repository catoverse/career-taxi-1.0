import React from "react";
import Image from "next/image";
import Link from "next/link";

import GuidePreview from "/public/images/main/guide/guide-preview.png";

const Guide = () => {
  return (
    <div className="mt-10 bg-creame px-5 py-20 text-black lg:py-14">
      <div className="mx-auto xl:container 2xl:container 3xl:max-w-screen-2xl">
        <div className="flex flex-col items-center justify-between lg:flex-row-reverse">
          <div className="max-w-lg xl:max-w-xl">
            <Image src={GuidePreview} alt="guide preview" />
          </div>
          <div className="text-center lg:text-left">
            <p className="pt-5 text-headThree font-bold leading-snug lg:max-w-xl lg:text-headTwo lg:leading-tight">
              Explore 40 career options for just ₹99 ✨
            </p>
            <Link href="/guides">
              <button className="mt-10 mr-4 rounded-xl bg-yellow bg-gradient-to-r from-yellow to-orange px-6 py-3 text-bodyTwo font-medium text-black duration-300 hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(255,192,51,0.5)]">
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
