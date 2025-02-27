"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Logo from "@assets/patrickLogo.svg";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  const getSectionFromPath = (path: string) => {
    if (path === "/resume") return "resume";

    const hash = path.split("#")[1];
    if (hash) return hash;

    if (path === "/") return "about";

    return "";
  };

  useEffect(() => {
    const section = getSectionFromPath(pathname);
    setActiveSection(section);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const sections = ["about", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        window.history.replaceState(null, "", `/#${currentSection}`);
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleSmoothScroll = (targetId: string) => {
    if (pathname !== "/") {
      router.push(`/#${targetId}`);
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.history.pushState(null, "", `/#${targetId}`);
        setActiveSection(targetId);
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const getMobileNavItemClasses = (section: string) => {
    return `flex flex-col items-center gap-[6px] justify-center cursor-pointer ${
      activeSection === section ? "text-[#64FFDA]" : "text-[#E7E8EA]"
    }`;
  };

  const getDesktopNavItemClasses = (section: string) => {
    return `cursor-pointer ${
      activeSection === section ? "text-[#64FFDA]" : "text-[#E7E8EA]"
    }`;
  };

  return (
    <div className="max-w-7xl mx-[10px] md:mx-auto">
      <div className="sticky top-0 z-50 flex justify-center md:justify-between items-center py-[20px] px-4 lg:px-8 bg-[#0A192F]">
        <Link href="/">
          <Image
            src={Logo}
            alt="logo"
            className="max-w-[50px] sm:max-w-[80px] w-full"
          />
        </Link>

        <div className="hidden lg:block">
          <ul className="text-[16px] text-[#E7E8EA] list-none font-ClashDisplaySemiBold flex items-center gap-[24px]">
            <li
              className={getDesktopNavItemClasses("about")}
              onClick={() => handleSmoothScroll("about")}
            >
              <span className="font-ClashDisplaySemiBold text-[#64FFDA]">
                01.
              </span>{" "}
              About
            </li>
            <li
              className={getDesktopNavItemClasses("projects")}
              onClick={() => handleSmoothScroll("projects")}
            >
              <span className="font-ClashDisplaySemiBold text-[#64FFDA]">
                02.
              </span>{" "}
              Projects
            </li>
            <li
              className={getDesktopNavItemClasses("contact")}
              onClick={() => handleSmoothScroll("contact")}
            >
              <span className="font-ClashDisplaySemiBold text-[#64FFDA]">
                03.
              </span>{" "}
              Contact
            </li>
          </ul>
        </div>

        {activeSection !== "resume" && (
          <Link href="/resume">
            <button className="hidden md:block px-[16px] sm:px-[32px] py-[12px] text-[16px] font-ClashDisplaySemiBold border border-[#64FFDA] rounded-[8px] text-[#64FFDA]">
              View my resume
            </button>
          </Link>
        )}

        <div className="fixed right-0 bottom-0 w-full lg:hidden border-t bg-[#0A192F] border-[#E7E8EA]">
          <ul className="text-[12px] !text-[#48484A] list-none font-ClashDisplaySemiBold flex items-center justify-between px-4 py-2">
            <li
              className={getMobileNavItemClasses("about")}
              onClick={() => handleSmoothScroll("about")}
            >
              <Image
                src="/assets/home-01.svg"
                alt="about"
                width={20}
                height={20}
              />
              <span>About</span>
            </li>
            <li
              className={getMobileNavItemClasses("projects")}
              onClick={() => handleSmoothScroll("projects")}
            >
              <Image
                src="/assets/share.svg"
                alt="Features"
                width={24}
                height={24}
              />
              <span>Projects</span>
            </li>

            <li
              className={getMobileNavItemClasses("contact")}
              onClick={() => handleSmoothScroll("contact")}
            >
              <Image
                src="/assets/call-calling_.svg"
                alt="Contact"
                width={24}
                height={24}
              />
              <span>Contact</span>
            </li>
            <Link href="/resume">
              <li className={getMobileNavItemClasses("resume")}>
                <Image
                  src="/assets/document-text.svg"
                  alt="FAQ"
                  width={24}
                  height={24}
                />
                <span>Resume</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
