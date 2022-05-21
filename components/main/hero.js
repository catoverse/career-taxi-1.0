import React from "react";
import Image from "next/image";

import Stroke from "/public/images/main/hero/stroke.svg";
import GirlFlying from "/public/images/main/hero/girl-taking-off.png";
import SmallArrow from "/public/images/main/hero/small-arrow.svg";
import BigArrow from "/public/images/main/hero/big-arrow.svg";

const Hero = ({ enableJoin, onClick }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="px-5 2xl:px-44">
        <div className="mx-auto pb-20 pt-10 md:pt-0 lg:pb-44 xl:container 2xl:container 3xl:max-w-screen-2xl">
          <div className="z-10 lg:mt-8">
            <section>
              <div className="pt-16">
                <p className="mb-6 text-headTwo font-extrabold leading-tight lg:text-headOne lg:leading-none xl:font-black">
                  <span className="relative after:ml-0.5 after:content-[stroke]">
                    <span className="absolute top-4 lg:top-7">
                      <Image src={Stroke} alt="stroke" />
                    </span>
                    Career
                    <br />
                  </span>{" "}
                  Exploration
                  <br /> Program
                </p>
                <p className="max-w-sm text-headFour leading-snug">
                  Explore one career option every week to find your passion
                </p>
              </div>
              <div className="flex flex-row items-center">
                <a
                  href="https://wa.me/918446276959"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="mt-10 mr-4 rounded-xl bg-yellow bg-gradient-to-r from-yellow to-orange px-6 py-3 text-bodyTwo font-medium text-black duration-300 hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(255,192,51,0.5)]">
                    Message Us
                  </button>
                </a>
                <div className="relative">
                  <button
                    onClick={onClick}
                    disabled={!enableJoin}
                    className={
                      "mt-10 mr-4 rounded-xl bg-yellow bg-gradient-to-r from-yellow to-orange px-6 py-3 text-bodyTwo font-medium text-black duration-300 " +
                      (enableJoin
                        ? "hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(255,192,51,0.5)]"
                        : "cursor-not-allowed opacity-50 hover:-translate-y-0 hover:shadow-none")
                    }
                  >
                    Join Now
                  </button>
                  <div className="absolute top-16 -right-14 lg:hidden">
                    <Image src={SmallArrow} alt="small arrow" />
                  </div>
                  <div className="absolute top-8 -right-40 hidden lg:block">
                    <Image src={BigArrow} alt="big arrow" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="absolute top-0 -right-16 md:-right-20 md:top-20 lg:-right-44 lg:top-0 xl:-right-28">
        <div className="w-60 md:w-96 lg:w-750">
          <Image src={GirlFlying} alt="Girl taking off" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
