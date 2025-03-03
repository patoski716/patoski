"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Logo from "@assets/patrickLogo.svg";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NAV_ITEMS = [
  { id: "about", label: "About", number: "01." },
  { id: "projects", label: "Projects", number: "02." },
  { id: "contact", label: "Contact", number: "03." },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const getSectionFromPath = (path: string) => {
      if (path === "/resume") return "resume";
      if (path === "/") return "about";

      const hash = path.split("#")[1];
      return hash || "";
    };

    setActiveSection(getSectionFromPath(pathname));
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const currentSection = NAV_ITEMS.find(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          return top <= 100 && bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        window.history.replaceState(null, "", `/#${currentSection.id}`);
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleSmoothScroll = (targetId: string) => {
    if (pathname !== "/") {
      router.push(`/#${targetId}`);
      sessionStorage.setItem("scrollTarget", targetId);
      return;
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.history.pushState(null, "", `/#${targetId}`);
      setActiveSection(targetId);
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    if (pathname !== "/") return;

    const scrollTarget = sessionStorage.getItem("scrollTarget");
    if (scrollTarget) {
      setTimeout(() => {
        const element = document.getElementById(scrollTarget);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          setActiveSection(scrollTarget);
        }
        sessionStorage.removeItem("scrollTarget");
      }, 100);
    }
  }, [pathname]);

  const getNavItemClasses = (section: string) =>
    `cursor-pointer ${
      activeSection === section ? "text-[#64FFDA]" : "text-[#E7E8EA]"
    }`;

  const navItems =
    pathname === "/"
      ? NAV_ITEMS
      : [{ id: "about", label: "Home", number: "00." }];

  return (
    <div className="w-full sticky top-0 z-50 bg-[#0A192F]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center md:justify-between items-center py-5 px-4 lg:px-8">
          <Link href="/">
            <Image
              src={Logo}
              alt="logo"
              className="max-w-[50px] sm:max-w-[80px] w-full"
            />
          </Link>

          <div className="hidden lg:block">
            <ul className="text-[16px] text-[#E7E8EA] list-none font-ClashDisplaySemiBold flex items-center gap-6">
              {navItems.map(({ id, label, number }) => (
                <li
                  key={id}
                  className={getNavItemClasses(id)}
                  onClick={() => handleSmoothScroll(id)}
                  role="button"
                  tabIndex={0}
                >
                  <span className="font-ClashDisplaySemiBold text-[#64FFDA]">
                    {number}
                  </span>{" "}
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {activeSection !== "resume" && (
            <Link href="/resume">
              <button className="hidden md:block px-4 sm:px-8 py-3 text-[16px] font-ClashDisplaySemiBold border border-[#64FFDA] rounded-[8px] text-[#64FFDA]">
                View my resume
              </button>
            </Link>
          )}

          <div className="fixed right-0 bottom-0 w-full lg:hidden border-t bg-[#0A192F] border-[#E7E8EA] z-50">
            <ul className="text-[12px] text-[#48484A] list-none font-ClashDisplaySemiBold flex items-center justify-between px-4 py-2">
              {navItems.map(({ id, label }) => (
                <li
                  key={id}
                  className={`flex flex-col items-center gap-1 justify-center cursor-pointer ${
                    activeSection === id ? "text-[#64FFDA]" : "text-[#E7E8EA]"
                  }`}
                  onClick={() => handleSmoothScroll(id)}
                  role="button"
                  tabIndex={0}
                >
                  <Image
                    src={`/assets/${id}.svg`}
                    alt={label}
                    width={20}
                    height={20}
                  />
                  <span>{label}</span>
                </li>
              ))}
              {activeSection !== "resume" && (
                <Link href="/resume">
                  <li className="flex flex-col items-center gap-1 justify-center text-[#E7E8EA] cursor-pointer">
                    <Image
                      src="/assets/document-text.svg"
                      alt="Resume"
                      width={24}
                      height={24}
                    />
                    <span>Resume</span>
                  </li>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
