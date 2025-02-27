"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Image1 from "@assets/howitworks1.svg";
import Image2 from "@assets/howitworks2.svg";
import Image3 from "@assets/howitworks3.svg";

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  return (
    <div
      className="my-[50px] space-y-[32px] max-w-6xl mx-[10px] md:mx-auto"
      id="howitworks"
    >
      <div className="max-w-[455px] mx-auto text-center" data-aos="fade-up">
        <p className="font-ClashDisplay text-[20px] text-[#9B0000]">
          How it works
        </p>
        <p className="font-ClashDisplaySemiBold text-[24px] lg:text-[40px] text-[#101010]">
          Simple & Seamless Process
        </p>
      </div>

      <div className="space-y-[32px]">
        <div className="grid lg:grid-cols-2">
          <div></div>
          <div
            className="space-y-[24px] max-w-[630px] w-full"
            data-aos="fade-up"
          >
            <p className="text-[32px] lg:text-[56px] text-[#9B0000] font-ClashDisplaySemiBold">
              01
            </p>
            <p className="font-ClashDisplaySemiBold text-[#48484A] text-[24px] lg:text-[40px]">
              Download & Sign Up
            </p>
            <p className="font-ClashDisplay text-[#48484A] text-[16px]">
              Get the Work&Shop app from the App Store or Google Play. Create an
              account to start exploring services and shops.
            </p>
            <Image src={Image1} alt="Download & Sign Up" data-aos="zoom-in" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2">
          <div
            className="space-y-[24px] max-w-[630px] w-full"
            data-aos="fade-up"
          >
            <p className="text-[32px] lg:text-[56px] text-[#9B0000] font-ClashDisplaySemiBold">
              02
            </p>
            <p className="font-ClashDisplaySemiBold text-[#48484A] text-[24px] lg:text-[40px]">
              Find & Hire or Shop
            </p>
            <p className="font-ClashDisplay text-[#48484A] text-[16px]">
              Browse skilled professionals for services or purchase tools and
              supplies from verified vendors.
            </p>
            <Image src={Image2} alt="Find & Hire or Shop" data-aos="zoom-in" />
          </div>
          <div></div>
        </div>

        <div className="grid lg:grid-cols-2">
          <div></div>
          <div
            className="space-y-[24px] max-w-[630px] w-full ml-auto"
            data-aos="fade-up"
          >
            <p className="text-[32px] lg:text-[56px] text-[#9B0000] font-ClashDisplaySemiBold">
              03
            </p>
            <p className="font-ClashDisplaySemiBold text-[#48484A] text-[24px] lg:text-[40px]">
              Pay Securely & Get the Job Done
            </p>
            <p className="font-ClashDisplay text-[#48484A] text-[16px]">
              Make safe payments within the app and enjoy seamless service
              delivery or product purchases.
            </p>
            <Image
              src={Image3}
              alt="Pay Securely"
              data-aos="zoom-in"
              data-aos-delay="200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
