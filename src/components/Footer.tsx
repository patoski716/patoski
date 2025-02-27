"use client";

import React from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import FooterIcon from "@assets/FooterIcon.svg";
import WorkLogo from "@assets/Work&ShopFooterLogo.svg";
import Twitter from "@assets/TwitterIcon.svg";
import Facebook from "@assets/FacebookIcon.svg";
import LinkedIn from "@assets/LinkedIn.svg";
import Button from "@assets/Button.svg";
import Link from "next/link";

interface FormData {
  email: string;
}

const Footer = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Subscribed Email:", data.email);
    reset();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="hidden lg:block mt-[50px] bg-[#580000] h-[436px] relative text-white p-6">
      <div
        className="absolute -top-[25px] left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToTop}
      >
        <Image src={FooterIcon} alt="Footer Icon" />
      </div>

      <div className="mt-[50px] text-center flex items-start justify-center">
        <div className="space-y-[26px]">
          <ul className="flex justify-center items-center gap-6 text-[16px] font-ClashDisplaySemiBold">
            {[
              { name: "Home", id: "#home" },
              { name: "Features", id: "#features" },
              { name: "FAQ", id: "#faq" },
              { name: "How it works", id: "#howitworks" },
              { name: "Privacy policy", id: "#privacypolicy" },
            ].map((item, index) => (
              <li key={index} className="cursor-pointer hover:underline">
                <a href={item.id}>{item.name}</a>
              </li>
            ))}
          </ul>

          <p className="font-ClashDisplay max-w-[466px] mx-auto text-[16px] leading-[24px]">
            Work&Shop connects users with skilled professionals, artisans, and
            businesses while offering a marketplace for essential tools and
            supplies—all in one seamless app.
          </p>

          <div className="flex justify-center items-center gap-4">
            <Link
              href="http://linkedin.com/showcase/workandshopapp"
              target="blank"
            >
              <Image src={LinkedIn} alt="LinkedIn" />
            </Link>

            <Link
              href="https://www.facebook.com/share/19Wtwusa3Q/?mibextid=wwXIfr"
              target="blank"
            >
              <Image src={Facebook} alt="Facebook" />
            </Link>
            <Link href="http://x.com/workandshopapp" target="blank">
              <Image src={Twitter} alt="Twitter" />
            </Link>
          </div>
        </div>

        <div className="max-w-[315px] w-full space-y-[18px] text-start hidden">
          <p className="text-[16px] font-ClashDisplay">
            Subscribe to our newsletter
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative max-w-[315px] mx-auto"
          >
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Enter email address"
              className="placeholder:font-ClashDisplay w-full rounded-full py-[20px] px-4 text-black outline-none"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              <Image src={Button} alt="Subscribe Button" />
            </button>
          </form>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full flex justify-center items-center ">
        <Image src={WorkLogo} alt="Work & Shop Logo" />
      </div>
    </div>
  );
};

export default Footer;
