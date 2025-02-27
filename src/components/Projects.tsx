import React from "react";
import Image from "next/image";
import FigmaIcon from "@assets/figmaIcon.svg";
import ShareLink from "@assets/LinkIcon.svg";

const Projects = () => {
  return (
    <div className="max-w-7xl mx-[10px] md:mx-auto my-[30px] lg:my-[64px] space-y-[32px]">
      <div className="relative">
        <div className="relative max-w-[820px] h-[414px] w-full bg-slate-50 rounded overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div
          className="absolute top-1/2 left-1/2 w-full max-w-[461px] space-y-[16px] 
                        transform -translate-x-1/2 -translate-y-1/2 text-start
                        md:top-20 md:right-10 md:left-auto md:translate-x-0 md:translate-y-0
                        md:text-end"
        >
          <p className="font-ClashDisplaySemiBold text-[24px] text-[#E7E8EA]">
            A Real Estate Website
          </p>
          <div
            className="px-[16px] md:px-[26px] py-[16px] md:py-[21px] 
                          md:bg-[#172A45] rounded-[8px]"
          >
            <p className="font-ClashDisplay text-[16px] text-[#E7E8EA] text-justify">
              Leptons Multiconcept Limited is a forward-thinking real estate
              development company dedicated to delivering comfort, value, and
              optimization in every project. We specialize in creating
              innovative properties tailored to modern lifestyles, ensuring
              quality, affordability, and sustainable living for our clients.
            </p>
          </div>
          <div className="flex items-center justify-start md:justify-end gap-[16px]">
            <Image src={ShareLink} alt="share-icon" />
            <Image src={FigmaIcon} alt="figma-icon" />
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="relative max-w-[820px] h-[414px] w-full bg-slate-50 rounded overflow-hidden flex justify-end">
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div
          className="absolute top-1/2 left-5 w-full max-w-[461px] space-y-[16px] 
               transform -translate-y-1/2 text-start 
               md:top-20 md:left-10 md:right-auto md:translate-y-0"
        >
          <p className="font-ClashDisplaySemiBold text-[24px] text-[#E7E8EA]">
            A Real Estate Website
          </p>
          <div
            className="px-[16px] md:px-[26px] py-[16px] md:py-[21px] 
                 md:bg-[#172A45] rounded-[8px]"
          >
            <p className="font-ClashDisplay text-[16px] text-[#E7E8EA] text-justify">
              Leptons Multiconcept Limited is a forward-thinking real estate
              development company dedicated to delivering comfort, value, and
              optimization in every project. We specialize in creating
              innovative properties tailored to modern lifestyles, ensuring
              quality, affordability, and sustainable living for our clients.
            </p>
          </div>
          <div className="flex items-center justify-start gap-[16px]">
            <Image src={ShareLink} alt="share-icon" />
            <Image src={FigmaIcon} alt="figma-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
