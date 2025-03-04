"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import EmailIcon from "@assets/sms-tracking.svg";
import CallIcon from "@assets/call-calling.svg";
import GlobalIcon from "@assets/global-search.svg";
import LinkedIn from "@assets/LinkedIn.svg";
import Whatsapp from "@assets/whatsapp.svg";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  description: string;
}

const ContactPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<FormData>();
  const [charCount, setCharCount] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "description") {
        const words = value.description?.trim()
          ? value.description.trim().split(/\s+/).length
          : 0;
        setCharCount(words);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = async (data: FormData) => {
    try {
      await addDoc(collection(db, "contacts"), data);
      setSuccessMessage("Your message has been sent!");
      reset();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div
      id="contact"
      data-aos="fade-up"
      className="mt-[50px] max-w-7xl mx-auto px-[20px] mb-[100px] md:mb-0"
    >
      <div className=" space-y-8">
        <div className="flex items-center gap-5">
          <p className="font-ClashDisplaySemiBold text-[#E7E8EA] text-[20px] md:text-[40px] flex items-center gap-2">
            <span className="text-[#64FFDA] text-[16px] text-center">03</span>
            Contact me
          </p>
          <p className="w-full max-w-[166px] border border-[#E7E8EA]"></p>
        </div>

        <div className=" space-y-8 border border-[#E7E8EA] rounded-[16px] p-[10px] md:p-[42px]">
          <div className="space-y-[13px] text-center">
            {successMessage && (
              <p className="text-green-600">{successMessage}</p>
            )}

            <p className="text-[32px] lg:text-[40px] font-ClashDisplaySemiBold text-[#E7E8EA]">
              Get in touch with us
            </p>
            <p className="font-ClashDisplay text-[16px] lg:text-[20px] text-[#E7E8EA]">
              We are ready to engage all inquiries and questions
            </p>
          </div>

          <div className="grid lg:flex items-start gap-[56px] mt-[60px]">
            <div className="max-w-[400px] w-full space-y-[50px]">
              <div className="flex items-start gap-[24px]">
                <Image src={EmailIcon} alt="Email Icon" />
                <div>
                  <p className="font-ClashDisplaySemiBold text-[24px] text-[#E7E8EA]">
                    Email
                  </p>
                  <p className="font-ClashDisplay text-[16px] text-[#E7E8EA]">
                    patoski716@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-[24px]">
                <Image src={CallIcon} alt="Call Icon" />
                <div className="space-y-[16px]">
                  <p className="font-ClashDisplaySemiBold text-[24px] text-[#E7E8EA]">
                    Call
                  </p>

                  <p className="font-ClashDisplay text-[16px] text-[#E7E8EA]">
                    +2348167000077
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-[24px]">
                <Image src={GlobalIcon} alt="Global Icon" />
                <div className="space-y-[16px]">
                  <p className="font-ClashDisplaySemiBold text-[24px] text-[#E7E8EA]">
                    Find me on social media
                  </p>
                  <p className="font-ClashDisplay text-[16px] text-[#E7E8EA]">
                    Engage with me and keep your business at the forefront.
                  </p>
                  <div className="flex items-center gap-[16px]">
                    <Image src={LinkedIn} alt="LinkedIn Icon" />
                    <Image src={Whatsapp} alt="Facebook Icon" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-[700px]">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-[24px]"
              >
                <div className="grid lg:grid-cols-2 gap-[24px]">
                  <div className="space-y-[8px]">
                    <label className="block font-ClashDisplay text-[#E7E8EA] text-[16px]">
                      First name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter first name"
                      {...register("first_name", {
                        required: "First name is required",
                      })}
                      className="placeholder:font-ClashDisplay placeholder:text-[16px] bg-transparent placeholder:text-[#E7E8EA] w-full mt-1 py-[10px] px-[14px] border border-[#E7E8EA] rounded-[8px]  text-[#64FFDA] focus:outline-none focus:ring-2 focus:ring-[#[#64FFDA]]"
                    />
                    {errors.first_name && (
                      <p className="text-[#64FFDA] text-sm mt-1">
                        {errors.first_name.message?.toString()}
                      </p>
                    )}
                  </div>

                  <div className="space-y-[8px]">
                    <label className="block font-ClashDisplay text-[#E7E8EA] text-[16px]">
                      Last name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter last name"
                      {...register("last_name", {
                        required: "Last name is required",
                      })}
                      className="placeholder:font-ClashDisplay placeholder:text-[16px] text-[#64FFDA] bg-transparent placeholder:text-[#E7E8EA] w-full mt-1 py-[10px] px-[14px] border border-[#E7E8EA] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#[#64FFDA]]"
                    />
                    {errors.last_name && (
                      <p className="text-[#64FFDA] text-sm mt-1">
                        {errors.last_name.message?.toString()}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-[8px]">
                  <label className="block font-ClashDisplay text-[#E7E8EA] text-[16px]">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    className="placeholder:font-ClashDisplay placeholder:text-[16px] bg-transparent placeholder:text-[#E7E8EA] text-[#64FFDA] w-full mt-1 py-[10px] px-[14px] border border-[#E7E8EA] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#[64FFDA]]"
                  />
                  {errors.email && (
                    <p className="text-[#64FFDA] text-sm mt-1">
                      {errors.email.message?.toString()}
                    </p>
                  )}
                </div>

                <div className="space-y-[8px]">
                  <label className="block font-ClashDisplay text-[#E7E8EA] text-[16px]">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      placeholder="Message"
                      {...register("description", {
                        required: "Message is required",
                        maxLength: {
                          value: 600,
                          message: "Message cannot exceed 600 characters",
                        },
                      })}
                      onChange={(e) => {
                        const input = e.target.value;
                        if (input.length <= 600) {
                          register("description").onChange(e);
                          setCharCount(input.length);
                        } else {
                          e.target.value = input.slice(0, 600);
                          setCharCount(600);
                        }
                      }}
                      className="placeholder:font-ClashDisplay placeholder:text-[16px] text-[#64FFDA] bg-transparent placeholder:text-[#E7E8EA] w-full mt-1 py-[10px] px-[14px] border border-[#E7E8EA] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#[#64FFDA]] pb-8"
                      rows={4}
                    />
                    <div className="absolute bottom-2 right-3 text-sm text-[#E7E8EA] font-ClashDisplay">
                      {charCount}/600 characters
                    </div>
                  </div>
                  {errors.description && (
                    <p className="text-[#64FFDA] text-sm mt-1">
                      {errors.description.message?.toString()}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-ClashDisplaySemiBold text-[16px] py-3 rounded-md transition ${
                    isSubmitting
                      ? "bg-gray-500 cursor-not-allowed"
                      : " border border-[#64FFDA]  text-[#64FFDA]"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
