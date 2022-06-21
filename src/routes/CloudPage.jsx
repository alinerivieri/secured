import React from 'react'
import Footer from '../components/footer/Footer'
import CloudComponent from '../components/cloud/Cloud'
import Navbar from '../components/navbar/Navbar'

const Cloud = () => {
  return (
    <div>
      <Navbar/>
      <CloudComponent/>
      <Footer/>
    </div>
  )
}

export default Cloud