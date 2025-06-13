import React, { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

// Define props type

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`fixed ${
        navBg ? "bg-[#240b39]" : "fixed"
      } transition-all duration-300 h-[12vh] w-full z-[10]`}
    >
      <div className="flex justify-between items-center h-full w-[95%] md:w-[90%] xl:w-[85%] mx-auto">
        {/* Nav Logo */}
        <Image
          src={"/images/logo.png"}
          alt="LOGO"
          height={170}
          width={170}
          className="ml-[-1.5rem] sm:ml-0"
        />
        {/* Nav Links */}
        <div className=" flex items-center space-x-10">
          <div className="hidden lg:flex justify-center space-x-8">
            {navLinks.map((navlink) => {
              return (
                <Link key={navlink.id} href={navlink.url}>
                  <p className="nav_link">{navlink.label}</p>
                </Link>
              );
            })}
          </div>
          {/*Buttons  */}
          <div className="flex items-center space-x-4">
            <button className=" md:px-10 md:py-3 px-8 py-3 text-blue-800 sm:text-base text-sm font-semibold bg-white hover:bg-gray-300 transition-all duration-200 rounded-lg">
              Hire Me
            </button>
            {/* Burger menu */}
            <HiBars3BottomRight
              onClick={openNav}
              className="w-8 h-8 cursor-pointer text-white lg:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
