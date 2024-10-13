import SectionHeading from "@/Components/Helper/SectionHeading";
import { aboutInfo } from "@/Data/data";
import React from "react";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      {/* SectionHeading */}
      <SectionHeading> About Me</SectionHeading>
      <div className="m-auto w-[80%] grid grid-cols-1 lg:grid-cols-2 mt-20 items-center gap-8">
        {/* Text Content */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-base text-gray-500">
            {aboutInfo.description}
          </p>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-700 w-7 h-7 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 font-bold">
                FrontEnd Development
              </p>
            </div>

            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-orange-700 w-7 h-7 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 font-bold">
                BackEnd Development
              </p>
            </div>

            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-red-800 w-7 h-7 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 font-bold">
                FullStack Development
              </p>
            </div>
          </div>
        </div>
        {/* Stats Content */}
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
          className="grid grid-cols-2 gap-16 items-center lg:mx-auto"
        >
          {/* 1st State */}
          <div>
            <Image
              src={"/images/goal.png"}
              alt="Customer"
              width={80}
              height={80}
              className="mx-auto"
            />
            {/* <p className="mt-3 font-bold text-center text-xl text-white">
              {aboutInfo.goal}
            </p> */}
            <p className=" pt-1 text-base sm:text-lg text-gray-400 text-center">
              Artificial Intelligence Integration
            </p>
          </div>
          {/* 2nd State */}
          <div>
            <Image
              src={"/images/experience.png"}
              alt="Customer"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className=" pt-2 text-base sm:text-lg text-gray-400 text-center">
              Passionate about continuous learning
            </p>
          </div>
          {/* 3rd State */}
          <div>
            <Image
              src={"/images/completed.png"}
              alt="Customer"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className=" pt-4 text-base sm:text-lg text-gray-400 text-center">
              Completed Projects
            </p>
          </div>
          {/* 4rt State */}
          <div>
            <Image
              src={"/images/rocket.png"}
              alt="Customer"
              width={80}
              height={80}
              className="mx-auto"
            />

            <p className="text-base sm:text-lg text-gray-400 text-center">
              Website Launched
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
