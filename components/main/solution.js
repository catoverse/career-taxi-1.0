import React from "react";
import Image from "next/image";

import CalendarIcon from "/public/images/main/solution/calendar-icon.svg";
import CalendarSm from "/public/images/main/solution/calendar-sm.png";
import CalendarLg from "/public/images/main/solution/calendar-lg.png";
import BookIcon from "/public/images/main/solution/book-icon.svg";
import FolderSm from "/public/images/main/solution/folder-sm.png";
import FolderLg from "/public/images/main/solution/folder-lg.png";
import MicrophoneIcon from "/public/images/main/solution/microphone-icon.svg";
import TargetSm from "/public/images/main/solution/target-sm.png";
import TargetLg from "/public/images/main/solution/target-lg.png";
import StarIcon from "/public/images/main/solution/magic-star-icon.svg";
import MicrophoneSm from "/public/images/main/solution/microphone-sm.png";
import MicrophoneLg from "/public/images/main/solution/microphone-lg.png";
import EditIcon from "/public/images/main/solution/edit-icon.svg";
import PencilSm from "/public/images/main/solution/pencil-sm.png";
import PencilLg from "/public/images/main/solution/pencil-lg.png";

const Solution = () => {
  return (
    <div className="px-5 py-20 lg:pb-40 2xl:px-44">
      <div className="mx-auto xl:container 2xl:container 3xl:max-w-screen-2xl">
        <p className="mb-12 text-center text-headThree font-bold leading-tight lg:mb-36 lg:text-headTwo">
          How to find you passion
        </p>
        {/* wrapper for all the solutions */}
        <div>
          {/* wrapper for each solution */}
          <div className="mb-20 flex flex-col items-center justify-between text-center lg:mb-32 lg:flex-row-reverse lg:px-24 xl:px-40 2xl:mb-48">
            <div className="mb-8 w-52 lg:hidden">
              <Image src={CalendarSm} alt="image" />
            </div>
            <div className="hidden w-96 lg:block xl:w-1/2 xl:max-w-lg">
              <Image src={CalendarLg} alt="image" />
            </div>
            <div className="flex flex-col text-center lg:items-start">
              <div className="mb-2 xl:mb-5">
                <Image src={CalendarIcon} alt="icon" />
              </div>
              <p className="mb-2 text-headFour font-bold leading-tight">
                Career exploration program
              </p>
              <p className="max-w-xs text-bodyOne lg:text-left">
                Explore one career option every week. Minimum time commitment of
                2 hours per week. Exploration through Curated Guides.
              </p>
            </div>
          </div>
          <div className="mb-20 flex flex-col items-center justify-between text-center lg:mb-32 lg:flex-row lg:px-24 xl:px-40 2xl:mb-48">
            <div className=" mb-4 w-52  lg:hidden">
              <Image src={FolderSm} alt="image" />
            </div>
            <div className="hidden w-96 lg:block xl:w-1/2 xl:max-w-lg">
              <Image src={FolderLg} alt="image" />
            </div>
            <div className="flex flex-col text-center lg:items-start">
              <div className="mb-2 xl:mb-5">
                <Image src={BookIcon} alt="icon" />
              </div>
              <p className="mb-2 text-headFour font-bold leading-tight">
                Curated guides to explore
              </p>
              <p className="max-w-xs text-bodyOne lg:text-left">
                Resource material for each career option
              </p>
            </div>
          </div>
          <div className="mb-20 flex flex-col items-center justify-between text-center lg:mb-32 lg:flex-row-reverse lg:px-24 xl:px-40 2xl:mb-48">
            <div className=" mb-4 w-52  lg:hidden">
              <Image src={TargetSm} alt="image" />
            </div>
            <div className="hidden w-96 lg:block xl:w-1/2 xl:max-w-lg">
              <Image src={TargetLg} alt="image" />
            </div>
            <div className="flex flex-col text-center lg:items-start">
              <div className="mb-2 xl:mb-5">
                <Image src={MicrophoneIcon} alt="icon" />
              </div>
              <p className="mb-2 text-headFour font-bold leading-tight">
                Co-exploration calls
              </p>
              <p className="max-w-xs text-bodyOne lg:text-left">
                Daily exploration calls with peers 30 min self exploration using
                Curated Guides 15 min discussion with peers This will keep you
                accountable and help you gain exposure
              </p>
            </div>
          </div>
          <div className="mb-20 flex flex-col items-center justify-between text-center lg:mb-32 lg:flex-row lg:px-24 xl:px-40 2xl:mb-48">
            <div className=" mb-4 w-52  lg:hidden">
              <Image src={MicrophoneSm} alt="image" />
            </div>
            <div className="hidden w-96 lg:block xl:w-1/2 xl:max-w-lg">
              <Image src={MicrophoneLg} alt="image" />
            </div>
            <div className="flex flex-col text-center lg:items-start">
              <div className="mb-2 xl:mb-5">
                <Image src={StarIcon} alt="icon" />
              </div>
              <p className="mb-2 text-headFour font-bold leading-tight">
                Weekly experts’ sessions
              </p>
              <p className="max-w-xs text-bodyOne lg:text-left">
                Group session with industry experts every week
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between text-center lg:flex-row-reverse lg:px-24 xl:px-40">
            <div className=" mb-4 w-52  lg:hidden">
              <Image src={PencilSm} alt="image" />
            </div>
            <div className="hidden w-96 lg:block xl:w-1/2 xl:max-w-lg">
              <Image src={PencilLg} alt="image" />
            </div>
            <div className="flex flex-col text-center lg:items-start">
              <div className="mb-2 xl:mb-5">
                <Image src={EditIcon} alt="icon" />
              </div>
              <p className="mb-2 text-headFour font-bold leading-tight">
                IM Tests
              </p>
              <p className="max-w-xs text-bodyOne lg:text-left">
                A passion test to know where your genuine interests lie
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
