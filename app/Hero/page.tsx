import { BaseInfo } from "@/Data/data";
import Image from "next/image";
import React from "react";
import { FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <div className="bg-[#0f0715] w-full pt-[5vh] md:pt-[12vh ] h-screen overflow-hidden relative text-white">
      <div className="h-full flex justify-center flex-col w-4/5 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <div>
            <h1
              data-aos="fade-left"
              className="text-gray-300 text-2xl md:text-3xl lg:text-4xl mb-5 font-semibold"
            >
              {" "}
              I am {BaseInfo.name}
            </h1>
            {/* Title */}
            <h1
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white"
            >
              {BaseInfo.position}
            </h1>
            {/* Descriptio */}
            <p
              data-aos="fade-left"
              data-aos-delay="200"
              className="mt-6 text-sm md:text-base text-white opacity-60"
            >
              {BaseInfo.description}
            </p>
            {/* Button */}
            <button
              data-aos="zoom-in"
              data-aos-delay="300"
              className=" md:px-8 md:py-2.5 rounded-lg px-6 py-1.5 text-white text-sm md:text-lg transition-all duration-200 mt-8 bg-blue-700 hover:bg-blue-900 flex items-center space-x-2"
            >
              <span>Download CV</span>
              <FaDownload />
            </button>
          </div>
          {/* Image Content */}
          <div data-aos="zoom-in" data-aos-delay="400" className="mx-auto mt-6 hidden lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-x-hidden">
            <Image
              src={BaseInfo.profilePic}
              alt="profile-Image"
              height={410}
              width={410}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
