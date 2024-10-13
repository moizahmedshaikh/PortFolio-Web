"use client"

import React, { useEffect } from 'react'
import Hero from '../Hero/Hero';
import About from '../../app/About/page';
import Services from '../../app/Services/page';
import Project from '../../app/Project/page';
import Skills from './Skills/Skills';
import Reviews from '../../app/Reviews/page';
import Contact from '../../app/Contact/page';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function Home(){

  useEffect(()=>{
    const initAos = async()=>{
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      })
    }
    initAos()
  },[])


  return (
    <div className='overflow-hidden'>
      <Hero/>
      <About/>
      <Services/>
      <Project/>
      <Skills/>
      <Reviews/>
      <Contact/>
    </div>
  )
}

export default Home;