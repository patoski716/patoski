"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Mockup2 from "@assets/Mockup2.svg";
import Icon1 from "@assets/Icon(1).svg";
import Icon2 from "@assets/cube-02.svg";
import Icon3 from "@assets/cube-04.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);
  return (
    <div className="max-w-6xl mx-[10px] md:mx-auto" id="features">
      <div className=" grid lg:grid-cols-2 my-[50px] space-y-[16px]">
        <div className=" order-2 lg:order-1 max-w-[600px]" data-aos="fade-up">
          <Image src={Mockup2} alt="Mockup2" />
        </div>
        <div className="order-1 lg:order-2 space-y-[32px]" data-aos="fade-up">
          <div className=" space-y-[8px]">
            <p className=" font-ClashDisplay text-[20px] text-[#9B0000]">
              Features
            </p>
            <p className=" font-ClashDisplaySemiBold text-[24px] lg:text-[40px] text-[#101010]">
              Why Choose Work&Shop ?
            </p>
          </div>

          <div className="">
            <div className=" flex items-start gap-[8px]">
              <Image src={Icon1} alt="star-icon" />
              <p className=" font-ClashDisplaySemiBold text-[20px] text-[#101010]">
                Find Skilled Workmen with Ease
              </p>
            </div>
            <p className=" font-ClashDisplay text-[16px] text-[#48484A] text-justify">
              Explore a diverse range of verified artisans, professionals, and
              companies offering high-quality services tailored to your needs.
            </p>
          </div>

          <div className="">
            <div className=" flex items-start gap-[8px]">
              <Image src={Icon2} alt="star-icon" />
              <p className=" font-ClashDisplaySemiBold text-[20px] text-[#101010]">
                Set Up Your Business & Reach More Customers
              </p>
            </div>
            <p className=" font-ClashDisplay text-[16px] text-[#48484A] text-justify">
              Businesses and professionals can create a profile, showcase
              services, and attract potential clients effortlessly.
            </p>
          </div>
          <div className="">
            <div className=" flex items-start gap-[8px]">
              <Image src={Icon3} alt="star-icon" />
              <p className=" font-ClashDisplaySemiBold text-[20px] text-[#101010]">
                Seamless Communication & Booking
              </p>
            </div>
            <p className=" font-ClashDisplay text-[16px] text-[#48484A] text-justify">
              Chat directly with professionals, negotiate terms, and book
              services instantly—all in one platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
