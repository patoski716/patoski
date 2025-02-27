import React from "react";
import Image from "next/image";
import Check from "@assets/checkmark-square-04.svg";

const About = () => {
  const specialties = [
    "User Experience (UX) & Interface Design (UI)",
    "Product Strategy & Roadmapping",
    "Cross-functional Collaboration",
    "Agile & Scrum Methodologies",
  ];

  const certifications = [
    "Google Professional UX Design Certification",
    "IBM Professional Product Management Certificate",
  ];

  const Item = ({ text }: { text: string }) => (
    <div className="flex items-center gap-2">
      <Image src={Check} alt="check-icon" className="w-5 h-5" />
      <p className="font-ClashDisplay text-[#E7E8EA] text-[16px]">{text}</p>
    </div>
  );

  return (
    <div className="max-w-7xl mx-[10px] md:mx-auto my-[30px] lg:my-[64px]">
      <div className="space-y-8 max-w-[820px] w-full">
        <div className="flex items-center gap-5">
          <p className="font-ClashDisplaySemiBold text-[#E7E8EA] text-[20px] md:text-[40px] flex items-center gap-2">
            <span className="text-[#64FFDA] text-[16px] text-center">01</span>
            About me
          </p>
          <p className="w-full max-w-[219px] border border-[#E7E8EA]"></p>
        </div>

        <p className="font-ClashDisplay text-[16px] text-[#E7E8EA] text-justify">
          I’m a Product Manager & Product Designer passionate about creating
          intuitive, user-centric digital products. With a strong foundation in
          UX/UI design, product strategy, and problem-solving, I bridge the gap
          between design, development, and business goals to build scalable and
          impactful solutions.
        </p>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <p className="font-ClashDisplaySemiBold text-[20px] text-[#E7E8EA]">
              Specialties
            </p>
            <div className="space-y-4">
              {specialties.map((item, index) => (
                <Item key={index} text={item} />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="font-ClashDisplaySemiBold text-[20px] text-[#E7E8EA]">
              Certification
            </p>
            <div className="space-y-4">
              {certifications.map((item, index) => (
                <Item key={index} text={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
