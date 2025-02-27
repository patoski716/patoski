"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Patrick from "@assets/patrick.png";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  return (
    <div
      className="max-w-7xl mx-[10px] md:mx-auto mt-[30px] md:mt-[64px]"
      id="home"
    >
      <div className=" grid md:flex items-center md:justify-between">
        <div className="max-w-[800px] space-y-[16px]">
          <p className="text-[20px] font-ClashDisplay text-[#64FFDA]">
            👋 Hi, my name is
          </p>
          <p className="font-ClashDisplayBold text-[24px] md:text-[40px] text-[#E7E8EA]">
            I&apos;m Patrick Chimezie Chukwudifu
          </p>
          <p className="font-ClashDisplayBold text-[32px] md:text-[40px] text-[#E7E8EA]">
            <Typewriter
              words={[
                "A Product Designer 🚀",
                "A UX/UI Specialist 🎨",
                "A Project Manager 💡",
                "A Problem Solver 🔍",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>
          <p className="font-ClashDisplay text-[16px] text-[#E7E8EA] text-justify">
            I specialize in creating intuitive, user-friendly, and scalable
            digital experiences. With a strong background in UX/UI design and
            product strategy, I bridge the gap between design, development, and
            business goals to build impactful products. Passionate about
            problem-solving, I leverage modern tools like Jira, Trello, Figma,
            Slack, and more to drive collaboration and efficiency.
          </p>
        </div>
        <div className="">
          <Image src={Patrick} alt="Patrick Chimezie Chukwudifu" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
