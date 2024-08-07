import { useState } from 'react'


import { HoveredLink, Menu, MenuItem, ProductItem } from "../src/components/ui/navbar-menu";
import { NavbarDemo } from './components/Navbar';
import Carousel from './components/Carousel';
import WobbleCardComp from './components/WobbleCard';
import StickyScrollReveal from './components/StickyScroll';
import { Testimonials } from './components/Testimonials';

function App() {


  return (
    <>
    
      <div className="relative w-full">
        <NavbarDemo />
        <Carousel />
      </div>
      <WobbleCardComp />
      <StickyScrollReveal />
      <Testimonials />
    </>
  )
}

export default App
