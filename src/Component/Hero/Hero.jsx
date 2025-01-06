import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/down.png'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import {fedeIn} from '../../motion'

const Hero = () => {
  return (
    <div  className='hero container'>
      <motion.div         
              variants={fedeIn("down",0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false,amount:0.7}} className="hero-text">
        <h1>Empowering Your Business Journey </h1>
        <p>
            At  Beedee Associates FZE, we specialize in providing a comprehensive range of services designed to support and streamline your business needs. Here’s a detailed breakdown of what we offer:
            
        </p>
        <button  className='btn'><Link to='service' smooth={true} offset={-260} duration={500}>Explore More</Link> <img src={dark_arrow} alt="" /></button>
      </motion.div>
    </div>
  )
}

export default Hero
