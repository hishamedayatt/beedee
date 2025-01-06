import React from 'react'
import Navebar from '../Component/Navebar/Navebar'
import Hero from '../Component/Hero/Hero'
import Services from '../Component/Services/Services'
import Title from '../Component/Title/Title'
import About from '../Component/About/About'
import Faq from '../Component/Faq/Faq'
import Whychoose from '../Component/Whychoose/Whychoose'
import Contactus from '../Component/Contactus/Contactus'
import Footer from '../Component/Footer/Footer'
const Home = () => {
  return (
    <div>
    <Navebar/>
      <Hero/>
        <div className="container">
          <Title subTitle='Our PROGRAM' title='What We Offer'/>
          <Services/>
          <About />
          <Title subTitle='Best Consulting Firm' title='The Best Choice For Your Successful Business!'/>
          <Whychoose/>
          <Faq/>
         <Title subTitle='Let’s Connect!' title='Let’s Build Your Business Together'/>
        <Contactus/>
        </div>
    <Footer/>
    </div>
  )
}

export default Home
