import React from "react";
import Image from "next/image";

import Rutvij from "/public/images/about/team/rutvij.png";
import Parth from "/public/images/about/team/parth.png";
import Sant from "/public/images/about/team/sant.png";
import Nandini from "/public/images/about/team/nandini.png";
import Prerna from "/public/images/about/team/prerna.png";
import Ashwin from "/public/images/about/team/ashwin.png";

const AboutTeam = () => {
  return (
    <div>
      <div className="mb-14 px-5 pt-14 lg:pt-16 2xl:px-44">
        <div className="mx-auto xl:container 2xl:container 3xl:max-w-screen-2xl">
          <div>
            <p className="relative w-fit pb-2 text-headFour">
              Team
              <span className="absolute bottom-3.5 -right-1 -z-10 h-2 w-10 bg-yellow"></span>
            </p>
          </div>
        </div>
      </div>
      <div className="xl:pl-5 2xl:px-44">
        <div className="mx-auto flex flex-row overflow-x-auto pb-7 xl:container 2xl:container 3xl:max-w-screen-2xl">
          <div className="flex flex-col items-center justify-center pl-5 pr-7 xl:mr-16 xl:pr-0 xl:pl-0">
            <div className="mb-5 w-32">
              <Image src={Rutvij} alt="Rutvij" />
            </div>
            <p className="mb-1 text-bodyThree font-medium">Rutvij Karkhanis</p>
            <p className="mb-1 text-bodyThree font-medium opacity-50">
              Founder
            </p>
            <a
              href="https://www.linkedin.com/in/rutvijkarkhanis/"
              target="_blank"
              className="text-bodyThree font-normal opacity-50"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex flex-col items-center justify-center pr-7 xl:mr-16 xl:pr-0">
            <div className="mb-5 w-32">
              <Image src={Parth} alt="Parth" />
            </div>
            <p className="mb-1 text-bodyThree font-medium">Parth Arya</p>
            <p className="mb-1 text-bodyThree font-medium opacity-50">
              Founder
            </p>
            <a
              href="https://www.linkedin.com/in/parth-arya-ab1a07162/"
              target="_blank"
              className="text-bodyThree font-normal opacity-50"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex flex-col items-center justify-center pr-7 xl:mr-16 xl:pr-0">
            <div className="mb-5 w-32">
              <Image src={Sant} alt="Sant" />
            </div>
            <p className="mb-1 text-bodyThree font-medium">Sant Sharma</p>
            <p className="mb-1 text-bodyThree font-medium opacity-50">
              Founding Team
            </p>
            <a
              href="https://www.linkedin.com/in/sant-sharma-059723216/"
              target="_blank"
              className="text-bodyThree font-normal opacity-50"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="flex flex-col items-center justify-center pr-7 xl:mr-16 xl:pr-0">
            <div className="mb-5 w-32">
              <Image src={Nandini} alt="Nandini" />
            </div>
            <p className="mb-1 text-bodyThree font-medium">Nandini Hirawat</p>
            <p className="mb-1 text-bodyThree font-medium opacity-50">
              Curator
            </p>
            <a
              href="https://www.linkedin.com/in/nandini-hirawat-9aaaa218b/"
              target="_blank"
              className="text-bodyThree font-normal opacity-50"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex flex-col items-center justify-center pr-7 xl:mr-16 xl:pr-0">
            <div className="mb-5 w-32">
              <Image src={Prerna} alt="Prerna" />
            </div>
            <p className="mb-1 text-bodyThree font-medium">Prerna Rai</p>
            <p className="mb-1 text-bodyThree font-medium opacity-50">
              Content Head
            </p>
            <a
              href="https://www.instagram.com/pacophile04/"
              target="_blank"
              className="text-bodyThree font-normal opacity-50"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
          <div className="flex flex-col items-center justify-center pr-7 xl:pr-0">
            <div className="mb-5 w-32">
              <Image src={Ashwin} alt="Ashwin" />
            </div>
            <p className="mb-1 text-bodyThree font-medium">Ashwin Chauhan</p>
            <p className="mb-1 text-bodyThree font-medium opacity-50">
              Tech Head
            </p>
            <a
              href="https://www.linkedin.com/in/ashwin-chauhan-81b137147/"
              target="_blank"
              className="text-bodyThree font-normal opacity-50"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="px-5 xl:px-0">
          <div className="mx-auto border-b-2 border-[#eeeeee] pb-12 lg:pb-14 xl:container 2xl:container  2xl:px-44 3xl:max-w-screen-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
