import React from 'react'
import { NavbarDemo } from '../components/Navbar';
import Carousel from '../components/Carousel';
import WobbleCardComp from '../components/WobbleCard';
import StickyScrollReveal from '../components/StickyScroll';
import { Testimonials } from '../components/Testimonials';
// import Routers from './components/Routers';
const Home = () => {
  return (
    <>
    <div className="relative w-full">
        <NavbarDemo />
        {/* <Routers /> */}
        <Carousel />
      </div>
      <WobbleCardComp />
      <StickyScrollReveal />
      <Testimonials />
    </>
  )
}

export default Home