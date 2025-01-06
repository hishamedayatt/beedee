import React, { useState } from 'react'
import './Services.css'
import business from '../../assets/custom.png'
import custom from '../../assets/custom1.png'
import document from '../../assets/custom2.png'
import visa from '../../assets/custom3.png'
// import { useLoaderData } from 'react-router-dom';
// import { Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {fedeIn} from '../../motion'
import { Link } from 'react-router-dom'

const serviceData = [
  {
    id:1,
    Image: business,
    title: "Business Setup (Free Zone/Mainland)",
    description: "We specialize in setting up businesses in Free Zones for 100% ownership and tax benefits or in the Mainland for unrestricted market access.",
  },
  {
    id:2,
    Image: custom,
    title: "Customs Clearance",
    description: "Simplify your import and export operations with our efficient customs clearance services.",
  },
  {
    id:3,
    Image: document,
    title: " Documentation Assistance",
    description: "We provide professional assistance for preparing, verifying, and submitting documents for trade licenses, permits, tax filings.",
  },
  {
    id:4,
    Image: visa,
    title: "Visa & Immigration Services",
    description: "We assist with investor, employment, family, and residency visas, ensuring your workforce meet all UAE regulations.",
  },
];


const Services = () => {

  
    return (
      <div className='service'>
        <motion.div 
                    variants={fedeIn("up",0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false,amount:0.7}}
        
        className="service-grid"> 
          {serviceData.map((service, id) => (
            <div className="service-card" key={service.id}>

              <div className="icon"><img src={service.Image} alt="" /></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
           
              {/* <button className='btn'></button> */}
              <div className="service-arrow">
                <span><Link to={`/service/${service.id}`}>More &#10140;</Link></span> 
               </div>

            </div>
            
            
            
          ))}

        </motion.div>


      </div>

  )
}

export default Services
