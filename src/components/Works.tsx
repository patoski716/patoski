"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import FigmaIcon from "@assets/figmaIcon.svg";
import ShareLink from "@assets/LinkIcon.svg";
import AOS from "aos";
import "aos/dist/aos.css";

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
}

interface LoadedImagesState {
  [key: number]: boolean;
}

const Works = () => {
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
    <div className="max-w-7xl px-[20px] mx-auto my-[30px] lg:my-[64px] space-y-[32px] mb-[100px]">
      <div className="space-y-8">
        <div className=" space-y-[24px] text-center" data-aos="fade-up">
          <p className="font-ClashDisplaySemiBold text-[#E7E8EA] text-[20px] md:text-[40px] ">
            🚀 Explore My Work
          </p>
          <p className=" font-ClashDisplay text-[20px] text-[#E7E8EA]">
            Here are some of the projects I’ve worked on, ranging from web
            applications to interactive UI designs.
          </p>
        </div>

        <div className=" grid gap-[20px] md:grid-cols-3 place-items-center">
          {projectsData.map((project, index) => {
            const isLoaded = imagesLoaded[project.id];

            return (
              <div className="" key={index} data-aos="fade-up">
                <div className=" group  max-w-[401px] bg-[#172A45] p-[12px] rounded-[16px] space-y-[16px]">
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
                          onLoadingComplete={() =>
                            handleImageLoaded(project.id)
                          }
                        />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40"></div>
                    {/* <div className="group-hover:block hidden transition-all  duration-500">
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
      </div>
    </div>
  );
};

export default Works;
