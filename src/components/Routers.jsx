import React from 'react'
import { Route,Routes } from 'react-router-dom'
import ContactUs from './ContactUs'
import Carousel from './Carousel'
import  {Gallery} from './Gallery'
import  Home  from './Home'
const Routers = () => {
  return (
            <>
        <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/contact-us' element={<ContactUs />} />
                <Route exact path='/gallery' element={<Gallery />} />
        </Routes>
        </>

  )
}

export default Routers