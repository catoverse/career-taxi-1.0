import Link from "next/link";
import Image from "next/image";

import Logo from "/public/images/common/logo.svg";

const Footer = () => {
  return (
    <div className="bg-black px-5 py-24 text-white">
      <div className="mx-auto lg:max-w-6xl">
        <div className="flex flex-col justify-between lg:flex-row lg:items-start">
          <ul className="mb-6 lg:mb-0">
            <li className="mb-2 text-bodyTwo font-semibold">Socials</li>
            <li className="mb-3 text-bodyTwo font-normal opacity-75">
              <a
                href="https://twitter.com/career_taxi"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
            <li className="mb-3 text-bodyTwo font-normal opacity-75">
              <a
                href="https://discord.gg/pzr5pFkMjH"
                target="_blank"
                rel="noreferrer"
              >
                Discord
              </a>
            </li>
            <li className="mb-3 text-bodyTwo font-normal opacity-75">
              <a
                href="https://www.linkedin.com/company/careertaxi"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li className="mb-3 text-bodyTwo font-normal opacity-75">
              <a
                href="https://www.youtube.com/channel/UCF5KmyUcgPgchj1oH-SgwpQ/"
                target="_blank"
                rel="noreferrer"
              >
                Youtube
              </a>
            </li>
            <li className="text-bodyTwo font-normal opacity-75">
              <a
                href="https://www.instagram.com/career.taxi/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
          <ul className="mb-6 lg:mb-0">
            <li className="mb-2 text-bodyTwo font-semibold">Updates</li>
            <li className="mb-3 text-bodyTwo font-normal opacity-75">
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li className="text-bodyTwo font-normal opacity-75">
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
          </ul>
          {/* <ul className="mb-6 lg:mb-0">
            <li className="mb-2 text-bodyTwo font-semibold">Test</li>
            <li className="text-bodyTwo font-normal opacity-75">
              <Link href="/assessment/assessment-test">
                <a>IM Test</a>
              </Link>
            </li>
          </ul> */}
          <ul className="mb-6 lg:mb-0">
            <li className="mb-2 text-bodyTwo font-semibold">Legal</li>
            <li className="mb-4 text-bodyTwo font-normal opacity-75">
              <a
                href="https://privacyterms.io/view/8LcKEdF3-2Sb7sSTm-wXlD5s/"
                target="_blank"
                rel="noreferrer"
              >
                Terms and Conditions
              </a>
            </li>
            <li className="mb-3 text-bodyTwo font-normal opacity-75">
              <a
                href="https://navgurukul.notion.site/Privacy-Policy-4395bcfd010d43288b834d85124c9ca7"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy
              </a>
            </li>
            <li className="text-bodyTwo font-normal opacity-75">
              <a
                href="https://navgurukul.notion.site/Cancellation-and-Refund-Policies-ba31427e9a12407ca91f4d9327282810"
                target="_blank"
                rel="noreferrer"
              >
                Cancellation and Refund Policies
              </a>
            </li>
          </ul>
          <ul className="">
            <li className="mb-2 text-bodyTwo font-semibold">
              <div className="w-6">
                <Image src={Logo} alt="career taxi logo" />
              </div>
            </li>
            <li className="mb-4 text-bodyTwo font-normal opacity-75">
              © 2022 Career Taxi
            </li>
            <li className="mb-4 text-bodyTwo font-normal opacity-75">
              D-902, Imperial Heights,
              <br /> Landran-Kharar Road, Sector 115,
              <br /> Mohali
            </li>
            <li className="text-bodyTwo font-normal opacity-75">
              +91 8446276959
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
