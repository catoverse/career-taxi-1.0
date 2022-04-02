import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "/public/images/common/logo.svg";
import Cross from "/public/images/common/header/cross-icon.svg";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const hamburgerHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="relative z-10 mx-auto px-5 py-6 2xl:px-44">
      <div className="mx-auto flex items-center justify-between xl:container 2xl:container 3xl:max-w-screen-2xl">
        <li className="list-none text-left">
          <Link href="/">
            <a>
              <Image src={Logo} alt="Career Taxi logo" />
            </a>
          </Link>
        </li>
        <button
          onClick={hamburgerHandler}
          className="display flex basis-1/2 flex-col items-end lg:hidden"
        >
          <li className="my-0.5 h-1 w-10 list-none rounded-sm bg-black"></li>
          <li className="my-0.5 h-1 w-8 list-none rounded-sm bg-black"></li>
          <li className="my-0.5 h-1 w-6 list-none rounded-sm bg-black"></li>
        </button>
        <div className="hidden lg:flex">
          <ul className="hidden items-center justify-center lg:flex">
            {/* <li className="mx-4">
            <Link href="#">
              <a className="my-3 duration-100 hover:font-medium">Blog</a>
            </Link>
          </li> */}
            {/* <li className="mx-4">
            <Link href="/assessment/assessment-test">
              <a className="my-3 duration-100 hover:font-medium">IM Test</a>
            </Link>
          </li> */}
            <li className="mx-10">
              <Link href="/about">
                <a className="my-3 duration-100 hover:font-medium">About Us</a>
              </Link>
            </li>
          </ul>

          <div className="hidden text-right lg:block ">
            <a
              href="https://api.whatsapp.com/send?phone=+91-9168833977"
              target="_blank"
              rel="noreferrer"
            >
              <button className="rounded-xl bg-yellow bg-gradient-to-r from-yellow to-orange px-6 py-3 text-bodyTwo font-medium text-black duration-300 hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(255,192,51,0.5)]">
                Message Us
              </button>
            </a>
          </div>
        </div>
      </div>
      <div
        className={
          "fixed top-0 right-0 h-screen bg-white px-5 py-6 pl-28 " +
          (toggleMenu
            ? "translate-x-0 drop-shadow-2xl duration-500 ease-in-out"
            : "translate-x-full duration-500 ease-in-out")
        }
      >
        <li className="flex list-none flex-col items-end text-center">
          <button className="my-2 mb-6" onClick={hamburgerHandler}>
            <Image src={Cross} alt="cross" />
          </button>
          {/* <Link href="#">
            <a className="my-3">Blog</a>
          </Link> */}
          {/* <Link href="/assessment/assessment-test">
            <a className="my-3">IM Test</a>
          </Link> */}
          <div className="flex flex-col">
            <Link href="/about">
              <a className="my-3">About Us</a>
            </Link>
            <Link href="#">
              <a>
                <button className="my-3 rounded-lg bg-yellow bg-gradient-to-r from-yellow to-orange px-4 py-2 text-bodyTwo font-medium text-black">
                  Message Us
                </button>
              </a>
            </Link>
          </div>
        </li>
      </div>
    </div>
  );
};

export default Header;
