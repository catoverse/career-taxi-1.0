import React from "react";
import Image from "next/image";
import Link from "next/link";

import Thumb from "/public/images/main/testimonial/thumb.png";
import Nandini from "/public/images/main/testimonial/nandini.jpeg";
import Aastha from "/public/images/main/testimonial/aastha.jpg";
import Play from "/public/images/common/play-circle.svg";

const Testimonial = ({ enableJoin, onClick }) => {
  return (
    <div className="px-5 pt-20 pb-5 lg:pb-20">
      <div className="mx-auto lg:px-20 xl:container xl:px-24 2xl:container 2xl:px-44 3xl:max-w-screen-2xl">
        <p className="mb-12 text-center text-headThree font-bold leading-tight lg:mb-36 lg:text-headTwo">
          People 💛 our program
        </p>
        {/* desktop layout */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:items-center lg:justify-center lg:gap-5">
          <div className="lg:grid lg:grid-rows-[550px_286px_384px] lg:gap-5">
            <div className="mb-5 h-20 w-full rounded-2xl lg:mb-0 lg:h-[550px]">
              <iframe
                className="mx-auto mb-5 h-full w-full max-w-md rounded-2xl lg:mb-0"
                src="https://www.youtube.com/embed/xT6YdPPBMn0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mb-5 flex h-20 w-full flex-col justify-between rounded-2xl bg-creame p-5 lg:mb-0 lg:h-[286px]">
              <div className="text-bodyTwo font-normal leading-normal lg:mb-3">
                The career classes were very beneficial— really friendly
                volunteers, and the guides were precise. Career Taxi helped me
                become familiar with various career options in a short period of
                time.
              </div>
              <div className="flex items-center">
                <div className="mr-4 w-24">
                  <Image className="rounded-full" src={Aastha} alt="aastha" />
                </div>
                <div>
                  <p className="text-bodyTwo font-semibold">Aastha Rajput</p>
                  <p className="text-bodyThree font-normal">Student</p>
                </div>
              </div>
            </div>
            <div className="relative mb-5 flex h-20 w-full flex-col justify-between rounded-2xl bg-black p-5 pb-7 lg:mb-0 lg:h-96">
              <div className="absolute right-0 bottom-10 w-44 opacity-50">
                <Image src={Thumb} alt="thumb" />
              </div>
              <div className="text-headThree font-bold leading-tight text-white">
                Join our <br />
                community of
                <br />
                <span className="text-headOne font-extrabold italic leading-none">
                  100+{" "}
                </span>
                <br />
                explorers
              </div>
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
              {/* <a
                href="https://api.whatsapp.com/send?phone=+91-9168833977"
                target="_blank"
                rel="noreferrer"
              >
                <button className="mt-10 mr-4 rounded-xl bg-yellow bg-gradient-to-r from-yellow to-orange px-6 py-3 text-bodyTwo font-medium text-black duration-300 hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(255,192,51,0.5)]">
                  Message Us
                </button>
              </a> */}
            </div>
          </div>
          <div className="lg:col-span-2 lg:grid lg:grid-cols-2 lg:grid-rows-[1fr_400px_550px] lg:gap-5">
            <div className="mb-5 flex h-20 w-full flex-col justify-between rounded-2xl bg-creame p-5 lg:col-span-2 lg:mb-0 lg:h-max">
              <div className="mb-6 text-bodyTwo font-normal leading-normal">
                The kind of content Career Taxi provides us with is so helpful
                and insightful. I personally liked the concept of guides as it
                turned out to be quite an effective way for me to get a quick
                yet in-depth knowledge of various fields. I got to explore
                numerous sets of conventional and non-conventional careers which
                I didn&apos;t even know existed like cloud computing, growth
                marketing, entrepreneurship, and many more. Best Part...? No one
                gets to decide what&apos;s best for you, but you. Session on the
                weekend are literally the best ones! Be it with any professional
                or with our peers, brainstorming is guaranteed. I am so glad to
                be one of the passengers of such a cool taxi.
              </div>
              <div className="flex items-center">
                <div className="mr-4 w-24">
                  <Image className="rounded-full" src={Nandini} alt="nandini" />
                </div>
                <div>
                  <p className="text-bodyTwo font-semibold">Nandini Hirawat</p>
                  <p className="text-bodyThree font-normal">Student</p>
                </div>
              </div>
            </div>
            <div className="mb-5 h-20 w-full rounded-2xl lg:col-span-2 lg:h-full xl:mb-0">
              <iframe
                className="mx-auto mb-5 h-full w-full max-w-md rounded-2xl lg:col-span-3 lg:mb-0 lg:max-w-none"
                src="https://www.youtube.com/embed/Of7K06copEY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-5">
              <div className="mb-5 h-20 w-full rounded-2xl lg:mb-0 lg:h-[550px]">
                <iframe
                  className="mx-auto mb-5 h-full w-full max-w-md rounded-2xl lg:mb-0"
                  src="https://www.youtube.com/embed/w5xEmeWlTrY"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mb-5 h-20 w-full rounded-2xl lg:mb-0 lg:h-[550px]">
                <iframe
                  className="mx-auto h-full w-full max-w-md rounded-2xl"
                  src="https://www.youtube.com/embed/YDQkeLLVg9o"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        {/* mobile layout */}
        <div className="block lg:hidden">
          <div>
            <iframe
              className="mx-auto mb-5 h-96 w-full rounded-2xl md:max-w-lg"
              src="https://www.youtube.com/embed/xT6YdPPBMn0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              className="mx-auto mb-5 h-96 w-full rounded-2xl md:max-w-lg"
              src="https://www.youtube.com/embed/Of7K06copEY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              className="mx-auto mb-5 h-96 w-full rounded-2xl md:max-w-lg"
              src="https://www.youtube.com/embed/w5xEmeWlTrY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              className="mx-auto mb-5 h-96 w-full rounded-2xl md:max-w-lg"
              src="https://www.youtube.com/embed/YDQkeLLVg9o"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mx-auto mb-5 flex h-full w-full flex-col justify-between rounded-2xl bg-creame p-5 md:max-w-lg">
            <div className="mb-6 text-bodyTwo font-normal leading-normal">
              The career classes were very beneficial— really friendly
              volunteers, and the guides were precise. Career Taxi helped me
              become familiar with various career options in a short period of
              time.
            </div>
            <div className="flex items-center">
              <div className="mr-4 w-24">
                <Image
                  className="rounded-full object-scale-down"
                  src={Aastha}
                  alt="aastha"
                />
              </div>
              <div>
                <p className="text-bodyTwo font-semibold">Aastha Rajput</p>
                <p className="text-bodyThree font-normal">Student</p>
              </div>
            </div>
          </div>
          <div className="mx-auto mb-5 flex h-full w-full flex-col justify-between rounded-2xl bg-creame p-5 md:max-w-lg">
            <div className="mb-6 text-bodyTwo font-normal leading-normal">
              The kind of content Career Taxi provides us with is so helpful and
              insightful. I personally liked the concept of guides as it turned
              out to be quite an effective way for me to get a quick yet
              in-depth knowledge of various fields. I got to explore numerous
              sets of conventional and non-conventional careers which I
              didn&apos;t even know existed like cloud computing, growth
              marketing, entrepreneurship, and many more. Best Part...? No one
              gets to decide what&apos;s best for you, but you. Session on the
              weekend are literally the best ones! Be it with any professional
              or with our peers, brainstorming is guaranteed. I am so glad to be
              one of the passengers of such a cool taxi.
            </div>
            <div className="flex items-center">
              <div className="mr-4 w-24">
                <Image className="rounded-full" src={Nandini} alt="nandini" />
              </div>
              <div>
                <p className="text-bodyTwo font-semibold">Nandini Hirawat</p>
                <p className="text-bodyThree font-normal">Student</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
