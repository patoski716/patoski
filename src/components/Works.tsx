"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import FigmaIcon from "@assets/figmaIcon.svg";
import ShareLink from "@assets/LinkIcon.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import axios from "axios";
interface Project {
  id: string;
  name: string;
  description: string;
  image?: string;
  figma_link?: string;
  app_link?: string;
}

interface LoadedImagesState {
  [key: string]: boolean;
}

const Works = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  const [imagesLoaded, setImagesLoaded] = useState<LoadedImagesState>({});
  const [projectsData, setProjectsData] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://patoski.riafly.com/v1/projects/"
        );
        setProjectsData(response.data);
      } catch (error) {
        console.error("Error fetching projects: ", error);
      }
    };

    fetchProjects();
  }, []);

  const handleImageLoaded = (id: string): void => {
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

        <div className=" grid gap-[20px] md:grid-cols-3 place-items-center items-start ">
          {projectsData.map((project, index) => {
            const isLoaded = imagesLoaded[project.id];

            return (
              <div className="" key={index} data-aos="fade-up">
                <div className=" group  max-w-[401px] h-[500px] bg-[#172A45] p-[12px] rounded-[16px] space-y-[16px]">
                  <div className="relative h-[228px] w-full rounded overflow-hidden">
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
                      <div className="">
                        <Image
                          src={`${project.image}`}
                          alt={`${project.name} preview`}
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
                  </div>
                  <div className=" space-y-[16px]">
                    <p className="font-ClashDisplaySemiBold text-[24px] text-[#E7E8EA]">
                      {project.name}
                    </p>
                    <p className="font-ClashDisplay text-[16px] text-[#E7E8EA] text-justify h-[120px] overflow-auto no-scrollbar">
                      {project.description}
                    </p>
                    <div className={`flex items-center gap-[16px]`}>
                      {project.app_link && (
                        <Link href={project.app_link} target="blank">
                          <Image src={ShareLink} alt="share-icon" />
                        </Link>
                      )}
                      {project.figma_link && (
                        <Link href={project.figma_link} target="blank">
                          <Image src={FigmaIcon} alt="figma-icon" />
                        </Link>
                      )}
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
