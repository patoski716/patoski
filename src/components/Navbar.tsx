"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useModal } from "./ModalContext";
import ContactPage from "./ContactPage";
import SIgnUpPage from "./SIgnUpPage";
import Logo from "@assets/patrickLogo.svg";

const Navbar = () => {
  const { openModal } = useModal();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "features", "faq", "howitworks"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLLIElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setActiveSection(targetId);
    setTimeout(() => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };

  // const getNavItemClasses = () => {
  //   return `p-[8px] cursor-pointer text-[#E7E8EA] `;
  // };

  const getMobileNavItemClasses = (section: string) => {
    return `flex flex-col items-center gap-[6px] justify-center cursor-pointer ${
      activeSection === section ? "text-[#64FFDA]" : "text-[#E7E8EA]"
    }`;
  };

  return (
    <div className="max-w-7xl mx-[10px] md:mx-auto">
      <div className="sticky top-0 z-50  flex justify-center md:justify-between items-center py-[20px] px-4 lg:px-8">
        <Image
          src={Logo}
          alt="logo"
          className="max-w-[50px] sm:max-w-[80px] w-full"
        />

        <div className="hidden lg:block">
          <ul className="text-[16px] text-[#E7E8EA] list-none font-ClashDisplaySemiBold flex items-center gap-[24px]">
            <li onClick={(e) => handleSmoothScroll(e, "home")}>
              <span className=" font-ClashDisplaySemiBold text-[#64FFDA]">
                01.
              </span>{" "}
              About
            </li>
            <li onClick={(e) => handleSmoothScroll(e, "features")}>
              <span className=" font-ClashDisplaySemiBold text-[#64FFDA]">
                02.
              </span>{" "}
              Projects
            </li>
            <li onClick={(e) => handleSmoothScroll(e, "faq")}>
              <span className=" font-ClashDisplaySemiBold text-[#64FFDA]">
                03.
              </span>{" "}
              Contact
            </li>
          </ul>
        </div>

        <button
          className="hidden md:block px-[16px] sm:px-[32px] py-[12px] text-[16px] font-ClashDisplaySemiBold border border-[#64FFDA] rounded-[8px] text-[#64FFDA]"
          onClick={() => openModal(<SIgnUpPage />)}
        >
          View my resume
        </button>

        <div className="fixed right-0 bottom-0 w-full lg:hidden border-t bg-[#0A192F] border-[#E7E8EA]">
          <ul className="text-[12px] !text-[#48484A] list-none font-ClashDisplaySemiBold flex items-center justify-between px-4 py-2">
            <li
              className={getMobileNavItemClasses("home")}
              onClick={(e) => handleSmoothScroll(e, "home")}
            >
              <Image
                src="/assets/home-01.svg"
                alt="Home"
                width={20}
                height={20}
              />
              <span>About</span>
            </li>
            <li
              className={getMobileNavItemClasses("features")}
              onClick={(e) => handleSmoothScroll(e, "features")}
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
              onClick={() => openModal(<ContactPage />)}
            >
              <Image
                src="/assets/call-calling_.svg"
                alt="Contact"
                width={24}
                height={24}
              />
              <span>Contact</span>
            </li>
            <li
              className={getMobileNavItemClasses("faq")}
              onClick={(e) => handleSmoothScroll(e, "faq")}
            >
              <Image
                src="/assets/document-text.svg"
                alt="FAQ"
                width={24}
                height={24}
              />
              <span>Resume</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
