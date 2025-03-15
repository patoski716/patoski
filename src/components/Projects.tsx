"use client";
import React, { useState, useEffect, useRef } from "react";
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

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  const [imagesLoaded, setImagesLoaded] = useState<LoadedImagesState>({});
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://patoski.riafly.com/v1/projects/"
        );
        if (isMountedRef.current) {
          setProjectsData(response.data);
        }
      } catch (error) {
        console.error("Error fetching projects: ", error);
        if (isMountedRef.current) {
          setError("Failed to fetch projects. Please try again later.");
        }
      } finally {
        if (isMountedRef.current) setLoading(false);
      }
    };

    fetchProjects();

    return () => {
      isMountedRef.current = false;
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
      className="max-w-7xl px-5 mx-auto my-8 lg:my-16 space-y-8"
    >
      <div className="space-y-8">
        <div className="flex items-center gap-5">
          <p className="font-ClashDisplaySemiBold text-[#E7E8EA] text-xl md:text-4xl flex items-center gap-2">
            <span className="text-[#64FFDA] text-base text-center">02</span>
            Projects
          </p>
          <p className="w-full max-w-[219px] border border-[#E7E8EA]"></p>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#64FFDA]"></div>
          </div>
        )}

        {error && (
          <div className="text-red-500 bg-red-100 p-4 rounded text-center">
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="hidden md:block space-y-20">
              {projectsData.slice(0, 3).map((project, index) => {
                const isEven = index % 2 === 0;
                const alignment = isEven ? "right" : "left";
                const isLoaded = imagesLoaded[project.id];

                return (
                  <div key={project.id} data-aos="fade-up">
                    <div
                      className={`relative ${
                        alignment === "left"
                          ? "flex items-center justify-end"
                          : ""
                      }`}
                    >
                      <div className="relative max-w-[820px] h-[414px] w-full rounded overflow-hidden">
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
                            alt={`${project.name} preview`}
                            fill
                            style={{ objectFit: "cover" }}
                            className={`transition-opacity duration-300 ${
                              isLoaded ? "opacity-60" : "opacity-0"
                            }`}
                            onLoadingComplete={() =>
                              handleImageLoaded(project.id)
                            }
                          />
                        )}
                        <div className="absolute inset-0 bg-black/40"></div>
                      </div>

                      <div
                        className={`absolute top-1/2 ${
                          alignment === "left"
                            ? "left-5 md:left-10 md:right-auto text-start"
                            : "left-1/2 md:left-auto md:right-10 text-start md:text-end"
                        } w-full max-w-[461px] space-y-4 
                transform ${
                  alignment === "left"
                    ? "-translate-y-1/2 md:translate-y-0"
                    : "-translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0"
                } md:top-20`}
                      >
                        <p className="font-ClashDisplaySemiBold text-2xl text-[#E7E8EA]">
                          {project.name}
                        </p>
                        <div className="px-4 md:px-6 py-4 md:py-5 md:bg-[#172A45] rounded-lg">
                          <p className="font-ClashDisplay text-base text-[#E7E8EA] text-justify">
                            {project.description.length > 200
                              ? project.description.slice(0, 200) + "..."
                              : project.description}
                          </p>
                        </div>
                        <div
                          className={`flex items-center ${
                            alignment === "left"
                              ? "justify-start"
                              : "justify-start md:justify-end"
                          } gap-4`}
                        >
                          {project.app_link && (
                            <Link
                              href={project.app_link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image src={ShareLink} alt="share-icon" />
                            </Link>
                          )}
                          {project.figma_link && (
                            <Link
                              href={project.figma_link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
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

            <div className="grid gap-5 place-items-center md:hidden">
              {projectsData.slice(0, 3).map((project) => {
                const isLoaded = imagesLoaded[project.id];

                return (
                  <div key={project.id} className="w-full max-w-sm">
                    <div className="bg-[#172A45] p-3 rounded-2xl space-y-4">
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
                          <Image
                            src={project.image}
                            alt={`${project.name} preview`}
                            fill
                            style={{ objectFit: "cover" }}
                            className={`transition-opacity duration-300 ${
                              isLoaded ? "opacity-60" : "opacity-0"
                            }`}
                            onLoadingComplete={() =>
                              handleImageLoaded(project.id)
                            }
                          />
                        )}
                      </div>
                      <div className="space-y-4">
                        <p className="font-ClashDisplaySemiBold text-2xl text-[#E7E8EA]">
                          {project.name}
                        </p>
                        <p className="font-ClashDisplay text-base text-[#E7E8EA] text-justify">
                          {project.description.length > 200
                            ? project.description.substring(0, 200) + "..."
                            : project.description}
                        </p>
                        <div className="flex items-center gap-4">
                          {project.app_link && (
                            <Link
                              href={project.app_link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image src={ShareLink} alt="share-icon" />
                            </Link>
                          )}
                          {project.figma_link && (
                            <Link
                              href={project.figma_link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
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
          </>
        )}
      </div>

      {!loading && !error && projectsData.length > 0 && (
        <Link href="/works">
          <p className="animate-pulse max-w-[120px] mx-auto mt-8 font-ClashDisplaySemiBold text-[#64FFDA] text-base rounded-lg p-3 border border-[#64FFDA] flex items-center justify-center">
            See More
          </p>
        </Link>
      )}
    </div>
  );
};

export default Projects;
