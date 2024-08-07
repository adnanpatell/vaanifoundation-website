import { useState } from 'react'


import { HoveredLink, Menu, MenuItem, ProductItem } from "../src/components/ui/navbar-menu";
import { NavbarDemo } from './components/Navbar';
import { ImagesSliderDemo } from './components/Carousel';
import { Section } from 'lucide-react';
function App() {


  return (
    <>
      <div className="relative w-full flex items-center justify-center">
      <NavbarDemo />
      <ImagesSliderDemo />
      
    </div>
    <div className='relative w-full flex items-center justify-center'>
        <p className='text-8xl font-extrabold'>Adnan</p>
      </div>
    </>
  )
}

export default App
