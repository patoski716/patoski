"use client";

import React from "react";
import Bg from "@assets/gestartBg.svg";
import AppIcon from "@assets/Frame 26.svg";
import PlayIcon from "@assets/Frame 27.svg";
import Mockup2 from "@assets/mockupgetstarted.svg";
import Image from "next/image";

const GetStarted = () => {
  return (
    <div
      className="my-[50px] h-auto bg-cover bg-center "
      style={{ backgroundImage: `url(${Bg.src})` }}
    >
      <div className="max-w-6xl mx-auto px-[10px] pt-[50px] lg:pt-0 grid md:grid-cols-2 items-center">
        <div className="space-y-4 text-white">
          <p className="font-ClashDisplaySemiBold text-[24px] md:text-[40px]">
            Ready to get started?
          </p>
          <p className="font-ClashDisplay text-[16px] leading-[24px]">
            Download Work&Shop today and connect with skilled professionals or
            shop for essential tools—all in one place! 🚀
          </p>

          <div className="flex gap-4 items-center">
            <Image src={AppIcon} alt="App Store Icon" />
            <Image src={PlayIcon} alt="Play Store Icon" />
          </div>
        </div>

        <div className="flex justify-center">
          <Image src={Mockup2} alt="Mockup" className="w-full max-w-[600px]" />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
