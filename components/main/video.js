import React, { useState } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";

import Pattern from "/public/images/main/video/bg-pattern.svg";

const Video = ({ onClick, enableJoin, setEnableJoin }) => {
  const [seconds, setSeconds] = useState("");
  const enableButton = (playedSeconds) => {
    if (playedSeconds.playedSeconds > 240) {
      setEnableJoin(true);
    }
    setSeconds((240 - playedSeconds.playedSeconds).toFixed(0));
  };

  return (
    <div id="video" className="mx-auto -mt-12 px-5 pb-20 lg:-mt-12">
      <div className="2xl:max-w-8xl relative mx-auto mt-14 lg:max-w-6xl">
        <div className="absolute top-4 -left-4 -z-10 w-12 lg:-top-8 lg:-left-10 lg:w-24">
          <Image src={Pattern} alt="pattern" />
        </div>
        <div className="absolute -bottom-16 left-1/2 right-1/2 -z-10 h-40 w-10/12 -translate-x-1/2 -translate-y-1/2 bg-yellow blur-3xl lg:-bottom-28 lg:h-96 2xl:-bottom-48 2xl:h-3/4 2xl:w-11/12"></div>
        {/* <p className="mb-8 text-center text-headThree font-bold ">
          Watch how it works!
        </p> */}
        <div className="aspect-video">
          <ReactPlayer
            style={{
              border: "1px solid transparent",
              borderRadius: "16px",
              overflow: "hidden",
            }}
            controls
            width="100%"
            height="100%"
            onProgress={enableButton}
            url="https://www.youtube.com/watch?v=JD16JJkXLS4"
          />
        </div>
        <div className="mx-auto text-center">
          {!enableJoin ? (
            <p className="mt-8 text-center">
              Watch full video to Join!{" "}
              <span>Time Remaining: {seconds} seconds</span>
            </p>
          ) : (
            <button
              onClick={onClick}
              disabled={!enableJoin}
              className={
                "mx-auto mt-10 mr-4 rounded-xl bg-yellow bg-gradient-to-r from-yellow to-orange px-6 py-3 text-bodyTwo font-medium text-black duration-300 " +
                (enableJoin
                  ? "hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(255,192,51,0.5)]"
                  : "cursor-not-allowed opacity-50 hover:-translate-y-0 hover:shadow-none")
              }
            >
              Join Now
            </button>
          )}
        </div>
        <div className="absolute -bottom-6 -right-4 -z-10 w-12 lg:-right-8 lg:bottom-2 lg:w-24">
          <Image src={Pattern} alt="pattern" />
        </div>
      </div>
    </div>
  );
};

export default Video;
