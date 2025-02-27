"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const FAQ = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);
  return (
    <div className="my-[50px] max-w-6xl mx-[10px] md:mx-auto" id="faq">
      <p
        className="font-ClashDisplay text-[20px] text-[#9B0000]"
        data-aos="fade-up"
      >
        Faq
      </p>
      <p
        className="font-ClashDisplaySemiBold text-[24px] lg:text-[40px] text-[#101010]"
        data-aos="fade-up"
      >
        Frequently Asked Questions
      </p>

      <div className="mt-[32px] grid lg:grid-cols-2 gap-[32px] lg:gap-[22px]">
        <div
          className="text-[#FFFFFF] border border-[#9B0000] bg-[#9B0000] py-[10px] px-[25px] rounded-[8px] h-[192px] lg:h-[223px]"
          data-aos="fade-up"
        >
          <p className="font-ClashDisplaySemiBold text-[20px] lg:text-[24px]">
            What is Work&Shop?
          </p>
          <p className="font-ClashDisplay text-[16px] lg:text-[20px]">
            Work&Shop is a platform that connects users with skilled
            professionals, artisans, and businesses for various services. It
            also allows businesses to sell tools and essential supplies.
          </p>
        </div>

        <div
          className="text-[#48484A] border border-[#9B0000] bg-[#ffffff] py-[10px] px-[25px] rounded-[8px] h-[192px] lg:h-[223px]"
          data-aos="fade-up"
        >
          <p className="font-ClashDisplaySemiBold text-[20px] lg:text-[24px]">
            How do I hire a professional on Work&Shop?
          </p>
          <p className="font-ClashDisplay text-[16px] lg:text-[20px]">
            Simply browse service categories, select a professional, and contact
            them directly through the app to discuss your needs and finalize the
            booking.
          </p>
        </div>

        <div
          className=" order-4 lg:order-3 text-[#48484A] border border-[#9B0000] bg-[#ffffff] py-[10px] px-[25px] rounded-[8px] h-[192px] lg:h-[223px]"
          data-aos="fade-up"
        >
          <p className="font-ClashDisplaySemiBold text-[20px] lg:text-[24px]">
            Can businesses sell products on Work&Shop?
          </p>
          <p className="font-ClashDisplay text-[16px] lg:text-[20px]">
            Yes! Businesses can create a shop, list products, and sell tools or
            other essential supplies to customers.
          </p>
        </div>

        <div
          className="order-3 lg:order-4 text-[#FFFFFF] border border-[#9B0000] bg-[#9B0000] py-[10px] px-[25px] rounded-[8px] h-[192px] lg:h-[223px]"
          data-aos="fade-up"
        >
          <p className="font-ClashDisplaySemiBold text-[20px] lg:text-[24px]">
            How do I make payments?
          </p>
          <p className="font-ClashDisplay text-[16px] lg:text-[20px]">
            Work&Shop offers secure in-app payment options, allowing you to pay
            for services and purchases safely.
          </p>
        </div>

        <div
          className=" order-5 text-[#FFFFFF] border border-[#9B0000] bg-[#9B0000] py-[10px] px-[25px] rounded-[8px] h-[192px] lg:h-[223px]"
          data-aos="fade-up"
        >
          <p className="font-ClashDisplaySemiBold text-[20px] lg:text-[24px]">
            Is Work&Shop available in my city?
          </p>
          <p className="font-ClashDisplay text-[16px] lg:text-[20px]">
            Work&Shop is expanding rapidly! Check the app or website to see if
            services are available in your location.
          </p>
        </div>

        <div
          className="order-6 text-[#48484A] border border-[#9B0000] bg-[#ffffff] py-[10px] px-[25px] rounded-[8px] h-[192px] lg:h-[223px]"
          data-aos="fade-up"
        >
          <p className="font-ClashDisplaySemiBold text-[20px] lg:text-[24px]">
            How do I contact support if I have issues?
          </p>
          <p className="font-ClashDisplay text-[16px] lg:text-[20px]">
            You can reach our support team through the app or visit our website
            for assistance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
