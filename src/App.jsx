import { useState } from 'react'


import { HoveredLink, Menu, MenuItem, ProductItem } from "../src/components/ui/navbar-menu";
import { NavbarDemo } from './components/Navbar';
import { ImagesSliderDemo } from './components/Carousel';
import { Section } from 'lucide-react';
import { WobbleCardDemo } from './components/WobbleCard';
function App() {


  return (
    <>
      <div className="relative w-full flex items-center justify-center">
      <NavbarDemo />
      <ImagesSliderDemo />
    </div>
      <WobbleCardDemo />
    </>
  )
}

export default App
