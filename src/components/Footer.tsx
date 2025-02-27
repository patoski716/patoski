"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);
  return (
    <div className="hidden lg:block mb-[50px] mt-[150px] " data-aos="fade-up">
      <p className=" text-center text-[16px] text-[400] text-[#E7E8EA] font-ClashDisplay">
        © 2025 Patrick Chimezie Chukwudifu. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
