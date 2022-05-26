import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Logo from "../components/Logo";
import Discord from "../components/icons/Discord";
import landing from "../public/assets/landing/landing.svg";

import aws from "../public/assets/landing/aws.svg";
import digitalocean from "../public/assets/landing/digitalocean.svg";
import jetbrains from "../public/assets/landing/jetbrains.svg";
import sketch from "../public/assets/landing/sketch.svg";
import linode from "../public/assets/landing/linode.svg";
import wolfram from "../public/assets/landing/wolfram.svg";
import replit from "../public/assets/landing/replit.svg";
import stellar from "../public/assets/landing/stellar.svg";

export default function Landing({}) {
  return (
    <div className="">
      <div className="flex items-center justify-between mxs:px-1 mxs:pt-2 px-8 pt-5">
        <Logo className="mxs:w-[80px] w-[120px]" />
        <div className="flex items-center mxs:text-10px text-24px">
          <div className="flex items-center mxs:space-x-2 mxs:mx-2 space-x-16 mx-16">
            <Link href="/scrapbook">
              <p className="mxs:text-10px text-[#7D7D7D]  cursor-pointer hover:opacity-80">
                Scrapbook
              </p>
            </Link>
            <Link href="/project-gallery">
              <p className="mxs:text-10px text-[#7D7D7D]  cursor-pointer hover:opacity-80">
                Projects
              </p>
            </Link>
            <Link href="#">
              <p className="mxs:text-10px text-[#7D7D7D]  cursor-pointer hover:opacity-80">
                People
              </p>
            </Link>
            <Link href="/events">
              <p className="mxs:text-10px text-[#7D7D7D]  cursor-pointer hover:opacity-80">
                Events
              </p>
            </Link>
            <Link href="#">
              <p className="mxs:text-10px text-[#7D7D7D]  cursor-pointer hover:opacity-80">Jobs</p>
            </Link>
          </div>
          <div className="flex items-center mxs:space-x-1 space-x-5">
            <Link href="#">
              <button className="mxs:px-1 mxs:py-0.5 mxs:rounded-sm px-5 py-3 rounded-[10px] border border-[#4CB050] text-[#4CB050] bg-white font-bold transition-all hover:scale-105 focus:scale-105">
                Hire Talents
              </button>
            </Link>
            <Link href="#">
              <button className="mxs:px-1 mxs:py-0.5 mxs:rounded-sm px-5 py-3 rounded-[10px] bg-[#03A9F4] text-white font-bold transition-all hover:scale-105 focus:scale-105">
                Sponser Events
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mxs:mt-2 mxs:mx-1 mt-12 mx-5 flex grid grid-cols-2">
        <div className="mxs:ml-1 mxs:pt-2 ml-7 flex flex-col pt-12">
          <p className="font-bold leading-[1.3] mxs:text-16px text-48px">
            Where <span className="text-[#ff9700]">makers</span>,{" "}
            <span className="text-[#03a9f4]">developers</span>, and{" "}
            <span className="text-[#4cb050]">technologists</span> call home.
          </p>
          <p className="mxs:text-12px mxs:mt-1 text-24px mt-7">
            The Dynamics is a global network of makers, developers, and technologists where
            enthusiastic minds connect, build, share, and launch.
          </p>
          <div className="flex items-center mxs:space-x-1 mxs:mt-1 space-x-5 mxs:text-10px text-24px mt-8">
            <Link href="/signup">
              <button className="mxs:px-1 mxs:py-0.5 mxs:rounded-sm px-5 py-3 rounded-[10px] bg-[#03A9F4] text-white font-bold transition-all hover:scale-105 focus:scale-105">
                Become a Member
              </button>
            </Link>
            <Link href="#">
              <button className="mxs:px-1 mxs:py-0.5 mxs:rounded-sm flex items-center px-5 py-3 rounded-[10px] border border-[#03A9F4] text-[#03A9F4] bg-white font-bold transition-all hover:scale-105 focus:scale-105">
                Join our Discord&nbsp;&nbsp;
                <Discord fill={"#03A9F4"} />
              </button>
            </Link>
          </div>
          <p className="mxs:mt-1 flex items-center font-semibold mxs:text-[8px] text-20px text-[#7D7D7D] mt-5">
            Already a member?&nbsp;
            <Link href="/login">
              <span className="text-[#3B4FE4] flex items-center cursor-pointer">
                Login&nbsp;
                <svg
                  className="mxs:h-[6px] mxs:w-[12px] mt-0.5"
                  width="25"
                  height="12"
                  viewBox="0 0 25 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.8082 11.5386V7.96917H0V3.88978H17.8082V0.320312L25 5.92947L17.8082 11.5386Z"
                    fill="#3B4FE4"
                  />
                </svg>
              </span>
            </Link>
          </p>
        </div>
        <div className="">
          <Image src={landing} alt="landing" />
        </div>
      </div>
      <div className="mxs:mt-1 mt-8 mb-4 flex flex-col">
        <p className="text-center mxs:text-[8px] text-18px font-bold text-[#A5A5A5]">WORKED WITH</p>
        <div className="mxs:mx-[10px] mx-[140px] flex items-center justify-between">
          <Image src={aws} alt="aws" />
          <Image src={digitalocean} alt="digitalocean" />
          <Image src={jetbrains} alt="jetbrains" />
          <Image src={sketch} alt="sketch" />
          <Image src={linode} alt="linode" />
          <Image src={wolfram} alt="wolfram" />
          <Image src={replit} alt="replit" />
          <Image src={stellar} alt="stellar" />
        </div>
      </div>
    </div>
  );
}
