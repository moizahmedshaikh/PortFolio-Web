"use client"

import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'
import { constants } from 'buffer'

const ResponsiveNav = () => {
    const [showNav, setShowNav] = useState(false);

    const showNavHandler = () => setShowNav(true);
    const hideNavHandler = () => setShowNav(false);


  return (
    <div>
        <Nav openNav={showNavHandler}/>
        <MobileNav showNav={showNav} closeNav={hideNavHandler}/>
    </div>
  )
}

export default ResponsiveNav