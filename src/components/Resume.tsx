"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
const Resume = () => {
  const experiences = [
    {
      title: "Product Designer | Leptons Multiconcpet, Nigeria",
      period: "May 2024 – Present (Hybrid, Full Time)",
      responsibilities: [
        "Designed visually appealing and user-friendly interfaces for various digital products.",
        "Created wireframes and prototypes for testing.",
        "Collaborated with cross-functional teams to ensure designs met design and technical requirements.",
        "Conducted user research and usability testing to gather user feedback.",
      ],
    },
    {
      title:
        "Product Designer Tutor | Raadaa Partners International Limited, Nigeria",
      period: "November 2023 – March 2024 (Onsite, Contract)",
      responsibilities: [
        "Provided instruction on designing user-friendly interfaces for digital products.",
        "Guided students in creating wireframes and prototypes, emphasizing testing.",
        "Facilitated collaborative projects, ensuring students understood design and technical requirements.",
        "Directed student projects involving user research and usability testing.",
      ],
    },
    {
      title: "Product Designer | Khemshield, Nigeria",
      period: "September 2022 – October 2023 (Remote, Full Time)",
      responsibilities: [
        "Designed visually appealing and user-friendly interfaces for various digital products.",
        "Created wireframes and prototypes for testing.",
        "Collaborated with cross-functional teams to ensure designs met design and technical requirements.",
        "Conducted user research and usability testing to gather user feedback.",
      ],
    },
  ];

  const skills = [
    "Wireframing and Prototyping",
    "Information Architecture",
    "Interaction Design",
    "User Research & Customer Insights",
    "User Testing",
    "Persona Development",
    "Stakeholder & Cross-functional Collaboration",
    "Agile & Scrum Methodologies",
    "Data Analysis & Metrics",
    "Market & Competitive Analysis",
  ];

  const education = [
    {
      degree: "PGD in Computer Science ( In-view )",
      institution: "National Open University of Nigeria",
      period: "2025 - Present",
    },
    {
      degree: "HND in Computer Science ( In-view )",
      institution: "Federal Polytechnic Nekede Owerri, Imo State",
      period: "November, 2016 - October, 2021",
    },
  ];

  const certifications = [
    "Google Professional UX Design Certification",
    "IBM Professional Product Management Certificate ( In-View )",
  ];

  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  return (
    <div
      className="max-w-7xl px-[20px] mx-auto my-[30px] lg:my-[64px] text-[#FFFFFF]"
      data-aos="fade-up"
    >
      <div className="flex items-center justify-center mb-[32px]">
        <button className="md:hidden px-[16px] sm:px-[32px] py-[12px] text-[16px] font-ClashDisplaySemiBold border border-[#64FFDA] rounded-[8px] text-[#64FFDA]">
          Download my resume
        </button>
      </div>

      <div className="max-w-[900px] mx-auto p-[12px] md:p-[40px] rounded-[16px] space-y-[32px] bg-[#172A45]">
        <div className="md:hidden flex items-center justify-center">
          <div className="w-[50px] h-[50px] rounded-full border overflow-hidden">
            <Image
              src="/assets/profile-picture.jpg"
              alt="Patrick Chimezie Chukwudifu"
              width={50}
              height={50}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="border border-[#FFFFFF] p-[17px] rounded-[8px]">
          <div className="grid place-items-center md:flex items-start gap-[16px] md:gap-[23px]">
            <div className="hidden md:block">
              <div className="w-[50px] h-[50px] rounded-full border overflow-hidden">
                <Image
                  src="/assets/profile-picture.jpg"
                  alt="Patrick Chimezie Chukwudifu"
                  width={50}
                  height={50}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="space-y-[8px] text-left">
              <p className="font-ClashDisplaySemiBold text-[24px]">
                Patrick Chimezie Chukwudifu
              </p>
              <p className="font-ClashDisplay text-[16px] text-justify leading-relaxed">
                I&apos;m a Product Designer with 3 years of experience creating
                user-centered, intuitive digital experiences. Skilled in user
                research, wireframing, and prototyping, I focus on turning
                complex problems into simple, effective solutions. With a strong
                attention to detail and a user-first mindset, I drive designs
                that enhance usability, improve engagement, and deliver
                measurable business outcomes.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-[26px]">
          <div className="border border-[#FFFFFF] p-[17px] rounded-[8px]">
            <div className="space-y-[24px]">
              <p className="font-ClashDisplaySemiBold text-[20px] md:text-[24px]">
                EXPERIENCE
              </p>

              {experiences.map((experience, index) => (
                <div key={index}>
                  <div className="space-y-[16px]">
                    <div>
                      <p className="font-ClashDisplaySemiBold text-[16px] text-justify leading-relaxed">
                        {experience.title}
                      </p>
                      <p className="font-ClashDisplay opacity-50 text-[16px] text-justify leading-relaxed">
                        {experience.period}
                      </p>
                    </div>
                    <div className="font-ClashDisplay text-[16px]">
                      {experience.responsibilities.map(
                        (responsibility, respIndex) => (
                          <p key={respIndex} className="">
                            ● {responsibility}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="border border-[#C5C5C5] my-[24px]"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-[32px]">
            <div className="border border-[#FFFFFF] p-[17px] rounded-[8px] space-y-[24px]">
              <p className="font-ClashDisplaySemiBold text-[24px]">CONTACT</p>
              <div className="font-ClashDisplay text-[16px] space-y-[10px]">
                <div className="flex items-center gap-[6px]">
                  <Image
                    src="/assets/eva_email-fill.svg"
                    width={20}
                    height={20}
                    alt="email-icon"
                  />
                  <p className="">patoski716@gmail.com</p>
                </div>
                <div className="flex items-center gap-[6px]">
                  <Image
                    src="/assets/akar-icons_linkedin-box-fill.svg"
                    width={20}
                    height={20}
                    alt="linkedin-icon"
                  />
                  <p className="">patrick-chukwudifu-908b901ab</p>
                </div>
                <div className="flex items-center gap-[6px]">
                  <Image
                    src="/assets/fluent_call-28-filled.svg"
                    width={20}
                    height={20}
                    alt="call-icon"
                  />
                  <p className="">+2348167000077</p>
                </div>
              </div>
            </div>

            <div className="border border-[#FFFFFF] p-[17px] rounded-[8px] space-y-[24px]">
              <p className="font-ClashDisplaySemiBold text-[20px] md:text-[24px]">
                SKILLS
              </p>
              <div className="font-ClashDisplay text-[16px] space-y-[10px]">
                {skills.map((skill, index) => (
                  <p key={index} className="">
                    {skill}
                  </p>
                ))}
              </div>
            </div>

            <div className="border border-[#FFFFFF] p-[17px] rounded-[8px] space-y-[16px]">
              <p className="font-ClashDisplaySemiBold text-[20px] md:text-[24px]">
                EDUCATION
              </p>
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="font-ClashDisplay text-[16px] space-y-[7px]"
                >
                  <p className="">{edu.degree}</p>
                  <p className="">{edu.institution}</p>
                  <p className="opacity-50">{edu.period}</p>
                  {index < education.length - 1 && (
                    <div className="h-[10px]"></div>
                  )}
                </div>
              ))}
            </div>

            <div className="border border-[#FFFFFF] p-[17px] rounded-[8px] space-y-[24px]">
              <p className="font-ClashDisplaySemiBold text-[20px] md:text-[24px]">
                CERTIFICATION
              </p>
              <div className="font-ClashDisplay text-[16px] space-y-[10px]">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-[6px]">
                    <Image
                      src="/assets/checkmark-square-04.svg"
                      width={20}
                      height={20}
                      alt="certification-icon"
                    />
                    <p className="font-ClashDisplay text-[16px]">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-[44px]">
        <button className="hidden md:block px-[16px] sm:px-[32px] py-[12px] text-[16px] font-ClashDisplaySemiBold border border-[#64FFDA] rounded-[8px] text-[#64FFDA]">
          Download my resume
        </button>
      </div>
    </div>
  );
};

export default Resume;
