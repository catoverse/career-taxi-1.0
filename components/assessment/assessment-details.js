import React from "react";
import Image from "next/image";

import Circle from "/public/images/assessment/circle.svg";
import Happy from "/public/images/assessment/happy.svg";
import Broom from "/public/images/assessment/broom.svg";
import Edit from "/public/images/assessment/edit.svg";
import ArrowRight from "/public/images/assessment/arrow-right-black.svg";

const AssessmentDetails = () => {
  return (
    <div className="py-14 px-5 2xl:px-44">
      <div className="mx-auto xl:container 2xl:container 3xl:max-w-screen-2xl">
        <div className="max-w-4xl pb-14">
          <p className="relative pb-4 text-headThree font-bold leading-tight">
            <span className="absolute left-[120px] -top-4">
              <Image src={Circle} alt="circle" />
            </span>
            What is Intrinsic Motivation?
          </p>
          <p className="text-bodyOne font-normal leading-normal">
            Intrinsic motivation means to be motivated by internal factors, such
            as enjoyment of the activity. It&apos;s when you do something not
            because there&apos;s any external reward involved. The work in
            itself is the reward for you.
          </p>
        </div>
        <div className="max-w-4xl pb-14">
          <p className="pb-4 text-headThree font-bold leading-tight">
            Examples of Intrinsic Motivation
          </p>
          <ul className="text-bodyOne font-normal leading-normal">
            <li className="mb-3 flex flex-row items-start">
              <div className="mr-4 mt-1 w-full max-w-[18px]">
                <Image src={Happy} alt="happy" />
              </div>
              <p>
                Participating in a sport because it’s fun and you enjoy it
                rather than doing it to win an award
              </p>
            </li>
            <li className="mb-3 flex flex-row items-start">
              <div className="mr-4 mt-1 w-full max-w-[18px]">
                <Image src={Edit} alt="edit" />
              </div>
              <p>
                Learning a new language because you like experiencing new
                things, not because your job requires it
              </p>
            </li>
            <li className="flex flex-row items-start">
              <div className="mr-4 mt-1 w-full max-w-[18px]">
                <Image src={Broom} alt="broom" />
              </div>
              <p>
                Cleaning because you enjoy a tidy space rather than doing it to
                avoid making your spouse angry
              </p>
            </li>
          </ul>
        </div>
        <div className="max-w-4xl pb-14">
          <p className="pb-4 text-headThree font-bold leading-tight">
            Why is Intrinsic Motivation important for me?
          </p>
          <p className="text-bodyOne font-normal leading-normal">
            For tasks that don’t need a lot of creativity, it’s fine if you are
            not intrinsically motivated. But if it’s for something long-term
            like when choosing a career it’s important for you to be
            intrinsically motivated. This is because when you are intrinsically
            motivated, you are much more involved in the task, you enjoy the
            work more and you tend to be more creative. It’s easier to grow in a
            profession you have a genuine curiosity for. <br />
            <br />
            Intrinsic motivation is found by pursuing your genuine curiosity.
            The curiosity has to be long-term. It has to be a long quest that
            you are on. Figure that out and voila, you’ve found your passion!
          </p>
        </div>
        <div className="max-w-4xl pb-14 ">
          <p className="pb-4 text-headThree font-bold leading-tight">
            The puzzle of motivation
          </p>
          <iframe
            className="aspect-video w-full"
            src="https://www.youtube.com/embed/rrkrvAUbU9Y"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button
            type="submit"
            className="mt-8 flex items-center rounded-lg bg-gradient-to-r from-yellow to-orange px-4 py-2 text-bodyTwo font-medium text-black lg:my-10"
          >
            <p className="mr-1">Begin the test </p>
            <Image
              width={20}
              height={20}
              className="fill-black"
              src={ArrowRight}
              alt="arrow right"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentDetails;
