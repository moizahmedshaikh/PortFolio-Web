import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'


type Props = {
  showNav: boolean;
  closeNav: ()=>void
};

const MobileNav = ({showNav,closeNav}:Props) => {

  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]"

  return (
    <div className='lg:hidden'>
      {/* OverLay */}
      <div className={`fixed inset-0 ${navOpen} transform transition-all duration-500 z-[1000] bg-black opacity-70 w-full h-screen`}></div>
      {/* NavLinks */}
      <div className={`fixed ${navOpen} transform transition-all duration-500 delay-300 text-white flex flex-col justify-center h-full w-[80%] sm:w-[60%] bg-[#0f0715] z-[10000] space-y-6`}>
        {navLinks.map((navlink)=>{
          return(
            <Link key={navlink.id} href={navlink.url} onClick={closeNav}>
              <p className='nav_link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm-text-[30px]'>{navlink.label}</p>
            </Link>
          )
        })}
      {/* close Button */}
      <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] w-6 h-6 sm:w-8 sm:h-8 text-white'/>
      </div> 
    </div>
  )
}

export default MobileNav