import React from "react";
import Image from "next/image";
import Link from "next/link";

import Blob from "/public/images/main/price/blob.svg";
import Stroke from "/public/images/main/price/stroke.svg";
import Ribbon from "/public/images/main/price/ribbon.svg";
import Check from "/public/images/main/price/verify-icon.svg";
import Play from "/public/images/common/play-circle.svg";

const Pricing = ({ enableJoin, onClick }) => {
  return (
    <div className="overflow-hidden px-5 py-40 text-white">
      <div className="relative mx-auto max-w-md rounded-2xl bg-black px-6 py-8">
        <div className="absolute -left-[46rem] top-44 -z-10 w-[1880px]">
          <Image src={Ribbon} alt="ribbon" />
        </div>
        <div className="absolute -left-[15%] -z-10 w-[500px] sm:-left-14 sm:w-[550px] md:-left-[90px] md:-top-0 md:w-[650px]">
          <Image src={Blob} alt="blob" />
        </div>
        <div className="absolute -bottom-64 left-1/2 right-1/2 -z-10 h-5/6 w-10/12 -translate-x-1/2 -translate-y-1/2 bg-yellow blur-3xl lg:w-11/12"></div>
        <div className="mb-14 flex items-end">
          <p className="bg-gradient-to-r from-yellow to-orange bg-clip-text pr-2 text-headTwo font-semibold leading-none text-transparent lg:text-headOne lg:font-bold">
            ₹999
          </p>
          <span className="relative">
            <div className="absolute -right-5 w-20 lg:-right-10 lg:w-28">
              <Image src={Stroke} alt="Stroke" />
            </div>
            <p className="text-bodyOne font-normal opacity-75 lg:mb-1 lg:text-headFour">
              ₹1999
            </p>
          </span>
        </div>
        <div className="pb-16">
          <p className="mb-3 text-headThree font-semibold leading-tight">
            Take your career to the next level.
          </p>
          <ul>
            <li className="mb-1 flex items-center text-bodyThree lg:text-bodyTwo">
              <div className="mr-2">
                <Image src={Check} alt="check" />
              </div>
              Explore 15 career options
            </li>
            <li className="mb-1 flex items-center text-bodyThree lg:text-bodyTwo">
              <div className="mr-2">
                <Image src={Check} alt="check" />
              </div>
              Choose any career option under the sun
            </li>
            <li className="mb-1 flex items-center text-bodyThree lg:text-bodyTwo">
              <div className="mr-2">
                <Image src={Check} alt="check" />
              </div>
              Weekly expert sessions
            </li>
            <li className="mb-1 flex items-center text-bodyThree lg:text-bodyTwo">
              <div className="mr-2">
                <Image src={Check} alt="check" />
              </div>
              Exploration with peers
            </li>
            <li className="flex items-center text-bodyThree lg:text-bodyTwo">
              <div className="mr-2">
                <Image src={Check} alt="check" />
              </div>
              Intrinsic Motivation Test (Passion Test)
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          {!enableJoin ? (
            <Link href="#video">
              <a>
                <button className="mt-10 flex items-center rounded-xl bg-yellow bg-gradient-to-r from-yellow to-orange px-6 py-3 text-bodyTwo font-medium text-black duration-300 hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(255,192,51,0.5)]">
                  {!enableJoin && <Image src={Play} alt="play" />}

                  <p className="pl-2">Watch video to join</p>
                </button>
              </a>
            </Link>
          ) : (
            <button
              onClick={onClick}
              className={
                "mt-10 mr-4 rounded-xl bg-yellow bg-gradient-to-r from-yellow to-orange px-6 py-3 text-bodyTwo font-medium text-black duration-300 hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(255,192,51,0.5)]"
              }
            >
              Join Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
