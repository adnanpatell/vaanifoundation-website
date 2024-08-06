import { useState } from 'react'


import { HoveredLink, Menu, MenuItem, ProductItem } from "../src/components/ui/navbar-menu";
function App() {


  return (
    <>
      <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
    </>
  )
}

export default App
