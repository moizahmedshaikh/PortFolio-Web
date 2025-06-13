import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <div>
        <Image
          src={"/images/logo.png"}
          alt="logo"
          width={180}
          height={180}
          className="mx-auto"
        />
      </div>
      <div className=" px-2 flex items-center flex-wrap justify-center text-white space-x-10 space-y-4 font-semibold">
        <div className="mt-4">Home</div>
        <div>Services</div>
        <div>Project</div>
        <div>Reviews</div>
        <div>Contact</div>
      </div>
      <p className="text-center mt-6 text-white opacity-60">
        &copy; 2024 All Rights Reserved by WebDev Warriors
      </p>
    </div>
  );
};

export default Footer;
