"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Comma from "@assets/quote.svg";
import ArrowLeft from "@assets/arrow-left.svg";
import ArrowRight from "@assets/arrow-right.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Worker1 from "@assets/workers (1).png";
import Worker2 from "@assets/workers (2).png";
import Worker3 from "@assets/workers (3).png";
import Worker4 from "@assets/workers (4).png";
const testimonials = [
  {
    name: "Chidi A",
    location: "Lagos",
    feedback:
      "Work&Shop made it so simple to connect with reliable artisans. I found a great electrician within minutes!",
    image: Worker1,
  },
  {
    name: "Chidi A",
    location: "Abuja",
    feedback:
      "Work&Shop made it so simple to connect with reliable artisans. I found a great electrician within minutes!",
    image: Worker2,
  },
  {
    name: "Chidi A",
    location: "Edo",
    feedback:
      "Work&Shop made it so simple to connect with reliable artisans. I found a great electrician within minutes!",
    image: Worker3,
  },
  {
    name: "Chidi A",
    location: "Kano",
    feedback:
      "Work&Shop made it so simple to connect with reliable artisans. I found a great electrician within minutes!",
    image: Worker4,
  },
  {
    name: "Chidi A",
    location: "Kastina",
    feedback:
      "Work&Shop made it so simple to connect with reliable artisans. I found a great electrician within minutes!",
    image: Worker3,
  },
];

interface ArrowProps {
  onClick?: () => void;
}

const CustomPrevArrow = ({ onClick }: ArrowProps) => (
  <div className="cursor-pointer" onClick={onClick}>
    <Image src={ArrowLeft} alt="arrowleft" />
  </div>
);

const CustomNextArrow = ({ onClick }: ArrowProps) => (
  <div className="cursor-pointer" onClick={onClick}>
    <Image src={ArrowRight} alt="arrowRight" />
  </div>
);

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const sliderRef = React.useRef<Slider>(null);

  const goToNext = () => sliderRef.current?.slickNext();
  const goToPrev = () => sliderRef.current?.slickPrev();
  const handleMouseEnter = () => sliderRef.current?.slickPause();
  const handleMouseLeave = () => sliderRef.current?.slickPlay();

  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  return (
    <div className="my-[50px] max-w-6xl mx-[10px] md:mx-auto">
      <div className="max-w-[455px] mx-auto text-center" data-aos="fade-up">
        <p className="font-ClashDisplay text-[20px] text-[#9B0000]">
          Testimonial
        </p>
        <p className="font-ClashDisplaySemiBold text-[24px] lg:text-[40px] text-[#101010]">
          What our users say about us?
        </p>
      </div>

      <div className="mt-[32px]">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-2">
              <div className="space-y-[24px] border border-[#48484A] p-[12px] rounded-[8px] w-full md:w-[265px] h-[267px]">
                <div className="flex items-center gap-[14px]">
                  <div className="h-[58px] w-[58px] rounded-full overflow-hidden bg-slate-400">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={58}
                      height={58}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="space-y-[4px]">
                    <p className="font-ClashDisplaySemiBold text-[#48484A] text-[16px]">
                      {testimonial.name}
                    </p>
                    <p className="font-ClashDisplay text-[16px] text-[#48484A]">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                <Image src={Comma} alt="Comma" />
                <p className="font-ClashDisplay text-[16px] text-[#48484A]">
                  {testimonial.feedback}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div
        className="max-w-[265px] w-full mx-auto mt-[32px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center justify-between">
          <CustomPrevArrow onClick={goToPrev} />
          <CustomNextArrow onClick={goToNext} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
