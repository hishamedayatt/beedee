import React from 'react'
import './Title.css'
import { motion } from 'framer-motion'
import {fedeIn} from '../../motion'


const Title = ({subTitle , title}) => {
  return (
    <motion.div 
            variants={fedeIn("left",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false,amount:0.7}}
     className='title'>
        {/* <p>{subTitle}</p> */}
        <h3>{subTitle}</h3>
        <h2>{title}</h2>
      
    </motion.div>
  )
}

export default Title
