"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import FigmaIcon from "@assets/figmaIcon.svg";
import ShareLink from "@assets/LinkIcon.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
}

interface LoadedImagesState {
  [key: number]: boolean;
}

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  const [imagesLoaded, setImagesLoaded] = useState<LoadedImagesState>({});

  const projectsData: Project[] = [
    {
      id: 1,
      title: "A Real Estate Website",
      description:
        "Leptons Multiconcept Limited is a forward-thinking real estate development company dedicated to delivering comfort, value, and optimization in every project. We specialize in creating innovative properties tailored to modern lifestyles, ensuring quality, affordability, and sustainable living for our clients.",
      image: "",
    },
    {
      id: 2,
      title: "A Real Estate Website",
      description:
        "Leptons Multiconcept Limited is a forward-thinking real estate development company dedicated to delivering comfort, value, and optimization in every project. We specialize in creating innovative properties tailored to modern lifestyles, ensuring quality, affordability, and sustainable living for our clients.",
      image: "",
    },
    {
      id: 3,
      title: "A Real Estate Website",
      description:
        "Leptons Multiconcept Limited is a forward-thinking real estate development company dedicated to delivering comfort, value, and optimization in every project. We specialize in creating innovative properties tailored to modern lifestyles, ensuring quality, affordability, and sustainable living for our clients.",
      image: "",
    },
  ];

  const handleImageLoaded = (id: number): void => {
    setImagesLoaded((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  return (
    <div
      id="projects"
      data-aos="fade-up"
      className="max-w-7xl px-[20px] mx-auto my-[30px] lg:my-[64px] space-y-[32px]"
    >
      <div className="space-y-8">
        <div className="flex items-center gap-5">
          <p className="font-ClashDisplaySemiBold text-[#E7E8EA] text-[20px] md:text-[40px] flex items-center gap-2">
            <span className="text-[#64FFDA] text-[16px] text-center">02</span>
            Projects
          </p>
          <p className="w-full max-w-[219px] border border-[#E7E8EA]"></p>
        </div>

        {projectsData.map((project, index) => {
          const isEven = index % 2 === 0;
          const alignment = isEven ? "right" : "left";
          const isLoaded = imagesLoaded[project.id];

          return (
            <div
              className=" hidden md:block "
              key={project.id}
              data-aos="fade-up"
            >
              <div
                className={`relative ${
                  alignment === "left" ? "flex items-center justify-end" : ""
                }`}
              >
                <div className="relative max-w-[820px] h-[414px] w-full bg-slate-50 rounded overflow-hidden">
                  {(!project.image || !isLoaded) && (
                    <div className="absolute inset-0 bg-gray-300 animate-pulse">
                      <div className="h-full w-full flex items-center justify-center">
                        <svg
                          className="w-12 h-12 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 640 512"
                        >
                          <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {project.image && (
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      layout="fill"
                      objectFit="cover"
                      className={`opacity-60 transition-opacity duration-300 ${
                        isLoaded ? "opacity-60" : "opacity-0"
                      }`}
                      onLoadingComplete={() => handleImageLoaded(project.id)}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div
                  className={`absolute top-1/2 ${
                    alignment === "left"
                      ? "left-5 md:left-10 md:right-auto text-start"
                      : "left-1/2 md:left-auto md:right-10 text-start md:text-end"
                  } w-full max-w-[461px] space-y-[16px] 
                transform ${
                  alignment === "left"
                    ? "-translate-y-1/2 md:translate-y-0"
                    : "-translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0"
                } md:top-20`}
                >
                  <p className="font-ClashDisplaySemiBold text-[24px] text-[#E7E8EA]">
                    {project.title}
                  </p>
                  <div
                    className="px-[16px] md:px-[26px] py-[16px] md:py-[21px] 
                  md:bg-[#172A45] rounded-[8px]"
                  >
                    <p className="font-ClashDisplay text-[16px] text-[#E7E8EA] text-justify">
                      {project.description}
                    </p>
                  </div>
                  <div
                    className={`flex items-center ${
                      alignment === "left"
                        ? "justify-start"
                        : "justify-start md:justify-end"
                    } gap-[16px]`}
                  >
                    <Image src={ShareLink} alt="share-icon" />
                    <Image src={FigmaIcon} alt="figma-icon" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {projectsData.map((project, index) => {
          const isLoaded = imagesLoaded[project.id];

          return (
            <div className="" key={index}>
              <div className="  max-w-[361px] bg-[#172A45] p-[12px] rounded-[16px] space-y-[16px] md:hidden">
                <div className="relative h-[228px] w-full bg-slate-50 rounded overflow-hidden">
                  {(!project.image || !isLoaded) && (
                    <div className="absolute inset-0 bg-gray-300 animate-pulse">
                      <div className="h-full w-full flex items-center justify-center">
                        <svg
                          className="w-12 h-12 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 640 512"
                        >
                          <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {project.image && (
                    <div className=" relative">
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        layout="fill"
                        objectFit="cover"
                        className={`opacity-60 transition-opacity duration-300 ${
                          isLoaded ? "opacity-60" : "opacity-0"
                        }`}
                        onLoadingComplete={() => handleImageLoaded(project.id)}
                      />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/40"></div>
                  {/* <div className="group-hover:block hidden transition-all duration-500">
                    <p className="  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 font-ClashDisplaySemiBold text-[#64FFDA] text-[16px] rounded-[8px] p-[12px] border border-[#64FFDA] flex items-center justify-center">
                      See More
                    </p>
                  </div> */}
                </div>
                <div className=" space-y-[16px]">
                  <p className="font-ClashDisplaySemiBold text-[24px] text-[#E7E8EA]">
                    {project.title}
                  </p>
                  <p className="font-ClashDisplay text-[16px] text-[#E7E8EA] text-justify">
                    {project.description}
                  </p>
                  <div className={`flex items-center gap-[16px]`}>
                    <Image src={ShareLink} alt="share-icon" />
                    <Image src={FigmaIcon} alt="figma-icon" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Link href="/works">
        <p className=" animate-pulse max-w-[120px] mx-auto mt-[32px] font-ClashDisplaySemiBold text-[#64FFDA] text-[16px] rounded-[8px] p-[12px] border border-[#64FFDA] flex items-center justify-center">
          See More
        </p>
      </Link>
    </div>
  );
};

export default Projects;
