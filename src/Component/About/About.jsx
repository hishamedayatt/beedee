import React from 'react'
import './About.css'
import about_img from '../../assets/about1.png'
import { motion } from 'framer-motion'
import {fedeIn} from '../../motion'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
      </div>
      <motion.div variants={fedeIn("left",0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once:false,amount:0.7}} className="about-right">
        <h3>ABOUT COMPANY</h3>
        <h2>Building Dreams, Simplifying Business</h2>
        <p>At Beedee Associates FZE, we are dedicated to turning your business dreams into reality. Whether you’re an entrepreneur setting up a new venture or a seasoned professional expanding your operations, our comprehensive solutions ensure a seamless and efficient process.</p>
        <p>We are dedicated to simplifying your business journey in the UAE. Whether you're an entrepreneur starting your venture or an established company expanding operations, our comprehensive services ensure a seamless experience.</p>
      </motion.div>
      
    </div>
  )
}

export default About
