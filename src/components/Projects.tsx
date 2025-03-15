"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import FigmaIcon from "@assets/figmaIcon.svg";
import ShareLink from "@assets/LinkIcon.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

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

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  const [imagesLoaded, setImagesLoaded] = useState<LoadedImagesState>({});
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://patoski.riafly.com/v1/projects/");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (isMounted) {
          setProjectsData(data);
        }
      } catch (error) {
        console.error("Error fetching projects: ", error);
        setError("Failed to fetch projects. Please try again later.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleImageLoaded = (id: string): void => {
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

        {projectsData.slice(0, 3).map((project, index) => {
          const isEven = index % 2 === 0;
          const alignment = isEven ? "right" : "left";
          const isLoaded = imagesLoaded[project.id];

          return (
            <div className=" hidden md:block " key={index} data-aos="fade-up">
              <div
                className={`relative ${alignment === "left" ? "flex items-center justify-end" : ""
                  }`}
              >
                <div className="relative max-w-[820px] h-[414px] w-full  rounded overflow-hidden">
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
                      src={`${project.image}`}
                      alt={`${project.name} preview`}
                      fill
                      style={{ objectFit: "cover" }}
                      className={`opacity-60 transition-opacity duration-300 ${isLoaded ? "opacity-60" : "opacity-0"
                        }`}
                      onLoadingComplete={() => handleImageLoaded(project.id)}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div
                  className={`absolute top-1/2 ${alignment === "left"
                    ? "left-5 md:left-10 md:right-auto text-start"
                    : "left-1/2 md:left-auto md:right-10 text-start md:text-end"
                    } w-full max-w-[461px] space-y-[16px] 
          transform ${alignment === "left"
                      ? "-translate-y-1/2 md:translate-y-0"
                      : "-translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0"
                    } md:top-20`}
                >
                  <p className="font-ClashDisplaySemiBold text-[24px] text-[#E7E8EA]">
                    {project.name}
                  </p>
                  <div
                    className="px-[16px] md:px-[26px] py-[16px] md:py-[21px] 
            md:bg-[#172A45] rounded-[8px]"
                  >
                    <p className="font-ClashDisplay text-[16px] text-[#E7E8EA] text-justify">
                      {project.description.length > 200
                        ? project.description.slice(0, 200) + "..."
                        : project.description}
                    </p>
                  </div>
                  <div
                    className={`flex items-center ${alignment === "left"
                      ? "justify-start"
                      : "justify-start md:justify-end"
                      } gap-[16px]`}
                  >
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

        <div className="grid gap-[20px] place-items-center md:hidden">
          {projectsData.slice(0, 3).map((project, index) => {
            const isLoaded = imagesLoaded[project.id];

            return (
              <div className="" key={index}>
                <div className="  max-w-[361px] sm:max-w-full sm:w-full bg-[#172A45] p-[12px] rounded-[16px] space-y-[16px] md:hidden">
                  <div className="relative h-[228px] w-full  rounded overflow-hidden">
                    {!project.image && (
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
                      <div className=" ">
                        <Image
                          src={`${project.image}`}
                          alt={`${project.name} preview`}
                          layout="fill"
                          objectFit="cover"
                          className={`opacity-60 transition-opacity duration-300 ${isLoaded ? "opacity-60" : "opacity-0"
                            }`}
                          onLoadingComplete={() =>
                            handleImageLoaded(project.id)
                          }
                        />
                      </div>
                    )}
                  </div>
                  <div className=" space-y-[16px]">
                    <p className="font-ClashDisplaySemiBold text-[24px] text-[#E7E8EA]">
                      {project.name}
                    </p>
                    <p className="font-ClashDisplay text-[16px] text-[#E7E8EA] text-justify">
                      {project.description.length > 200
                        ? project.description.substring(0, 200) + "..."
                        : project.description}
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

      {projectsData.length !== 0 && (
        <Link href="/works">
          <p className=" animate-pulse max-w-[120px] mx-auto mt-[32px] font-ClashDisplaySemiBold text-[#64FFDA] text-[16px] rounded-[8px] p-[12px] border border-[#64FFDA] flex items-center justify-center">
            See More
          </p>
        </Link>
      )}
    </div>
  );
};

export default Projects;
